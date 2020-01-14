/*
Pak oud Array
Maak een nieuw array met de te gebruiken loop als Name
selecteer 1 waarde uit oud Array
sla die op,
push of unshift in nieuw array: doormiddel van een bepaalde loop.
selecteer volgende waarde
*/

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

let forArray = [];
function forArrayFunc(){
    
    for(x = 0; x < menuArray.length; x++){
        var temp = menuArray[x];
        forArray.push(temp);
    }
    console.log(forArray);
}

let forInArray = [];
function forInFunc(){

    for(item in menuArray) {
        var temp = menuArray[item];
        forOfArray.push(temp);
        
    }  
    console.log(menuArray); 
}

let forOfArray = [];
function forOfFunc(){

    var y = 1;
    for(item of menuArray) {
        var temp = menuArray[item];
        forOfArray.push(temp);
        console.log(y + ". " + item);
        y++;
    }  
}

let whileArray = [];
function whileFunc(){
    x = 0;
    while( x < menuArray.length){
        var temp = menuArray[x];
        whileArray.push(temp);
        x++;
    }
    console.log(whileArray);
}

let doWhileArray = [];
function doWhileFunc(){
    x = -1;
    do {
        x++;
        var temp = menuArray[x];
        doWhileArray.push(temp);
    } while(x < menuArray.length - 1);
    console.log(doWhileArray);
}

let forEachArray = [];
function forEachFunc(){
    z = 0;
    menuArray.forEach(function (item){
        var temp = menuArray[z];
        forEachArray.push(temp);
        z++;
    });
    console.log(forEachArray);
};
