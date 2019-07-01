var goal = Math.floor(Math.random() * 102) + 19
var userPoints = 0
var winCount = 0
var lossCount = 0

var crystalA = Math.floor(Math.random() * 12) + 1
var crystalB = Math.floor(Math.random() * 12) + 1
var crystalC = Math.floor(Math.random() * 12) + 1
var crystalD = Math.floor(Math.random() * 12) + 1

$("#goal").text(goal)

$("#crystalA").attr("value", "crystalA")

console.log($("#crystalA").val())

$(".btn-choice").on("click", function() {
    console.log($(this).val())
})