song = 0;
song1 = 0;

song_status = 0;
song1_status = 0;

function preload()
{
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

scoreLeftWrist = 0;
scoreRightWrist = 0;

leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotposes(results)
{
    if (results > 0) 
    {
        scoreLeftWrist = results[0].pose.keypoints[10].score;
        scoreRightWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
    song_status = song.isPlaying();
    song1_status = song1.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
}

function play()
{
    song.play();
    song.volume(1);
    song.rate(1);
}







