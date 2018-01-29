//Twój kod
const textArray = { 
  4: 'Node.js',
  1: 'się',
  0: 'Witam',
  6: 'i korzystam',
  5: 'w konsoli',
  7: 'z funkcji czasu',
  2: 'z',
  3: 'programem'
}

for (let i = 0, len = Object.keys(textArray).length; i < len; i++) {
  const interval = setTimeout(() => {
    process.stdout.write(textArray[i] + ' ');
    if (i === (len - 1)) {
      process.stdout.write('\033[1D\033[K.\n'); //usuń ostatnią spację i wpisz kropkę
    }
  }, i*300);
}