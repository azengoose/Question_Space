import React from "react";

export default function Fullscreen() {
  function requestFullScreen() {
    // document.documentElement.requestFullscreen()
    console.log("unfortunately this probably doesn't work atm");
  }

  return (
    <>
      <button onClick={requestFullScreen} className="btn--cool">
        Fullscreen
      </button>
      {requestFullScreen}
    </>
  );
}
