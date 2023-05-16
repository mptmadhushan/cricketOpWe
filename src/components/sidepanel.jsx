import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faGear,
  faRightFromBracket,
  faSquarePollVertical,
  faCloudBolt,
  faRankingStar,
  faPeopleGroup,
  faCircleQuestion,faPeopleRobbery
} from "@fortawesome/free-solid-svg-icons";

function Sidepanel() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const linkClassName =
    "text-gray-400 mb-4 p-3 hover:text-white flex items-center justify-start transition-colors duration-300";

  const activeLinkClassName =
    "text-white mb-4 p-3 flex items-center justify-start transition-colors duration-300";

  const activeIconClassName = "text-blue-500 mx-2";

  return (
    <div className="side-body-wrapper w-1/4 bg-[#25233f] float-left p-[10px] h-full flex flex-col">
      <div className="side-option-panel p-6 flex flex-col ">
        <a
          href="/"
          className={
            activeLink === "Home" ? activeLinkClassName : linkClassName
          }
          onClick={() => handleLinkClick("Home")}
        >
          <FontAwesomeIcon
            icon={faHouse}
            className={activeLink === "Home" ? activeIconClassName : "mx-2"}
          />
          Home
        </a>
        <a
          href="https://www.espncricinfo.com/live-cricket-score"
          className={
            activeLink === "Live Score" ? activeLinkClassName : linkClassName
          }
          onClick={() => handleLinkClick("Live Score")}
        >
          <FontAwesomeIcon
            icon={faSquarePollVertical}
            className={
              activeLink === "Live Score" ? activeIconClassName : "mx-2"
            }
          />
          Live score
        </a>
        <a
          href="https://www.worldweatheronline.com/cricket.aspx"
          className={
            activeLink === "Ground Weather"
              ? activeLinkClassName
              : linkClassName
          }
          onClick={() => handleLinkClick("Ground Weather")}
        >
          <FontAwesomeIcon
            icon={faCloudBolt}
            className={
              activeLink === "Ground Weather" ? activeIconClassName : "mx-2"
            }
          />
          Ground Weather
        </a>
        <a
          href="https://www.espncricinfo.com/rankings/content/page/211270.html"
          className={
            activeLink === "Player ODI Rankings"
              ? activeLinkClassName
              : linkClassName
          }
          onClick={() => handleLinkClick("Player ODI Rankings")}
        >
          <FontAwesomeIcon
            icon={faRankingStar}
            className={
              activeLink === "Player ODI Rankings"
                ? activeIconClassName
                : "mx-2"
            }
          />
          Player ODI Rankings
        </a>
        <a
          href="https://www.espncricinfo.com/team"
          className={
            activeLink === "Team" ? activeLinkClassName : linkClassName
          }
          onClick={() => handleLinkClick("Team")}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={activeLink === "Team" ? activeIconClassName : "mx-2"}
          />
          Team
        </a>
        <a
          href="#"
          className={
            activeLink === "Settings" ? activeLinkClassName : linkClassName
          }
          onClick={() => handleLinkClick("Settings")}
        >
          <FontAwesomeIcon
            icon={faGear}
            className={activeLink === "Settings" ? activeIconClassName : "mx-2"}
          />
          Settings
        </a>
        <a
          href="/Teamselection"
          className={
            activeLink === "Settings" ? activeLinkClassName : linkClassName
          }
          onClick={() => handleLinkClick("Settings")}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={activeLink === "Settings" ? activeIconClassName : "mx-2"}
          />
          Team Selection
        </a>{" "}
        <a
          href="/Winloss"
          className={
            activeLink === "Settings" ? activeLinkClassName : linkClassName
          }
          onClick={() => handleLinkClick("Settings")}
        >
          <FontAwesomeIcon
            icon={faPeopleRobbery}
            className={activeLink === "Settings" ? activeIconClassName : "mx-2"}
          />
          Win loss
        </a>
      </div>

      <div className="flex-grow"></div>
      <hr className="border-slate-400" />
      <div className="side-option-panel p-6 flex flex-col ">
        <a
          href="#"
          className="text-gray-800 mb-4  p-3 bg-blue-500 rounded-md hover:shadow-md hover:text-white"
        >
          {" "}
          <FontAwesomeIcon icon={faCircleQuestion} className="mx-2" />
          Help
        </a>
        <a
          href="#"
          className="text-gray-800 mb-4  p-3 bg-blue-500 rounded-md hover:shadow-md hover:text-white"
        >
          {" "}
          <FontAwesomeIcon icon={faPhone} className="mx-2" />
          Contact Us
        </a>
        <a
          href="#"
          className="text-gray-800 mb-4  p-3 bg-blue-500 rounded-md hover:shadow-md hover:text-white"
        >
          {" "}
          <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" />
          Logout
        </a>
      </div>
    </div>
  );
}

export default Sidepanel;
