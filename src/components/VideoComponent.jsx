import PropTypes from 'prop-types' 
import { useEffect, useRef, useState } from 'react';



const VideoComponent = () => {
    const myVideo = useRef(null);
    const [bookmark, setBookmark] = useState("-");
    const [duration, setDuration] = useState("-");
  
    const handleSkipForward = () => {
      myVideo.current.currentTime += 10;
    };
  
    const handleSkipBackward = () => {
      myVideo.current.currentTime -= 5;
    };
  
    useEffect(() => {
      if (myVideo.current) {
        myVideo.current.addEventListener("timeupdate", () => {
          setBookmark(myVideo.current.currentTime.toFixed(2));
          setDuration(myVideo.current.duration.toFixed(2));
        });
      }
    }, []);
  
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <video
          id="myVideo"
          className="absolute top-0 left-0 w-full h-full"
          ref={myVideo}
          controls
        >
          <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
  
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleSkipForward}
            className="px-5 py-2 border-none bg-pink-500 text-white text-base mr-5"
          >
            Avanzar 10s
          </button>
          <button
            onClick={handleSkipBackward}
            className="px-5 py-2 border-none bg-pink-500 text-white text-base mr-5"
          >
            Retroceder 5s
          </button>
          <span className="px-5 py-2 bg-pink-500 text-white text-base">
            Marcador: {bookmark}
          </span>
          <span className="px-5 py-2 bg-pink-500 text-white text-base ml-5">
            Duración: {duration}
          </span>
        </div>
      </div>
    );
  };

/*const VideoComponent = () => {

    const videoRef = useRef(null);
    const durationRef = useRef(null);

    const handleTimeUpdate = () => {
        durationRef.current.innerHTML = `Duration: ${videoRef.current.currentTime.toFixed(2)}s / ${videoRef.current.duration.toFixed(2)}s`;
    }

    const bookMark = () => {
        // Implement bookmark functionality here
    }

    const jumpForward = () => {
        videoRef.current.currentTime += 10;
    }

    const jumpBackward = () => {
        videoRef.current.currentTime -= 10;
    }

    return (
        <div >
            <video id="videoPlayer" controls style={{ width: "100%" }} ref={videoRef} onTimeUpdate={handleTimeUpdate}>
                <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
            </video>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button onClick={bookMark} style={{ padding: "6px 12px", marginRight: "10px" }}>Bookmark</button>
                <button onClick={jumpForward} style={{ padding: "6px 12px", marginRight: "10px" }}>Jump Forward</button>
                <button onClick={jumpBackward} style={{ padding: "6px 12px" }}>Jump Backward</button>
            </div>
            <div id="duration" style={{ marginTop: "10px" }} ref={durationRef}></div>
        </div>
    )
}*/


VideoComponent.propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}



export default VideoComponent



