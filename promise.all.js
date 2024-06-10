// Promise.all 기본 사용법
// result 값은 처리 결과와 상관없이 프라미스의 순서대로 저장된다
// 아래 코드에서 세번째 프라미스가 가장 빨리 처리되었지만, result에는 첫 번째 프라미스가 가장 먼저 저장된다
// console.log('시작 시간', new Date().toLocaleTimeString());
// Promise.all([
//     new Promise((resolve) => { setTimeout(() => { console.log('첫 번째', new Date().toLocaleTimeString()); resolve(1)}, 3000) }),
//     new Promise((resolve) => { setTimeout(() => { console.log('두 번째', new Date().toLocaleTimeString()); resolve(2)}, 2000) }),
//     new Promise((resolve) => { setTimeout(() => { console.log('세 번째', new Date().toLocaleTimeString()); resolve(3)}, 1000) }),
// ]).then(result => console.log(result));
// console.log('종료 시간', new Date().toLocaleTimeString());

/*
const names = ['leeseok0916','haileyjpark','insungHwang'];
const requests = names.map((name) => fetch(`https://api.github.com/users/${name}`));
Promise.all(requests)
.then(responses => {
    for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
    }
    return responses;
})
.then(responses => Promise.all(responses.map(r => r.json())))
.then(users => users.forEach(user => console.log(user.name)));
*/

/* 하나라도 거부가 된 상황
   하나라도 거부가 되면 catch로 넘어가게 된다
   그러나 나머지 프라미스(호출)는 계속 진행된다
 */
   Promise.all([
    new Promise((resolve) => { setTimeout(() => { console.log('첫 번째', new Date().toLocaleTimeString()); resolve(1)}, 3000) }),
    new Promise((resolve, reject) => { setTimeout(() => { console.log('두 번째', new Date().toLocaleTimeString()); reject(new Error('에러 발생'))}, 2000) }),
    new Promise((resolve) => { setTimeout(() => { console.log('세 번째', new Date().toLocaleTimeString()); resolve(3)}, 1000) }),
]).catch(result => console.log(result));