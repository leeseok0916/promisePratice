const promises = [
    new Promise((reject) => { setTimeout(() => { console.log('첫 번째', new Date().toLocaleTimeString()); reject(new Error('에러1 발생')) }, 3000) }),
    new Promise((reject) => { setTimeout(() => { console.log('두 번째', new Date().toLocaleTimeString()); reject(new Error('에러2 발생')) }, 2000) }),
    new Promise((resolve) => { setTimeout(() => { console.log('세 번째', new Date().toLocaleTimeString()); resolve(3) }, 1000) }),
];

Promise.race(promises)
.then(promises => promises.map(promise => Promise.reject(promise)))
.catch(error => { console.error(error.message) });