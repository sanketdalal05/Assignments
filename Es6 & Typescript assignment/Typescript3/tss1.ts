const sum = (a,b) => a + b;

const first = new Promise((resolve, reject) => {
  const x = 5;
  if (x) resolve(x);
  else reject(x);
});

const second = new Promise((resolve, reject) => {
  const y = 10;
  if (y) resolve(y);
  else reject(y);
});

const allpromises = Promise.all([first, second]);
allpromises.then((sucess) => {
  console.log('sucess: ', sum(sucess[0],sucess[1]));
}).catch(error => console.log('error: ', error));