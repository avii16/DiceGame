// create a random number
var num1= Math.floor((Math.random()*6))+1
//  get the random image
var image1 = "dice"+num1+".png"
// get the source of img
var image1Source = "images/"+image1
//  set attribute of random image
document.querySelectorAll("img")[0].setAttribute("src",image1Source)

//  repeat the same for image 2

var num2 = Math.floor(Math.random()*6)+1

var image2 = "dice"+num2+".png"

var image2Source = "images/"+image2

document.querySelectorAll("img")[1].setAttribute("src",image2Source)

// checking for the conditions

if (num1>num2){
    document.querySelector("h1").innerHTML="Player one Wins"
}
else if (num2>num1){
    document.querySelector("h1").innerHTML="Player two Wins"
}else{
    document.querySelector("h1").innerHTML="Oops! It's a tie.."
}