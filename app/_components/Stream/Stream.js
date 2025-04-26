"use client";
import React from "react";
import CallUI from "../CallUI/CallUI";
import { useSelector } from "react-redux";

function Stream() {
  const { inCall, caller, type, channel } = useSelector((state) => state.call);
  console.log("let it rain", inCall, channel);
  return (
    <>
      {inCall && (
        <CallUI inCall={inCall} caller={caller} type={type} channel={channel} />
      )}
    </>
  );
}

export default Stream;
