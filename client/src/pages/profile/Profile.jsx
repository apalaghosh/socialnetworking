import "./profile.css";
import Navbar from "../../components/navbar/Navigationbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/newsfeed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import StateContext from "../../Context/Context";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Profile() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user, handleUser } = useContext(StateContext);
  const username = useParams().Username;

  useEffect(() => {
    const getUser = async () => {
      console.log(username);
      const res = await axios.get(`/users?username=${username}`); //may be error
      console.log("This is result");
      console.log(res);
      handleUser(res.data);
    };
    getUser();
  }, [username]); //[post.userId]
  console.log(user.desc);
  console.log(user.profilePicture);
  return (
    <div>
      <Navbar />
      <div className="profile">
        <Sidebar user={user} />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={pf + "11.png" /*user.coverPicture*/ || "blankcp.png"}
                alt=""
                className="coverImage"
              />
              <img
                src={pf + user.profilePicture || pf + "blankdp.png"}
                alt=""
                className="profileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="userName">{user.username}</h4>
              <p className="description">{user.desc}</p>
            </div>
          </div>
          <div className="profileRightButtom"></div>
          <Feed username={username} />
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Profile;
