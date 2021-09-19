import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function AddIntegration({ name, steps }) {
  return (
    <>
      <Tabs
        defaultValue="console"
        values={[{ label: "Console", value: "console" }]}
      >
        <TabItem value="console">
          <ul>
            <li>
              In Admin console, navigate to{" "}
              <b>Integration &rarr; Marketplace</b>
            </li>
            <li>
              Choose <b>{name}</b> and click on <b>Add Integration</b>
            </li>
            {steps && steps.length ? (
              steps.map((s, i) => <li key={i}>{s}</li>)
            ) : (
              <li>Follow wizard steps.</li>
            )}
          </ul>
        </TabItem>
      </Tabs>
    </>
  );
}
