import React, { useState } from "react";
import kick from './samples/trad_kick_01_C.wav'

export default function Music(props) {
<<<<<<< Updated upstream
    const [audioPlaying, setAudioPlaying] = useState(false);
=======
  const AudioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioCtx = new AudioContext();

  const audioTune = new Audio(props.audio);

  const track = audioCtx.createMediaElementSource(audioTune);
  track.connect(audioCtx.destination);

  gainNode = this.audioCtx.createGain();
  gainNode.connect(audioCtx.destination);
  gainNode.gain.value =  0.5;





  const = audioCtx.createMediaElementSource(this.audioElement);


  const[playing, setPlaying] = useState(false)
  const [playInLoop, setPlayInLoop] = useState(true);
  const [_showControls, _setShowControls] = useState(false);
>>>>>>> Stashed changes

    const playAudio = () => {
        setAudioPlaying(true);
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
    }

    const pauseAudio = () => {
        setAudioPlaying(false);
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.pause();
    }

    const toggleAudio = () => {
        if (!audioPlaying) {
            playAudio();
        } else {
            pauseAudio();
        }
    }

    const handleClick = () => {
        toggleAudio();
        showControls();
    }

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
        )
    }
<<<<<<< Updated upstream
  
=======
  };

  const toggleControls = () => {
      _setShowControls(!_showControls);
  }

  const handleClick = () => {
    toggleAudio();
    toggleControls();
  };

  const showControls = () => {
>>>>>>> Stashed changes
    return (
    <div>
        <svg onClick={handleClick} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle fill={props.color} cx="10" cy="10" r="5" ></circle>
        </svg>
        <audio loop className="audio-element">
        <source src={kick}></source>
        </audio>
        <button type="button" className="btn btn-primary">
            Reverb
            <br></br>
            <input type="range" />
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
}