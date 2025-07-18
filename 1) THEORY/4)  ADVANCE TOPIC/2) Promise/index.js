  //Promise in javascript

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('Success!') : reject('Error!');
    }, 2000);
  });

  myPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  console.log('Promise Has Been created');