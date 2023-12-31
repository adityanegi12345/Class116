noseX=0;
noseY=0;

function preload() {
    clownnose = loadImage('https://i.postimg.cc/cHrMvD4R/clown-nose.jpg');

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}


function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill('blue');
  stroke('green');
  circle(noseX ,noseY ,22);
  image(clownnose,noseX-20,noseY-20,30,30);
 
}

function take_snapshot(){    
  save('myFilterImage.png');
}
