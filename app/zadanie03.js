//Twój kod

let [element,index,...array] = [...process.argv];

let result = array.reduce((prev,next) => parseInt(prev,10)+parseInt(next,10));
console.log(result);
