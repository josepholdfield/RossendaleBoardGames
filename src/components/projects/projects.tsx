import "./index.scss";
import flavor from "../../resources/images/flavor.webp";
import { me } from "../../config/me";
type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="projects">
      <div className="panel">
        <div className="image">
          <h2>About Me</h2>
          <img src={flavor} />
        </div>
        <div>
          <p>{me.about}</p>
        </div>
      </div>

      <div className="panel">
        <div>
          <h2>Skills</h2>
        </div>
        <div>
          <h2>Projects</h2>
        </div>
      </div>
    </div>
  );
}
