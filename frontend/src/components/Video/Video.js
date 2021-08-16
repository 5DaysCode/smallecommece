import "./video.scss";

const Video = () => {
  return (
    <>
      <div className="videocontainer">
        <div className="main">
          <video id="headerView" className="videosection" autoPlay loop muted>
            <source src="/videos/pexel.mp4" type="video/mp4"></source>
          </video>

          <div className="titleDescription">
            <p className="title">Our Products</p>
            <a className="description">
              SmallEcommerce for people who know's what is Quality!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;