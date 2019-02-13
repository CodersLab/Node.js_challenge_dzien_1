//Twój kod

const arr = process.argv;

if(arr.length >= 4){
    const newArr = [];
    for(let i=2; i< arr.length; i++){
        newArr.push(Number(arr[i]))
    };
    const sum = newArr.reduce((a, c) => {
        return a + c;
    });
    console.log(sum);
}else{
    console.log("I need two or more argument bro")
}
