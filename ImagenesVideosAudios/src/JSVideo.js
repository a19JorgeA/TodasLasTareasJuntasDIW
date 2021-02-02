

function mp4() {
    document.getElementById("btnmp4").style.backgroundColor = 'red';
    document.getElementById("btnwebm").style.backgroundColor = 'unset';
    document.getElementById("btnogg").style.backgroundColor = 'unset';
    document.getElementById("mp4").style.display = 'unset';
    document.getElementById('ogg').style.display = 'none';
    document.getElementById('webm').style.display = 'none';
    document.getElementById('fotoLobos').style.display = 'none';
    document.getElementById("videoControls").style.display = 'unset';

}

function ogg() {
    document.getElementById("btnogg").style.backgroundColor = 'red';
    document.getElementById("btnmp4").style.backgroundColor = 'unset';
    document.getElementById("btnwebm").style.backgroundColor = 'unset';
    document.getElementById("ogg").style.display = 'unset';
    document.getElementById('mp4').style.display = 'none';
    document.getElementById('webm').style.display = 'none';
    document.getElementById('fotoLobos').style.display = 'none';
    document.getElementById("videoControls").style.display = 'unset';

}

function webm() {
    document.getElementById("btnwebm").style.backgroundColor = 'red';
    document.getElementById("btnogg").style.backgroundColor = 'unset';
    document.getElementById("btnmp4").style.backgroundColor = 'unset';
    document.getElementById("webm").style.display = 'unset';
    document.getElementById('ogg').style.display = 'none';
    document.getElementById('mp4').style.display = 'none';
    document.getElementById('fotoLobos').style.display = 'none';
    document.getElementById("videoControls").style.display = 'unset';
    

}



function controles() {
    var colorbtnWebm = document.getElementById("btnwebm").style.backgroundColor;
    var colorbtnOgg = document.getElementById("btnogg").style.backgroundColor;
    var colorbtnMp4 = document.getElementById("btnmp4").style.backgroundColor;

    var video ="";

    if (colorbtnWebm == "red") 
        video = document.getElementById("webm");
    else if (colorbtnOgg == "red") 
        video = document.getElementById("ogg");
    else if (colorbtnMp4 == "red") 
        video = document.getElementById("mp4");
    
        console.log(colorbtnWebm);
        console.log(colorbtnOgg);
        console.log(colorbtnMp4);
    return video;
}

function playv() {
    let vid = controles();
    vid.play();
    console.log(vid);
    
    
}

function pausav() {
    let vid = controles();
    vid.pause();
    console.log(vid);
}

function stopv() {
    let vid = controles();
    vid.pause();
    vid.currentTime = 0;
}

function rewindv() {
    let vid = controles();
    vid.currentTime -= 5;
}

function forwardv() {
    let vid = controles();
    vid.currentTime += 5;

}

function volumenosv() {
    let vid = controles();
    vid.volume = 0.2;
}

function volumasv() {
    let vid = controles();
    vid.volume = 1.0;
}

function mutev() {
    let vid = controles();

    if (!vid.muted) {
        vid.muted = true;
    } else {
        vid.muted = false;
    }

}