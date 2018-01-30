//Twój kod

const array_to_write = [];

array_to_write[4] = "Node.js";
array_to_write[1] = "się";
array_to_write[0] = "Witam";
array_to_write[6] = "i korzystam";
array_to_write[5] = "w konsoli";
array_to_write[7] = "z funkcji czasu!";
array_to_write[2] = "z";
array_to_write[3] = "programem";

array_to_write.forEach((text, time) => {
    writeText(text, time);
});


/**
 *  @text string
 *  @time integer (seconds)
 */

function writeText(text, time) {
    if (Number.isInteger(time) && time >= 0) {
        setTimeout(() => {
            console.log(text);
        }, time * 1000);
    }
    else {
        console.log("Czas musi być liczbą dodatnią");
    }
}