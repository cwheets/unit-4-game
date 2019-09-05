$(document).ready(function () {
    // var state = {
    //     elements: {
    //         lossesText: $()
    //     },
    //     wins: 0,
    //     losses
    // }
var lossesText = $("#lose-text")
var winsText = $("#wins-text");
var crystals = []
var computerStartingNumber = $("#comp-score")
var userTotalid = $("#user-total")
var userTotal = 0
var startingNumber;
var winsInt = 0
var lossesInt = 0
var crystalElements = [ $("#crystal1"), $("#crystal2"), $("#crystal3"), $("#crystal4") ]

var startingNumberGen = function (){
    var randomStartingNumber = (Math.floor(Math.random()* 70)+50)
    return(randomStartingNumber)
}

var fillCrystalArray = function(){
numbergenC = function(){
var randomNumberC = (Math.floor(Math.random()* 20)+1)
return (randomNumberC)
}
for (var i = 0; i < crystals.length; i++) {
     crystals.push(numbergenC())
     crystalElements[i].attr("crystal-index", i);
}   

}

fillCrystalArray()
startingNumberGen()
computerStartingNumber.text(startingNumberGen())
startingNumber = startingNumberGen()





var gem = $('.gem')

gem.click(function(event) {
    var index = parseInt($(this).attr("crystal-index"))
    userTotal += crystals[index]
    userTotalid.text(userTotal)
    winCon()

 })

function winCon (){
    if (userTotal===startingNumber){
        console.log("you won")
        winsInt++
        winsText.text(winsInt)
        reset()
    }
    else if(userTotal > startingNumber){
        console.log('you lost')
        lossesInt ++
        lossesText.text(lossesInt)
        reset()
    }
}
function reset(){
    fillCrystalArray()
    startingNumberGen()
    computerStartingNumber.text(startingNumberGen())

}

console.log(winsText)
console.log(lossesInt)
})