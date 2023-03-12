import "./index.scss";
import { me } from "../../config/me";
import github from "../../resources/icons/github.svg";
import linkedIn from "../../resources/icons/linkedIn.svg";
import instagram from "../../resources/icons/instagram.svg";
import phone from "../../resources/icons/phone.svg";
import { useEffect, useRef } from "react";

export default function About() {
  return (
    <div className="about">
      <div className="links">
        <h1>{me.name}</h1>
        <p>
          {me.title} at {me.company}
        </p>
        <div className="social">
          <a
            rel="noreferrer"
            target={"_blank"}
            href={me.github}
            children={<img src={github} alt={"Github"} />}
          />
          <a
            rel="noreferrer"
            href={me.github}
            target={"_blank"}
            children={<img src={linkedIn} alt={"Instagram"} />}
          />
          <a
            rel="noreferrer"
            href={me.github}
            target={"_blank"}
            children={<img src={instagram} alt={"LinkedIn"} />}
          />
          <a
            rel="noreferrer"
            target={"_blank"}
            href={me.github}
            children={<img src={phone} alt={"call"} />}
          />
        </div>
      </div>
    </div>
  );
}
