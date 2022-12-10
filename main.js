noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}


function setup() {
  canvas = createCanvas(640, 640);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640,640);
  video.hide();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  console.log('PoseNet está inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video,0,0,640,640);
  //fill(255,0,0);
  //stroke(255,0,0);
  //circle(noseX, noseY,20);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
  save('myFilterImage.png');

}

function filter_tint(){
  tint_color = document.getElementById("color_name").value;
}