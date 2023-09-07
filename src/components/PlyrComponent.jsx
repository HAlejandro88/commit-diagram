import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import PropTypes from 'prop-types'


const initControls = [
    "play-large",
    "play",
    "rewind",
    "fast-forward",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions",
    "settings",
    "airplay",
    //"pip",
    "fullscreen"
  ]


  const initCaption = {
    active: true,
    tracks: [
        {
            kind: "captions",
            Label: "Enlgish",
            src: '',// vtt
            srclang: "en",
            default: true
        }
    ]
  }

  const initSources = [
    {
        src: '', // "http://vjs.zencdn.net/v/oceans.mp4"
        type: "video/webm",
        size: 1080
      }
  ]

// learn more https://github.com/sampotts/plyr#the-source-setter

const PlyrComponent = ({ sources = initSources, height = '100vh', width = '100vw', controls = initControls,  caption = initCaption , thunmbnail = {enabled: false, src: '' }, tooltips = false, speed = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2 ], markers = {enabled: true, points: []}, keyboard = false  }) => {

    const videoProps = {
        type: "video",
        sources,
        tracks: caption.tracks
      };

    

  return (
    <div style={{ height, width, display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
      <Plyr
        options={{
          controls: controls,
          captions: { active: caption.active, language: "auto", update: true },
          previewThumbnails: { enabled: thunmbnail.enabled, src: thunmbnail.src },
          tooltips: { controls: tooltips, seek: true},
          speed: { selected: 1, options: speed },
          markers: { enabled: markers.enabled, points: markers.points },
          keyboard: { focused: keyboard, global: true}
        }}
        source={videoProps}
      />
    </div>
  );
}


PlyrComponent.propTypes = {
    sources: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.string,
    width: PropTypes.string,
    controls: PropTypes.arrayOf(PropTypes.string),
    caption: PropTypes.object,
    thunmbnail: PropTypes.object,
    tooltips: PropTypes.bool,
    speed: PropTypes.array,
    markers: PropTypes.object,
    keyboard: PropTypes.bool

}





export default PlyrComponent