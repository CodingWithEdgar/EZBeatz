import React, {useEffect, useState} from "react";

export default function Music(props) {
  const audioTune = new Audio(props.audio);
  const[playing, setPlaying] = useState(false)
  const [playInLoop, setPlayInLoop] = useState(true);
  const [_showControls, _setShowControls] = useState(false);

  // load audio file on component load
  useEffect(() => {
      audioTune.load();
  })

  // set the loop of audio tune
  useEffect(() => {
    audioTune.loop = playInLoop;
  }, [playInLoop])

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async function playAudio() {
    if (props.seconds !== 0) {
      console.log("before")
      await sleep((8 - props.seconds + 1) * 1000)
      console.log("hit")
    }
    setPlaying(true);
    audioTune.play();
  }

  const stopAudio = () => {
    setPlaying(false);
    setPlayInLoop(false);
    audioTune.pause();
    audioTune.currentTime = 0;
    console.log("pause")
  };

  const toggleAudio = () => {
    if (!playing) {
      playAudio();
    } else {
      stopAudio();
    }
  };
  
  const toggleControls = () => {
      _setShowControls(!_showControls);
  }

  const handleClick = () => {
    toggleAudio();
    toggleControls();
  };

  const showControls = () => {
    return (
      <div className="btn-group-vertical col">
        <button type="button" className="btn btn-primary">
          Reverb
        </button>
        <button type="button" className="btn btn-success">
          Volume
          <br></br>
          <input type="range" />
        </button>
        <button type="button" className="btn btn-warning">
          Panning
          <br></br>
          <input type="range" />
        </button>
      </div>
    );
  };

  return (
    <div>
      <svg
        onClick={handleClick}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <circle fill={props.color} cx="10" cy="10" r="5"></circle>
      </svg>
      {_showControls ? showControls() : null}
    </div>
  );
}

