/**
 * Promise.allSettled는 모든 프라미스가 처리될 때까지 기다리지 않고, 각각의 프라미스가 처리되면 별도의 객체로 결과를 반환한다
 */
// Promise.allSettled([
//     new Promise((resolve) => { setTimeout(() => { console.log('첫 번째', new Date().toLocaleTimeString()); resolve(1)}, 3000) }),
//     new Promise((resolve, reject) => { setTimeout(() => { console.log('두 번째', new Date().toLocaleTimeString()); reject(new Error('에러 발생'))}, 2000) }),
//     new Promise((resolve) => { setTimeout(() => { console.log('세 번째', new Date().toLocaleTimeString()); resolve(3)}, 1000) }),
// ]).then(result => console.log(result))
// .catch(error => console.log(error));
/**
 [
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: 에러 발생
        at Timeout._onTimeout (/Users/twostones/Documents/privateProject/promisePratice/promise.allSettled.js:6:120)
        at listOnTimeout (node:internal/timers:573:17)
        at process.processTimers (node:internal/timers:514:7)
  },
  { status: 'fulfilled', value: 3 }
]
 */

Promise.allSettled([
    new Promise((resolve) => { setTimeout(() => { console.log('첫 번째', new Date().toLocaleTimeString()); resolve(1)}, 3000) }),
    new Promise((resolve, reject) => { setTimeout(() => { console.log('두 번째', new Date().toLocaleTimeString()); reject(new Error('에러 발생'))}, 2000) }),
    new Promise((resolve) => { setTimeout(() => { console.log('세 번째', new Date().toLocaleTimeString()); resolve(3)}, 1000) }),
]).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log(result.value);
        } else {
            console.log(result.reason.message);
        }
    });
});