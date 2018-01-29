//Twój kod

const args = process.argv;

args.forEach((val, index) => {
    if (index !== 0 && index !== 1){
        setTimeout(() => {
          console.log(val);  
        }, parseInt(val)*1000);
    }
});