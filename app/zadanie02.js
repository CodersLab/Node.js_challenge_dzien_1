// //Twój kod
//
// setTimeout(()=>{
//     console.log("Node.js")
// },4000);
//
// setTimeout(()=>{
//     console.log("się")
// },1000);
//
// setTimeout(()=>{
//     console.log("Witam")
// },);
//
// setTimeout(()=>{
//     console.log("i korzystam")
// },6000);
//
// setTimeout(()=>{
//     console.log("z funkcji czasu")
// },7000);
//
// setTimeout(()=>{
//     console.log("z")
// },2000);
//
// setTimeout(()=>{
//     console.log("programem")
// },3000);
//

const sec = 1000;
const	array = [
    		{
    			txt: 'Node.js',
    			time: 4,
    		},
		{
			txt: 'się',
    			time: 1,
    		},
		{
			txt: 'Witam',
    			time: 0,
    		},
		{
			txt: 'i korzystam',
    			time: 6,
    		},
		{
			txt: 'w konsoli',
    			time: 5,
    		},
		{
			txt: 'z funkcji czasu!',
    			time: 7,
    		},
		{
			txt: 'z',
				time: 2,
    		},
		{
				txt: 'programem',
            time: 3,
    		},
	];



array.forEach(el => {
    pokaz_text(el)
});

function pokaz_text(obj){
    setTimeout(()=>{
        console.log(obj.txt)
    },obj.time * sec);
}