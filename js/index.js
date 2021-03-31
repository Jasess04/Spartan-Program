console.log("JS")

let variable = [
    'Variants', 'Training', 'Commander'  
];

function reveal() {
    let element = document.getElementById(variable[0])
    element.classList.remove("hidden");
    variable.splice (0, 1)
    if (variable.length === 0) { 
     let element = document.getElementById('button')
     element.classList.add("hidden");
    }
}

let MicrosoftStudios = {
    displayText: 'Microsoft Game Studios',
    url: 'a link to the thing'
}

let ThreeFourThree = {
    displayText: '343 Game Studios',
    url: 'a link to the thing'
}

let Bungie = {
   displayText: 'Bungie',
   url: 'a link to the thing'
}

let Microsoftelement = document.getElementById('Microsoft')
let ThreeFouThreeelement = document.getElementById ('343')  
let Bungieelement = document.getElementById ('Bungie')



Microsoftelement.innerHTML = MicrosoftStudios.displayText
Microsoftelement.href = MicrosoftStudios.url

ThreeFouThreeelement.innerHTML = ThreeFourThree.displayText
ThreeFouThreeelement.href = ThreeFourThree.url

Bungieelement.innerHTML = Bungie.displayText
Bungieelement.href = Bungie.url