var videoActive = false;
var sectionBtns = document.getElementsByClassName("sectionBtn");

function punBtnClicked(){
    if (videoActive == false){
        videoActive = true;
        var punButton = document.getElementById("punBtn");
        punButton.innerText = "Toggle Morb Puns";

        var video = document.getElementById("morbPunCover");
        video.play();
    }
    else if (videoActive == true){
        videoActive = false;
        var punButton = document.getElementById("punBtn");

        var video = document.getElementById("morbPunCover");
        video.pause();
    }
}

function jumpToSection(inpuText = ""){
    document.getElementById(inpuText).scrollIntoView({behavior: 'smooth'});
}

function setSectionButtons_Visible(){
    var menuItems = document.getElementsByClassName("sectionBtn");
    for (let  i = 0; i < menuItems.length; i++){
        menuItems[i].style.visibility = 'visible';
    }
}
