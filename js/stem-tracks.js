var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1'
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200 //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
  {
    "src": "http://naomiaro.github.io/waveform-playlist/media/audio/Vocals30.mp3",
    "name": "Vocals",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "http://naomiaro.github.io/waveform-playlist/media/audio/Guitar30.mp3",
    "name": "Guitar"
  },
  {
    "src": "http://naomiaro.github.io/waveform-playlist/media/audio/PianoSynth30.mp3",
    "name": "Pianos & Synth",
    "gain": 1
  },
  {
    "src": "http://naomiaro.github.io/waveform-playlist/media/audio/BassDrums30.mp3",
    "name": "Drums"
  }
]).then(function() {
  //can do stuff with the playlist.
});
