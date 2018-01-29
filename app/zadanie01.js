//Twój kod

const msg = {
    first: 'Hello World',
    second: 'Hello node.js!',
}

console.log(msg.first);

setTimeout(() => {
    console.log(msg.second);
}, 5000);