import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
});

const Mermaid = ({ children }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);
  return <div className="mermaid">{children.replace(/;/g, "\n")}</div>;
};

export default Mermaid;
