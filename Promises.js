let myPromise = new Promise((resolved,rejected)  => {
    let expression = false;
    if (expression){
        resolved('Correct');
    }
    else{
        rejected('Incorrect')
    }
});

//myPromise.then(value => console.log(value), error => console.log(error));
myPromise
.then(value => console.log(value))
.catch(error => console.log(error));

let promise1 = new Promise((resolved) => {
    //console.log('Begin promise');
    setTimeout(()=>resolved('Greetings with promise and timeout',5000))
    //console.log('End promise');
});

//promise1.then(valor => console.log(valor))

async function myFunctionWithPromise(){
    return 'Greetings with promise and async';
}

//myFunctionWithPromise().then(valor => console.log(valor));

async function myFunctionWithPromiseAwait(){
    let myPromise = new Promise(resolved => {
        resolved('Promise with await');
    })

    console.log(await myPromise);
};

//myFunctionWithPromiseAwait();

async function myFunctionWithPromiseAwaitTimeout(){
    console.log('Start')
    let myPromise = new Promise( resolved => {
        setTimeout(()=>resolved('Promise with await and timeout'),5000)
    }
    );

    console.log(await myPromise);
    console.log('Finish')
}

myFunctionWithPromiseAwaitTimeout();

