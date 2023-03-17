import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Guides",
    to: "https://crossid.io/docs",
    imageUrl: "img/undraw_guides.svg",
    description: (
      <>
        Guides with <code>code</code> examples how to integrate with CrossID.
      </>
    ),
  },
  {
    title: "Concepts",
    to: "https://crossid.io/docs/concepts/application",
    imageUrl: "img/undraw_concepts.svg",
    description: <>How CrossID Works.</>,
  },
  {
    title: "Reference",
    to: "/api/v1",
    imageUrl: "img/undraw_reference.svg",
    description: <>API References</>,
  },
];

function Feature({ imageUrl, title, description, to }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>
        <Link style={{ color: "black" }} to={useBaseUrl(to)}>
          {title}
        </Link>
      </h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The identity hub for your apps, APIs and devices."
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a
              className={clsx(
                "button button--outline button--primary button--lg",
                styles.getStarted
              )}
              href={"https://crossid.io/docs"}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
