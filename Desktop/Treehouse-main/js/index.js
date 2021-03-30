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
