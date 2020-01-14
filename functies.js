let menuArray = [
    "Macaroni met ham en kaas",
    "Macaroni met spinazie en room",
    "Macaroni met gehakt-tomatensaus en kaas",
    "Macaroni met spekjes, spinazie en room",
    "Macaroni met courgette en tomatensaus",
    "Lasagne met courgette en tomatensaus",
    "Lasagne met room, doperwten en tomatensaus",
    "Lasagne met spinazie en tomatensaus en kaas"
];

let displayMenuElement = document.getElementById("menu");
let displayMenuElementSpecific = document.getElementById("menuSpecific");
let displayMenuElementSpecificReturn = document.getElementById("menuSpecificReturn");
let displayMenuElementMeerdere = document.getElementById("menuMeerdere");
let displayMenuText = "";



function displayMenu() {
    displayMenuText = "";
    displayMenuElement.innerHTML = displayMenuText;
    for(x = 0; x <= menuArray.length -1; x++){
        displayMenuText += (x + 1) + ". " + menuArray[x] + "<br>";
        displayMenuElement.innerHTML = displayMenuText;
    }
}

function displayMenuSpecific(number) {
    displayMenuText = "";
    displayMenuElementSpecific.innerHTML = menuArray[number];
}

function displayMenuSpecificReturn(number) {
    displayMenuText = "";
    displayMenuElementSpecificReturn.innerHTML = menuArray[number];
    return menuArray[number];
    stopInNieuw();
}
stopInNieuwArray = [];

function stopInNieuw(){
    menuArray.push(menuArray[4]);
    console.log(stopInNieuwArray);
}

function displayMenuMeerdere(number) {
    displayMenuText = "";
    displayMenuElementMeerdere.innerHTML = menuArray[number];
    displayMenuElementMeerdere.innerHTML += menuArray[number + 1];
    displayMenuElementMeerdere.innerHTML += menuArray[number + 2];
    displayMenuElementMeerdere.innerHTML += menuArray[number + 3];
    displayMenuElementMeerdere.innerHTML += menuArray[number + 4];
}