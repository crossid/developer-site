---
slug: echo-with-oauth2
title: Protect Echo with OAuth2
description: An introduction to the System for Cross-domain Identity Management.
image: https://cdn.labstack.com/images/echo-logo.svg
author: Asaf Shakarzy
author_title: Core Team
author_url: https://github.com/asaf
tags: [oauth2, openid, golang, echo, jwt, jwk]
---

[Echo](https://echo.labstack.com) is a high performance, extensible, minimalist Go web framework.

This post explains how to protect _Echo_ endpoints with access token issued by _Crossid_ OAuth2 auth server.

## Init an Echo app

```bash
mkdir myapp && cd myapp
go mod init myapp
go get github.com/labstack/echo/v4
go get github.com/MicahParks/keyfunc
```

Lets create _server.go_ with few routes that require different access level.

```go {12,16,20}
package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
    // accessible anonymously.
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Public!")
	})
    // renders the authenticated user.
	e.GET("/whoami", func(c echo.Context) error {
		return c.String(http.StatusOK, "Whoami!")
	})
    // accessible only by users that assigned to the "admin" scope.
	e.GET("/admin", func(c echo.Context) error {
		return c.String(http.StatusOK, "Admin!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
```

We defined three routes:

| route   | access level                                                               |
| ------- | -------------------------------------------------------------------------- |
| /       | accessible by everyone including anonymous visitors.                       |
| /whoami | accessible by any authenticated user                                       |
| /admin  | accessible by an authenticated user that is assigned to the _admin_ scope. |

Start server

```bash
go run server.go
```

At this point, all routes are accessible by everyone:

```bash
curl http://localhost:1323/
curl http://localhost:1323/whoami
curl http://localhost:1323/admin
```

## Auth middleware

Echo has its own [JWT middleware](https://echo.labstack.com/middleware/jwt/) to protect routes with JWTs.

Lets create a JWT Middleware instance:

```go {3,26}
func authmw() echo.MiddlewareFunc {
    // jwksURL is the URL of the public JSON Web Tokens that sign our tokens.
	jwksURL := "https://<tenant>.crossid.io/oauth2/.well-known/jwks.json"
	jwks, err := keyfunc.Get(jwksURL, keyfunc.Options{
		RefreshErrorHandler: func(err error) {
			panic(fmt.Sprintf("There was an error with the jwt.KeyFunc\nError:%s\n", err.Error()))
		},
	})

	if err != nil {
		panic(fmt.Sprintf("Failed to create JWKs from resource at the given URL.\nError:%s\n", err.Error()))
	}

	// initialize JWT middleware instance
	return middleware.JWTWithConfig(middleware.JWTConfig{
		// skip public endpoints
		Skipper: func(context echo.Context) bool {
			return context.Path() == "/"
		},
		KeyFunc: func(token *jwt.Token) (interface{}, error) {
			// a hack to convert jwt -> v4 tokens
			t, _, err := new(jwtv4.Parser).ParseUnverified(token.Raw, jwtv4.MapClaims{})
			if err != nil {
				return nil, err
			}
			return jwks.KeyFunc(t)
		},
	})
}
```

- line 3 - We must provide a valid well known JWKs endpoint where all public keys used to sign tokens are exposed.
- line 26 - is the actual function that performs the access token verification against the authorization server keys.

## Use MW in Echo

Simple tell Echo to use the jwt middleware before all routes.

```go

func main() {
	e := echo.New()
    e.Use(authmw())
    // ...
}

```

## Protecting admin

To protect admin route with specific scopes, replace the _admin_ handler with:

```go {3}
e.GET("/admin", func(c echo.Context) error {
    // the authenticated token is store by the middleware as "user"
    tok := c.Get("user").(*jwt.Token)
    // access token scopes
    scps := tok.Claims.(jwt.MapClaims)["scp"].([]interface{})
    allowed := false
    for _, scp := range scps {
        if scp == "admin" {
            allowed = true
            break
        }
    }

    if !allowed {
        return c.JSON(http.StatusForbidden, map[string]string{"message": "Insufficient privileges"})
    }

    return c.String(http.StatusOK, "Admin!")
})
```

## Whoami endpoint

Lets implement the _whoami_ route to print the verified token's claims:

```go
e.GET("/whoami", func(c echo.Context) error {
    cl := c.Get("user").(*jwt.Token).Claims.(jwt.MapClaims)
    return c.JSONPretty(http.StatusOK, cl, "  ")
})
```

## Recap

We have seen how simple is to start an [Echo](https://echo.labstack.com/) server with various access levels route protection.

### What's next?

- See [Get Started](/docs/guides/get-started) guide how to use Crossid, you can start for free.
- For other frameworks see [Languages](/docs/languages).

Full sample available at [here](https://github.com/crossid/crossid-go/blob/main/examples/oauth2_echo/main.go).

## References

- https://echo.labstack.com/middleware/jwt/
