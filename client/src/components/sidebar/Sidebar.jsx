import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  PlayCircleFilled,
  Bookmark,
  Group,
  Event,
  Work,
  School,
  Business,
  LiveHelp,
} from "@material-ui/icons";
// import User from "../../../../api/models/User";

export default function Sidebar({ user }) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeSidebar = () => {
    return (
      <div>
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItems">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItems">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItems">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItems">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItems">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItems">
            <Business className="sidebarIcon" />
            <span className="sidebarListItemText">Business</span>
          </li>
          <li className="sidebarListItems">
            <LiveHelp className="sidebarIcon" />
            <span className="sidebarListItemText">Help</span>
          </li>
        </ul>
      </div>
    );
  };

  const ProfileSidebar = () => {
    return (
      <div>
        <h4 className="sidebarTitle">User Info</h4>
        <div className="sidebarInfo">
          <div className="sidebarInfoItems">
            <div className="sidebarInfoItem">
              <span className="sidebarInfoKey">Lives In:</span>
              <span className="sidebarInfoValue">{user.from}</span>
            </div>
          </div>
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">From:</span>
            <span className="sidebarInfoValue">{user.city}</span>
          </div>
          <div className="sidebarInfoItem">
            <span className="sidebarInfoKey">Work:</span>
            <span className="sidebarInfoValue">
              {user.employment === 1
                ? "Student"
                : user.employment === 2
                ? "Employed"
                : user.employment === 3
                ? "Business"
                : user.employment === 4
                ? "Home Maker"
                : "Do not Reveal"}
            </span>
          </div>
        </div>
        <h4 className="sidebarTitle">User Friends</h4>
        <div className="sidebarFollowings">
          <div className="sidebarFollowing">
            <img src={`${pf}8.png`} alt="" className="sidebarFollowingImg" />
            <span className="sideFollowingName">Emma</span>
          </div>
          <div className="sidebarFollowing">
            <img src={`${pf}9.png`} alt="" className="sidebarFollowingImg" />
            <span className="sideFollowingName">Eli</span>
          </div>
          <div className="sidebarFollowing">
            <img src={`${pf}10.png`} alt="" className="sidebarFollowingImg" />
            <span className="sideFollowingName">Emma</span>
          </div>
          <div className="sidebarFollowing">
            <img src={`${pf}11.png`} alt="" className="sidebarFollowingImg" />
            <span className="sideFollowingName">Emma</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {user ? <ProfileSidebar /> : <HomeSidebar />}
      </div>
    </div>
  );
}
