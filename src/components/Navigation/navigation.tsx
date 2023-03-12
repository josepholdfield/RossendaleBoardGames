import React, { useRef, useEffect } from "react";
import "./index.scss";
import About from "../about/About";
import Projects from "../projects/projects";

type Props = {};

export default function Navigation({}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <About />
      <div ref={ref}>
        <Projects />
      </div>
    </>
  );
}
