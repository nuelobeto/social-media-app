import Main from "./../components/Main";
import "../assets/styles/Home.scss";
import { useAppDispatch, useAppSelector } from "./../app/hooks";
import Post from "../components/Post";

const Home = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];
  const { posts } = useAppSelector((state) => state.posts);

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
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="trending"></div>
      </div>
    </Main>
  );
};

export default Home;
