import "./video.scss";
import {useState} from 'react';


const Video = () => {
 
  const[buttonText , setButtonText] = useState('Discover popular products');
  const changeButtonText = (text) => setButtonText(text);
 
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
            <div className="u-center-text u-margin-top-huge">
              <button  onClick={() => changeButtonText('Sorry this function is not implemented') } className="video-button">{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
