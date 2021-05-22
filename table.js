img=""
status=""
function preload(){
img=loadImage("Table.jpg")
}
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    objectdetector=ml5.objectDetector("cocossd",modelLoaded)
}

function modelLoaded(){
    console.log("Model Loaded")
    document.getElementById("status").innerHTML="Status: Detecting Object "
    status=true
    objectdetector.detect(img,gotResults)
}

function draw(){

}
function gotResults(error,results){
    if (error) {
        console.log(error)
    
    }
    else{
        console.log(results)
    }
    }