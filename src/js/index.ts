

// let gettingID = document.getElementById('0');

// console.log(gettingID)


// let gettingClasseName = document.getElementsByClassName('usundt');

// console.log(gettingClasseName)

// let gettingTagName = document.getElementsByTagName('li');

// console.log(gettingTagName)


// let gettingListe = document.getElementById('liste');

// console.log(gettingListe)

let loopFunction = document.getElementById('liste');
function run(){
    let gettingIdLI = document.getElementsByTagName('li');
    for(let i = 0; i < gettingIdLI.length; i++)
    {
        console.log('I:'+ i)
        console.log(gettingIdLI[i])
    }
}
run()
 

