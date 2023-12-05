// const funcExample = {
//     sayHi: function() {
//         console.log("Hi!");
//     }
// }

// funcExample.sayHi();

// const funcExample2 = {
//     answer: 'No',
//     sayNo: function() {
//         return this.answer;
//     }
// };

// const answer = funcExample2.sayNo();

// console.log(answer);


// function helloThere(){
//     console.log('Hello there!');
// }

// function generalKenobi(Callback) {
//     Callback();
//     console.log('General Kenobi!');
// }

// generalKenobi(helloThere);

// function myAwesomeFunction(tbc) {
//     console.log("Running myAwesomeFunction... doing complex tasks...");
//     console.log("Complex task complete. I will notify the user");
//     tbc();
//   }
  
//   myAwesomeFunction(function () {
//     console.log("This was decided after!");
//   });

//   myAwesomeFunction(() => {
//     console.log("This was decided after using a different method!");
//   });

// function isIt10(yesCallback,noCallback){
//     console.log('Running is it 10 game.....');

//     const num = Math.floor(Math.random() * 10) + 1;;
//     if (num === 10) {
//         yesCallback ({
//             message: 'It is 10!'
//         });
//     }
//         else {
//             noCallback();
//         }
//     }

//     // isIt10(
//     //     (data) => {
//     //         console.log("Be happy!", data.message);
//     //     },
//     //     () => {
//     //         console.log("It isnt 10 :(");
//     //     }

//     // );

//     function yesCallback(data){
//         console.log("Be happy!", data.message);
//     }

//     function noCallback() {
//         console.log("It isnt 10 :(");
//     }

// isIt10(yesCallback,noCallback);

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function div(a,b) {
    return a / b;
}

function mul(a,b) {
    return a * b;
}
function equal(a,b) {
    if(a === b){
        return `${a} and ${b} are equal! Horray! I am so very happy!!`
    } else {
        return `${a} and ${b} aren't equal. Cry.`
    }
}

function myCalc(a, b, operationCallback) {
    console.log(`Doing calcuulations with ${a} and ${b}`);

    return operationCallback(a,b);
}

const sumResult= myCalc(7,9,add);
console.log(sumResult);

const areTheyTheSame= myCalc (8,8,equal);
console.log(areTheyTheSame);

const areTheyTheSame2= myCalc (8,7,equal);
console.log(areTheyTheSame2);