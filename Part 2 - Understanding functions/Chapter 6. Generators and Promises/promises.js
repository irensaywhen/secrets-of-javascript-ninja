//const ninjaPromise = new Promise((resolve, reject) => {
//  resolve('Hattori');
//});
//
//const ninjaDelayedPromise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve('Hattori');
//  }, 500);
//});

//const promise = new Promise((resolve, reject) => {
//  reject('Rejecting explicitly!');
//}).then(
//  () => console.log('Will never reach this happy path'),
//  error => {
//    console.log(error);
//  }
//);

//const anotherPromise = new Promise((resolve, reject) => {
//  reject('Rejecting!');
//})
//  .then(() => console.log('Happy path...'))
//  .catch(error => console.log(error));
//
//const yetAnotherPromise = new Promise((resolve, reject) => {
//  noSuchVar++;
//}).catch(error => console.log(error.name));

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // Initialize the request
    request.open('GET', url);

    // Register onload handler that will be called if the server has responded
    request.onload = function () {
      try {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(this.status + ' ' + this.statusText);
        }
      } catch (e) {
        reject(e.message);
      }
    };

    // If there's an error while communicating with the server, reject
    request.onerror = function () {
      reject(this.status + ' ' + this.statusText);
    };

    // Send the request
    request.send();
  });
}

module.exports = { getJSON };
