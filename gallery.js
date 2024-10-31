

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg")

async function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = await pic.replace("Optimized", 'FullSize');
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}