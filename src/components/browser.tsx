import React from "react";

export default function Browser() {
  let userAgentString = navigator.userAgent;

  let chromeAgent = userAgentString.indexOf("Chrome") > -1;
  let IExplorerAgent =
    userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1;
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
  let safariAgent = userAgentString.indexOf("Safari") > -1;
  let operaAgent = userAgentString.indexOf("OP") > -1;

  // Discard Safari since it also matches Chrome
  // Discard Chrome since it also matches Opera
  if (chromeAgent && safariAgent) safariAgent = false;
  if (chromeAgent && operaAgent) chromeAgent = false;

  let browser = "";
  if (chromeAgent === true) browser = "Google Chrome";
  else if (IExplorerAgent === true) browser = "Internet Explorer";
  else if (firefoxAgent === true) browser = "Firefox";
  else if (safariAgent === true) browser = "Safari";
  else if (operaAgent === true) browser = "Opera";
  else browser = "A cool choice of browser";

  return (
    <>
      <div>
        <p style={{ textAlign: "center" }}>
          You are currently viewing this site on:
        </p>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "-10px 0",
            textAlign: "center",
            color: "#2800FF"
          }}
        >
          {browser}
        </p>
      </div>
    </>
  );
}
