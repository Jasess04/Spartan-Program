console.log("JS")
/*Show/hide one or more content areas or elements on your site 
through clicking a button or some other user interaction - 
must be done with some JavaScript code. */


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
/*actively functioning links that send site visitors to the 
developer websites. */

let MicrosoftStudios = {
    displayText: 'Microsoft Game Studios',
    url: 'https://www.xbox.com/en-US/xbox-game-studios'
}

let ThreeFourThree = {
    displayText: '343 Industries',
    url: 'https://www.343industries.com/studio'
}

let Bungie = {
   displayText: 'Bungie',
   url: 'https://www.bungie.net/'
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