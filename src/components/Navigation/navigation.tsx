import { useRef, useState } from "react";
import "./index.scss";
import About from "../about/About";
import Projects from "../projects/projects";

export default function Navigation() {
  const [didScroll, setDidScroll] = useState(false);

  const about = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);

  const handleScroll = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setDidScroll(!didScroll);
  };

  return (
    <>
      <div ref={about}>
        <About />
      </div>
      <div className="navigation">
        <button onClick={() => handleScroll(didScroll ? projects : about)}>
          test
        </button>
      </div>
      <div ref={projects}>
        <Projects />
      </div>
    </>
  );
}
