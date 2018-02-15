//Twój kod
process.argv.forEach(( val, index ) => {
  if( index !== 0 && index !== 1 ) {
    setTimeout( () => {
      console.log( parseInt( val ));
    }, val * 1000 );
  };
});
