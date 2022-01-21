Mustache_x = 0
Mustache_y = 0
function preload(){
Mustache_img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
Canvas = createCanvas(300 , 300);
Canvas.center();
Video=createCapture(VIDEO);
Video.hide();

Pose = ml5.poseNet(Video ,ModelLoad)
Pose.on("pose", NiceMustache)
}
function draw(){
image(Video , 0 , 0 , 300,300);
image(Mustache_img , Mustache_x - 190, Mustache_y - 130, 15,30)
}
function take_snapshot(){
save("MyFilteredMustache.png");
}

function ModelLoad(){
    console.log("PoseNet is Ready")    
    }
    function NiceMustache(PositionofMustache){
    if( PositionofMustache.length > 0){
    console.log(PositionofMustache); 
    Mustache_x = PositionofMustache[0].pose.nose.x;
    Mustache_y = PositionofMustache[0].pose.nose.y;
    console.log(Mustache_x);
    console.log(Mustache_y);  
    }
}