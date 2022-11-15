import Main from "./../components/Main";
import "../assets/styles/Home.scss";

const Home = () => {
  return (
    <Main>
      <div className="home_wrapper">
        <div className="home_main">
          <div className="stories"></div>

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
