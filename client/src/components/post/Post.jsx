import "./post.css";
import { MoreVert, Favorite, ThumbUp, EmojiEmotions } from "@material-ui/icons";
import StateContext from "../../Context/Context";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
// import { Users } from "../../DummyData";

export default function Post({ post }) {
  const { posts, handlePosts } = useContext(StateContext);
  const [likes, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user, handleUser } = useContext(StateContext);

  useEffect(() => {
    const getUser = async () => {
      console.log(post);
      const res = await axios.get(`/users?userId=${post.userId}`);
      handleUser(res.data);
    };
    getUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src={user.profilPicture} alt="" />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={pf + post.img} alt="" className="postImage" />
        </div>
        <div className="postButton">
          <div className="postButtonLeft">
            <ThumbUp
              className="likeIcon"
              htmlColor="royalblue"
              onClick={likeHandler}
            />
            <Favorite
              className="loveIcon"
              htmlColor="red"
              onClick={likeHandler}
            />
            <EmojiEmotions
              className="reactIcon"
              htmlColor="goldenrod"
              onClick={likeHandler}
            />
            <span className="likeCounter">{likes} people like this</span>
          </div>
          <div className="postButtonRigt"></div>
        </div>
        <div className="postButtom"></div>
      </div>
    </div>
  );
}
