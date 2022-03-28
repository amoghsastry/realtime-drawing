noseX=0;
noseY=0;
difference=0;
LeftWristX=0;
RightWristX=0;

function setup() {
  video=createCapture(VIDEO);
  video.size(550,550);
  
  canvas=createCanvas(500,500);
  canvas.center();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

}
function draw() {
  document.getElementById("square_sides").innerHTML="The width and height of th square is " + difference + "px";
  background("#b6f2ef");
  fill("pink");
  stroke("pink");
  square(noseX, noseY, difference);


}
function modelLoaded() {
    console.log("poseNet is Initialized");

}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= " + noseX + " noseY= " + noseY);
    RightWristX=results[0].pose.rightWrist.x;
    LeftWristX=results[0].pose.leftWrist.x;
    difference=floor(LeftWristX - RightWristX );
    console.log("LeftWristX= " + LeftWristX + " RightWristX= " + RightWristX + " difference= " + difference);

  }
}
