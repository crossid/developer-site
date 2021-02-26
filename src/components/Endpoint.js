import React from "react";

const colors = {
  GET: "#0EA5E9",
  PUT: "#F97316",
  PATCH: "#8B5CF6",
  POST: "#22C55E",
  DELETE: "#BE123C",
};

function Method({ value }) {
  return (
    <span
      style={{
        backgroundColor: colors[value],
        color: "#fff",
        paddingRight: "0.5rem",
        paddingLeft: "0.5rem",
        borderRadius: "2px",
      }}
    >
      {value}
    </span>
  );
}

function Path({ value }) {
  return (
    <span
      style={{
        paddingRight: "0.5rem",
        paddingLeft: "0.5rem",
        backgroundColor: "#F5F8FA",
      }}
    >
      {value}
    </span>
  );
}

function Endpoint({ method, path }) {
  return (
    <span
      style={{
        borderTop: "1px solid #F5F8FA",
        borderRight: "1px solid #F5F8FA",
        borderLeft: "1px solid #F5F8FA",
        borderBottom: "1px solid #F5F8FA",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
      }}
    >
      <Method value={method.toUpperCase()} />
      <Path value={path} />
    </span>
  );
}

export default Endpoint;
