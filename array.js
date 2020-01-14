// Dit is een array experimenteer document!
let menuArray = [
    "Spaghetti met ham en kaas",
    "Macaroni met ham en kaas",
    "Tagliatelli met ham en kaas",
    "Spaghetti met spinazie en room",
    "Macaroni met spinazie en room",
    "Tagliatelli met spinazie en room",
    "Spaghetti met gehakt-tomatensaus en kaas",
    "Macaroni met gehakt-tomatensaus en kaas",
    "Tagliatelli met gehakt-tomatensaus en kaas",
    "Spaghetti met spekjes, spinazie en room",
    "Macaroni met spekjes, spinazie en room",
    "Tagliatelli met spekjes, spinazie en room",
    "Spaghetti met courgette en tomatensaus",
    "Macaroni met courgette en tomatensaus",
    "Tagliatelli met courgette en tomatensaus",
    "Lasagne met courgette en tomatensaus",
    "Lasagne met room, doperwten en tomatensaus",
    "Lasagne met spinazie en tomatensaus en kaas"
];

let displayMenuElement = document.getElementById("menu");
let displayMenuText = "";



function displayMenu() {
    displayMenuText = "";
    displayMenuElement.innerHTML = displayMenuText;
    for(x = 0; x <= menuArray.length -1; x++){
        displayMenuText += (x + 1) + ". " + menuArray[x] + "<br>";
        displayMenuElement.innerHTML = displayMenuText;
    }
}

function addItemEind() {
    menuArray.push("Lasagna met tomatensaus en kaas")
    displayMenu();
}

function addItemVoor() {
    menuArray.unshift("Lasagna met tomatensaus en kaas")
    displayMenu();
}

function removeEind() {
    menuArray.pop();
    displayMenu();
}

function removeVoor() {
    menuArray.shift();
    displayMenu();
}
/*
function removeSpecific() {
    let userInput = document.getElementById("input");
    console.log(userInput);
    userInput = parseInt(userInput);
    menuArray.splice(userInput ,1);
    displayMenu();
}
*/

// Misschien een filter maken voor veelvouden van 3 ofzo.