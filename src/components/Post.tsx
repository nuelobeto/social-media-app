import "../assets/styles/Post.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PostType } from "../types/postTypes";
import { daysPosted } from "../utils/timeFormatter";
import { useAppSelector } from "./../app/hooks";
import { useState } from "react";
import PostImgModal from "./PostImgModal";

type PostProp = {
  post: PostType;
};

const Post = ({ post }: PostProp) => {
  const { comments } = useAppSelector((state) => state.comments);
  const postComments = comments.filter(
    (comments) => comments.postId === post.id
  );
  const [showPostImgModal, setShowPostImgModal] = useState(false);
  // const likedPosts = [1];

  const showComments = () => {
    console.log(postComments);
  };

  return (
    <>
      <div className="post">
        <div className="post_header">
          <div className="post_owner">
            <div className="post_avi">
              <LazyLoadImage src={post.userAvi} alt="" />
            </div>
            <span>
              {post.username} •{" "}
              <span className="post_time">{daysPosted(post.created_at)}</span>
            </span>
          </div>
          <BiDotsHorizontalRounded className="post_menu" />
        </div>
        <div className="post_media" onClick={() => setShowPostImgModal(true)}>
          <LazyLoadImage src={post.media} alt="" />
        </div>
        <div className="post_body">
          <div className="post_actions">
            <button>
              <FaRegHeart /> <span>{post.likes}</span>
            </button>
            <button onClick={() => showComments()}>
              <FaRegComment /> <span>{postComments.length}</span>
            </button>
          </div>
          <div className="post_caption">{post.caption}</div>
        </div>
        <div className="add_comment">
          <input type="text" placeholder="Add a comment..." />
          <button>Post</button>
        </div>
      </div>

      {showPostImgModal && (
        <PostImgModal setShowPostImgModal={setShowPostImgModal} post={post} />
      )}
    </>
  );
};

export default Post;
