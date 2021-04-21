const uploadImageDiv = document.getElementById("uploadedImage")
const fileUpload = document.getElementById("fileUpload")
fileUpload.addEventListener("change", getImage, false)
let cropper = null
const cropButton = document.getElementById("cropButton")
cropButton.addEventListener("click", cropImage)

function getImage(){
    console.log("images", this.files[0])
    const imageToProcess = this.files[0]

    let newImg = new Image(imageToProcess.width, imageToProcess.height)
    newImg.src = URL.createObjectURL(imageToProcess)
    newImg.id = "myGreatImage"
    uploadImageDiv.style.border = "3px solid #ccc"
    uploadImageDiv.appendChild(newImg)

    processImage();
}

function processImage(){
    const myGreatImage = document.getElementById("myGreatImage")
    const croppedImage = document.getElementById("croppedImage")

    cropper = new Cropper(myGreatImage, {
        aspectRation: 16 / 9,
        crop(event){
            console.log(event)
            const canvas = this.cropper.getCroppedCanvas()
            croppedImage.src = canvas.toDataURL("image/png")
        }
    })
}

function cropImage(){

}