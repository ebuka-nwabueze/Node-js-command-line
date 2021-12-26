const { resolve } = require("path");

// function delay(ms) {
//     // your code
//     return new Promise((resolve) => {
//         setTimeout((resolve),ms)
//       })
// };
  
// delay(3000).then(() => console.log('runs after 3 seconds'));
loadScript("/article/promise-chaining/one.js")
.then(script1 => {loadScript("/article/promise-chaining/two.js")});
.then(script2 => {
  loadScript("/article/promise-chaining/three.js").then(script3 => {
    // this function has access to variables script1, script2 and script3
    one();
    two();
    three();
  });
});


new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);


new Promise(function(resolve, reject) {
  setTimeout(() => {
  reject(new Error("Whoops!"))
  }, 1000);
  }).catch(alert);