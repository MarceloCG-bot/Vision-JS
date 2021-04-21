//load webcam

Webcam.set({
    width: 494,
    height: 500,
    image_format:'jpeg',
    jpeg_quality:90
})

Webcam.attach('#camera')

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('results').innerHTML = 
        '<img src="'+ data_uri +'">'
    })
}