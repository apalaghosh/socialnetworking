import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { DummyPosts } from "../../DummyData";
import { useContext, useEffect } from "react";
import StateContext from "../../Context/Context";
import { getPosts } from "../../data/PostData";
import axios from "axios";

export default function Feed({ username }) {
  const { post, handlePosts } = useContext(StateContext);

  useEffect(() => {
    const getPosts = async () => {
      const res = username
        ? await axios.get("/posts/Profile/" + username)
        : await axios.get("posts/timeline/61336eac98b9ffc18d5f85c1");
      handlePosts(res.data);
    };
    getPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

// export default function Feed() {
//   return (
//     <div className="feed">
//       <div className="feedWrapper">
//         <Share />
//         {DummyPosts.map((p) => (
//           <Post key={p.id} post={p} />
//         ))}
//       </div>
//     </div>
//   );
// }
