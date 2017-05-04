// import React from 'react';
// import $ from 'jquery';
//
// let AudioContext = window.AudioContext || window.webkitAudioContext;
// let context = new AudioContext();
// let audioBuffer = null;
// let sourceNode = null;
// var javascriptNode;
// let analyser;
// console.log('context is: ');
// console.log(typeof context);
// let ctx = $("#myCanvas").get()[0].getContext("2d");
// console.log('ctxctx');
// console.log(typeof ctx);
// let gradient = ctx.createLinearGradient(0, 0, 0, 300);
//     gradient.addColorStop(1,'#535777');
//     gradient.addColorStop(0.75,'#ff0000');
//     gradient.addColorStop(0.25,'#ffff00');
//     gradient.addColorStop(0,'#ffffff');
//
//     setupAudioNodes();
//
// function setupAudioNodes() {
//   javascriptNode = context.createScriptProcessor(2048, 1, 1);
//   console.log('-- javascriptNode --');
//   console.log(javascriptNode);
//   javascriptNode.connect(context.destination);
//
//   analyser = context.createAnalyser();
//   console.log('-- analyser --');
//   console.log(typeof analyser);
//   analyser.smoothingTimeConstant = 0.3;
//   analyser.fftSize = 1024;
//
//   sourceNode = context.createBufferSource();
//   console.log('-- sourceNode --');
//   console.log(typeof sourceNode);
//   sourceNode.connect(analyser);
//
//   analyser.connect(javascriptNode);
//   sourceNode.connect(context.destination);
// }
//
// function loadSound(url) {
//   let request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.responseType = 'arraybuffer';
//
//   request.onload = () => {
//     context.decodeAudioData(request.response, (buffer) => {
//       playSound(buffer);
//     }, onError);
//   };
//   request.send();
// }
//
// function playSound(buffer) {
//   sourceNode.buffer = buffer;
//   sourceNode.start(0);
// }
//
// function onError(e) {
//   console.log(e);
// }
//
// javascriptNode.onaudioprocess = () => {
//   var array = new Uint8Array(analyser.frequencyBinCount);
//   analyser.getByteFrequencyData(array);
//
//   //clear the current state
//   ctx.clearRect(0, 0, 1000, 325);
//
//   // set the fill style
//   ctx.fillStyle = gradient;
//   drawSpectrum(array);
// };
//
// function drawSpectrum(array) {
//     for ( var i = 0; i < (array.length); i++ ){
//         var value = array[i];
//
//         ctx.fillRect(i*5,325-value,3,325);
//         //  ==console.log([i,value])
//     }
// }
//
//
//
// const Audio = () => {
//     return (
//       <div>
//         {loadSound('commons/ride.m4a')}
//       </div>
//     );
// }
//
// export default Audio;
