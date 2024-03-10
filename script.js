document.addEventListener("DOMContentLoaded", function () {
  const imageUpload = document.getElementById("imageUpload");
  const uploadedImage = document.getElementById("uploadedImage");
  const deleteButton = document.getElementById("deleteButton");
imageUpload.onchange=function(){
    uploadedImage.src=URL.createObjectURL(imageUpload.files[0])
}

deleteButton.addEventListener("click", function () {
    uploadedImage.src = " ";
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