import gabeKick1 from "./samples/Gabriel Set 1/808 kick.mp3";


function MusicTest() {
    const audioElement =  new Audio(gabeKick1);
    var audioCtx = null;
    var gainNode = null;
    var panNode = null;
    var freqNode = null;
    

    const createAudioContext = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
    }
    const initNodes = () => {
        const source = audioCtx.createMediaElementSource(audioElement);
        source.connect(audioCtx.destination);

        audioElement.loop = true;

        // gain init
        gainNode = audioCtx.createGain();
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        // pan init
        panNode = audioCtx.createStereoPanner();
        source.connect(panNode);
        panNode.connect(audioCtx.destination);  

        // filter init
        freqNode = audioCtx.createBiquadFilter();
        source.connect(freqNode);
        freqNode.connect(audioCtx.destination);
        freqNode.type = "lowpass";
    }

    const updateGain = () => {
        const gainSlider = document.getElementsByClassName("gainControl")[0].value;
        gainNode.gain.setValueAtTime(parseFloat(gainSlider), audioCtx.currentTime);
    }

    const updatePanner = () => {
        const panSlider = document.getElementsByClassName("panControl")[0].value;
        panNode.pan.setValueAtTime(parseFloat(panSlider), audioCtx.currentTime);
    }

    const updateFrequency = () => {
        const freqSlider = document.getElementsByClassName("freqControl")[0].value;
        freqNode.frequency.setValueAtTime(freqSlider, audioCtx.currentTime);
        freqNode.gain.setValueAtTime(40, audioCtx.currentTime);
    }

    return (
        <div>
            <button className="btn btn-secondary" onClick={createAudioContext}>
                Start
            </button>
            <button className="btn btn-success" onClick={initNodes}>
                Choose Song
            </button>
            <input onChange={updateGain} className="gainControl" step="0.01" type="range" min="-1" max="1"/>
            <input onChange={updatePanner} className="panControl" step="0.01" type="range" min="-1" max="1"/>
            <input onChange={updateFrequency} className="freqControl" type="range" min="0" max="22000"/>
            <button className="btn btn-primary" onClick={() => audioElement.play()}>
                Play
            </button>
            <button className="btn btn-danger" onClick={() => audioElement.pause()}>
                Pause
            </button>
        </div>
    )

}

export default MusicTest;