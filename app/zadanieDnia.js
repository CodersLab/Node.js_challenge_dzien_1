const arguments = process.argv.slice(2);

arguments.forEach(x =>
    setTimeout(() =>
    console.log(x), Number(x)*1000));
