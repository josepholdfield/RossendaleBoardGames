import "./index.scss";
import { me } from "../../config/me";
import github from "../../resources/icons/github.svg";
import linkedIn from "../../resources/icons/linkedIn.svg";
import instagram from "../../resources/icons/instagram.svg";
import phone from "../../resources/icons/phone.svg";
import logo from "../../resources/images/logo.png";
import library from "../../resources/icons/library.png";
import { slide as Menu } from "react-burger-menu";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="about">
      <img src={logo} className="logo" />
      <h1>{me.name.toUpperCase()}</h1>
      <span className="line"></span>
      <ul className="keylinks">
        <a href="https://www.facebook.com/profile.php?id=100093958892062&sk=events">
          <h3>Events</h3>
        </a>
        <a href="https://linktr.ee/RossendaleBoardGames">
          <h3>Donate</h3>
        </a>
        <a href="https://www.facebook.com/groups/906176714025102">
          <h3>Community</h3>
        </a>
      </ul>
    </div>
  );
}
