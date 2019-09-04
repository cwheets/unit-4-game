$( document ).ready(function (){
var lossesText = $("#lose-text")
var winsText = $("#wins-text");
var crystals = ['crystal1','crystal2','crystal3','crystal4']
var computerStartingNumber = $("#comp-score")
var userTotalid = $("#user-total")
var usertotal = ''

startingNumberGen = function(){
    var randomStartingNumber = (Math.floor(Math.random()* 70)+50)
    return(randomStartingNumber)
}

fillCrystalArray = function(){
numbergenC = function(){
var randomNumberC = (Math.floor(Math.random()* 20)+1)
return (randomNumberC)
}
for (var i = 0; i < crystals.length; i++) {
     crystals[i] = numbergenC()
}   

}

fillCrystalArray()
startingNumberGen()
computerStartingNumber.text(startingNumberGen())

 var crystal1 = $("#crystal1")
 var crystal2 = $("#crystal2")
 var crystal3 = $("#crystal3")
 var crystal4 = $("#crystal4")
console.log(crystals[0])


crystal1.click( function() {
    crystals[0] + usertotal
 })
 crystal2.click( function() {
    crystals[1] =+ usertotal
})
crystal3.click( function() {
    crystals[2] =+ usertotal
})
crystal4.click( function() {
    crystals[3] =+ usertotal
})

console.log(usertotal)


})