import React, { Component } from "react";
import kick from './samples/trad_kick_01_C.wav'

export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioPlaying: false
    }
    this.playAudio = this.playAudio.bind(this)
    this.toggleAudio = this.toggleAudio.bind(this)
    this.pauseAudio = this.pauseAudio.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.showControls = this.showControls.bind(this)
}
  playAudio() {
    this.audioPlaying = true 
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  pauseAudio() {
    this.audioPlaying = false
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
  }

  toggleAudio() {
      if (!this.audioPlaying) {
          this.playAudio();
      } else {
          this.pauseAudio();
      }
  }
  
  showControls() {
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

  handleClick() {
      this.toggleAudio();
      this.showControls();
  }

  render() {
    return (
      <div>
        <svg onClick={this.handleClick} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle fill={this.props.color} cx="10" cy="10" r="5" ></circle>
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
    )
  }
}