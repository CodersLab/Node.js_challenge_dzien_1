//Twój kod
let arr = {
  4000: 'Node.js',
  1000: 'się',
  0: 'Witam',
  6000: 'i korzystam',
  5000: 'w konsoli',
  7000: 'z funkcji czasu',
  2000: 'z',
  3000: 'programem'
};
for (let i in arr) {

        setTimeout(() => {
            console.log(arr[i]);
        }, i);

}
