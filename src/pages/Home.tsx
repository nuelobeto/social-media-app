import Main from "./../components/Main";
import "../assets/styles/Home.scss";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Home = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];

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
            {dummyData.map((item, index) => (
              <div key={index} className="post">
                <div className="post_header">
                  <div className="post_owner">
                    <div className="post_avi"></div>
                    <span>
                      John_Doe • <span className="post_time">4d</span>
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
                  <div className="post_caption">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ea, iure quisquam eaque qui inventore quo.
                  </div>
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
