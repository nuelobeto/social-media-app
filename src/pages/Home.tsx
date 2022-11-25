import Main from "./../components/Main";
import "../assets/styles/Home.scss";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "./../app/hooks";
import { shuffleArray } from "../utils/arrayFormatter";
import { daysPosted } from "./../utils/timeFormatter";
import { useState } from "react";
import { PostType } from "../types/postTypes";

const Home = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
  const { posts } = useAppSelector((state) => state.posts);
  const [post, setPost] = useState<PostType | null>(null);

  console.log({ post });

  return (
    <Main>
      <div className="home_wrapper">
        <div className="home_main">
          <div className="stories">
            <div>
              {dummyData.map((item, index) => (
                <div key={index} className="story"></div>
              ))}
            </div>
          </div>

          <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="post" onClick={() => setPost(post)}>
                <div className="post_header">
                  <div className="post_owner">
                    <div className="post_avi">
                      <img src={post.userAvi} alt="" />
                    </div>
                    <span>
                      {post.username} •{" "}
                      <span className="post_time">
                        {daysPosted(post.created_at)}
                      </span>
                    </span>
                  </div>
                  <BiDotsHorizontalRounded className="post_menu" />
                </div>
                <div className="post_media"></div>
                <div className="post_body">
                  <div className="post_actions">
                    <button>
                      <FaRegHeart /> <span>123</span>
                    </button>
                    <button>
                      <FaRegComment /> <span>123</span>
                    </button>
                  </div>
                  <div className="no_of_comments"></div>
                  <div className="post_caption">{post.caption}</div>
                </div>
                <div className="add_comment">
                  <input type="text" placeholder="Add a comment..." />
                  <button>Post</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trending"></div>
      </div>
    </Main>
  );
};

export default Home;
