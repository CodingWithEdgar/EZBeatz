import React, { useState } from "react";
import kick from './samples/trad_kick_01_C.wav'

export default function Music(props) {
    const [audioPlaying, setAudioPlaying] = useState(false);

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