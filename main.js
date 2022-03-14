video = "";
statuss = "";
object = [];

function preload() {
    video = createVideo("video.mp4");
    video.hide();

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();


}



function gotresult(error, results) {
    if (error) {
        console.log('error found');
    }
    console.log(results);
    object = results;
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (statuss == true) {
        objectdetector.detect(video, gotresult);
        for (var i = 0; i < object.length; i++)

        {
            fill("#ff0000");
            noFill();
            stroke();
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + "%", object[i].x, object[i].y);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }
}

function start() {
    objectdetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}

function modelloaded() {
    console.log(" modelloaded successfully");
    statuss = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}