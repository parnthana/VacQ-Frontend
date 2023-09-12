"use client";
import React from "react";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {
  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("shadow-2xl");
      event.currentTarget.classList.add("bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.remove("bg-neutral-200");
      event.currentTarget.classList.add("shadow-lg");
      event.currentTarget.classList.add("bg-white");
    }
  }

  function onCarSelected() {
    alert("You select " + contentName);
  }

  return (
    <div
      className="w-1/5 h-[300px] rounded-lg shadow-lg bg-white"
      onClick={() => onCarSelected()}
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
