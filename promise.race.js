/**
 * promise race는 all과 비슷하지만 가장 먼저 처리되는 프라미스의 결과나 에러를 반환한다
 * 가장 먼저 처리되는 결과를 반환하고 나머지 프라미스는 실행이 되지만 결과는 반환하지 않는다
 */
console.log('시작 시간', new Date().toLocaleTimeString());
Promise.race([
    new Promise((resolve) => { setTimeout(() => { console.log('첫 번째', new Date().toLocaleTimeString()); resolve(1)}, 3000) }),
    new Promise((resolve, reject) => { setTimeout(() => { console.log('두 번째', new Date().toLocaleTimeString()); reject(new Error('에러 발생'))}, 2000) }),
    new Promise((resolve) => { setTimeout(() => { console.log('세 번째', new Date().toLocaleTimeString()); resolve(3)}, 1000) }),
]).then(result => console.log(result));
console.log('종료 시간', new Date().toLocaleTimeString());