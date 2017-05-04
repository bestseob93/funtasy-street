var concat = require('concat-stream');
var FormData = require('form-data');
var axios = require('axios');
var fs = require('fs');
var path = require('path');

console.log(path.join(__dirname, './public/commons/hi.JPG'));

var dada = fs.createReadStream(path.join(__dirname, './public/commons/as.mp4'));
var myForm = new FormData();
myForm.append('file', dada);
console.log(myForm);
// fd.pipe(concat({encoding: 'buffer'}, data => {
//   axios.post("/hello", data, {
//     headers: fd.getHeaders()
//   })
// }))
myForm.pipe(concat({encoding: 'buffer'}, data => {
  axios.post('http://13.124.19.213:3000/api/v1/upload', data, { headers: myForm.getHeaders() });

}));
