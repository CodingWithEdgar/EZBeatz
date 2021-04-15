import React, {useEffect, useState} from "react";

export default function Music(props) {
  const audioTune = new Audio(props.audio);

  const[playing, setPlaying] = useState(false)
  const [playInLoop, setPlayInLoop] = useState(true);
  const [_showControls, _setShowControls] = useState(false);




  // load audio file on component load
  useEffect(() => {
      audioTune.load();
  }, [audioTune])

  // set the loop of audio tune
  useEffect(() => {
    audioTune.loop = playInLoop;
  }, [playInLoop, audioTune])


  const playAudio = () => {
    console.log("play")
    setPlaying(true);
    audioTune.play();
  };

  const stopAudio = () => {
    setPlaying(false);
    setPlayInLoop(false);
    audioTune.pause();
    audioTune.currentTime = 0;
    console.log("pause")
  };

  const createContext = () =>{
    var AudioContext = (window.AudioContext || window.webkitAudioContext);
    const audioCtx = new AudioContext();

    const track = audioCtx.createMediaElementSource(audioTune);
    track.connect(audioCtx.destination);

    const volume = audioCtx.createGain();
    volume.connect(audioCtx.destination);
    volume.gain.value =  0.5;


    const panner = new StereoPannerNode(audioCtx, {pan: 0});
    panner.connect(audioCtx.destination);

    //reverb
    //https://middleearmedia.com/web-audio-api-convolver-node/
    var convolver = audioCtx.createConvolver();


    //filter
    let bandHz = 5000;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = bandHz;
    filter.connect(audioCtx.destination);


    audioTune.play()
    //track.start();
  };

  const toggleAudio = () => {
    if (!playing) {
      playAudio();
      createContext();
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
