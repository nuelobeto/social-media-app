import Main from "./../components/Main";
import "../assets/styles/Home.scss";

const Home = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Main>
      <div className="home_wrapper">
        <div className="home_main">
          <div className="stories">
            <div>
              {stories.map((item, index) => (
                <div key={index} className="story"></div>
              ))}
            </div>
          </div>

          <div className="posts">
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
          </div>
        </div>

        <div className="trending"></div>
      </div>
    </Main>
  );
};

export default Home;
