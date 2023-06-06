function myFunction1(){
    console.log('function 1')
}

function myFunction2(){
    console.log('function 2')
}

myFunction1();
myFunction2();

function print(message){
    console.log(message);

}

function sum(op1,op2,functionCallBack){
    let res = op1 + op2;
    functionCallBack(res);
}

sum(3,4, print);

//Call async setTimeout

function myFunctionCallBack(){
    console.log('Greeing async after 5 seconds')
}

setTimeout(myFunctionCallBack,5000)

let clock = () => {
    let date = new Date();
    console.log(`${date.getHours} ${date.getMinutes} ${date.getSeconds}`);
}

setInterval(clock,1000);