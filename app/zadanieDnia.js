//Twój kod

const arr = process.argv;
const newArr=[];

for(let i=2; i<arr.length; i++){
    newArr.push(Number(arr[i]));
};


// console.log(newArr);
newArr.forEach(function(el){

    setTimeout(() => {
        console.log(el)
    }, el*1000 ) 
})