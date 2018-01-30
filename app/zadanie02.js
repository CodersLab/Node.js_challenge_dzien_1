// //Twój kod
//wersja 2

const arr = ["Witam", "się", "z", "programem", "Node.js", "w konsoli", "i korzystam", "z funkcji czasu"]

for(let i=0; i<arr.length;i++){
    const myTimeoutAutomated = setTimeout(()=>{
        console.log(arr[i])
    }, i*1000)
}
