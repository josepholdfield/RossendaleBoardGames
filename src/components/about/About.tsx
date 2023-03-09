import "./index.scss";
import { me } from "../../config/me";
import github from "../../resources/icons/github.svg";
import linkedIn from "../../resources/icons/linkedIn.svg";
import instagram from "../../resources/icons/instagram.svg";
import phone from "../../resources/icons/phone.svg";

export default function About() {
  return (
    <div className="about">
      <div className="links">
        <h1>{me.name}</h1>
        <p>
          {me.title} at {me.company}
        </p>
        <div className="social">
          <img src={github} alt={"Github"} />
          <img src={linkedIn} alt={"Instagram"} />
          <img src={instagram} alt={"LinkedIn"} />
          <img src={phone} alt={"call"} />
        </div>
      </div>
    </div>
  );
}
