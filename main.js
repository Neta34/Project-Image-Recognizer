
Webcam.set({
    width: 350,
    height:300,
    image_formart : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

console.log('ml5 version: ', ml5.version);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img_id = "captured_img" src= "'+data_uri+'" />';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_cG45kzRL/',ModelLoaded)

function check()
{
  img = document.getElementById('captured_image');
  classifier.classifyimg(img ,gotResult);
}


function gotResult(error, results) {
if (error) {
  console.error(error);
} else {
  console.log(results);
  document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
}
}

