import "./index.scss";
import flavor from "../../resources/images/flavor.webp";
import { me } from "../../config/me";
import GamesTable from "../GamesTable/GamesTable";
type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="projects">
      <h1>Games Library</h1>
      <GamesTable />
    </div>
  );
}
