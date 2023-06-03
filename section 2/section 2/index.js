import {Observable} from '/node_modules/rxjs/src/index.ts'
let list = document.querySelector(".list")

let newArray = [];
list.textContent = newArray
let Obs = [44,8,5,27,7,1,0,7,6,3,4,10,7,1,9,5,9,7];

let observe = new Observable((subscriber) => {
    let i = 0;

    for(i; i<Obs.length;i++) {
        timeOut(Obs[i], i, subscriber);
    }
    timeOut('Wow', i++ , subscriber)
})

function timeOut(value, i, subscriber) {
    setTimeout(() => {
        // console.log(i)
        subscriber.next(value)
    }, i *400);
}

let sev_occur = 0;
observe.subscribe(value => {
    console.log(value)
    if(value == 7) {
        sev_occur++;
    }
    if(value == 'wow') {
        console.log('new array ' + newList)
        console.log('seven occured ' + sev_occur)
        return
    }
    newArray.push(value)
})
