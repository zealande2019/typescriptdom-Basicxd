

// let gettingID = document.getElementById('0');

// console.log(gettingID)


// let gettingClasseName = document.getElementsByClassName('usundt');

// console.log(gettingClasseName)

// let gettingTagName = document.getElementsByTagName('li');

// console.log(gettingTagName)


// let gettingListe = document.getElementById('liste');

// console.log(gettingListe)

console.log('Opgave 2')

let loopFunction = document.getElementById('liste');
function run(){
    let gettingIdLI = document.getElementsByTagName('li');
    for(let i = 0; i < gettingIdLI.length; i++)
    {

        console.log(gettingIdLI[i])
    }
}
run()

console.log('Opgave 3:')

// Punkt 1
// let ChangeAtbEleRemove = document.getElementById("1").removeAttribute("sundt");
// let ChangeAtbEleSet = document.getElementById("1").setAttribute("class", "usundt");

// Punkt 2
// let HideEm = document.getElementById("3").hidden = true;

// let HideEm = document.getElementById("3").setAttribute("hidden", "true");

// Punkt 3
function myFunction() 
{
    let gettingIdLI = document.getElementsByTagName('li');
    for(let i = 0; i < gettingIdLI.length; i++)
    {
    
        gettingIdLI[i].setAttribute("class", "usundt");
    // document.getElementById(i).classList.remove("usundt");
    // document.getElementById(i).classList.add("sundt")
    }
}
myFunction()

// function run2(){
//     let gettingIdLI = document.getElementsByTagName('li');
//     for(let i = 0; i < gettingIdLI.length; i++)
//     {
//         console.log(gettingIdLI[i])
//     }
// }
// run2()

console.log('Opgave 4:')

