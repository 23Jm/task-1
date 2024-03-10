document.addEventListener("DOMContentLoaded", function () {
  const imageUpload = document.getElementById("imageUpload");
  const uploadedImage = document.getElementById("uploadedImage");
  const deleteButton = document.getElementById("deleteButton");
imageUpload.onchange=function(){
    uploadedImage.src=URL.createObjectURL(imageUpload.files[0])
}

deleteButton.addEventListener("click", function () {
    uploadedImage.src = "./images/prof2.jpg";
  });

  const zoomInButton = document.getElementById("zoomInButton");
  zoomInButton.addEventListener("click", function () {
    uploadedImage.style.transform += "scale(1.1)";
  });

  const zoomOutButton = document.getElementById("zoomOutButton");
  zoomOutButton.addEventListener("click", function () {
    uploadedImage.style.transform = "scale(0.8)";
  });

  const rotateLeftButton = document.getElementById("rotateLeftButton");
  rotateLeftButton.addEventListener("click", function () {
    uploadedImage.style.transform += "rotate(-90deg)";
  });

  const rotateRightButton = document.getElementById("rotateRightButton");
  rotateRightButton.addEventListener("click", function () {
    uploadedImage.style.transform += "rotate(90deg)";
  });

  const flipHorizontalButton = document.getElementById("flipHorizontalButton");
  flipHorizontalButton.addEventListener("click", function () {
    uploadedImage.style.transform += "scaleX(-1)";
  });

  const flipVerticalButton = document.getElementById("flipVerticalButton");
  flipVerticalButton.addEventListener("click", function () {
    uploadedImage.style.transform += "scaleY(-1)";
  });

    const originalTop = uploadedImage.offsetTop;
    const originalLeft = uploadedImage.offsetLeft;
    const imageContainer = document.getElementById('imageContainer');


    function moveImg(direction) {
        switch(direction) {
            case 'up':
                uploadedImage.style.top = Math.max(uploadedImage.offsetTop - 10, 0) + 'px';
                break;
            case 'down':
                uploadedImage.style.top = Math.min(uploadedImage.offsetTop + 10, imageContainer.clientHeight - uploadedImage.clientHeight) + 'px';
                break;
            case 'left':
                uploadedImage.style.left = Math.max(uploadedImage.offsetLeft - 10, 0) + 'px';
                break;
            case 'right':
                uploadedImage.style.left = Math.min(uploadedImage.offsetLeft + 10, imageContainer.clientWidth - uploadedImage.clientWidth) + 'px';
                break;
        }
    }

});


window.addEventListener("DOMContentLoaded", (event) => {
  const textName = document.getElementById("text-name");
  const textSchool = document.getElementById("text-school");
  const studentName=document.getElementById("student-name");
  const schoolName=document.getElementById("school-name");

  textName.addEventListener("input", function () {
    studentName.textContent = textName.value;
  });
   textSchool.addEventListener("input", function () {
     schoolName.textContent = textSchool.value;
   });
});