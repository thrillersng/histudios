function loadGal(obj){
    event.preventDefault();


    //return false;
    var loadGal = new XMLHttpRequest();
    var url = "../../loadGallery.php";
    var galID = obj.getAttribute("href");

    var vars = "ID="+galID;
    loadGal.open("POST", url, true);

    //set content type header for sending url encoded variable in the request
        loadGal.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Access the onreadystatechange event for the XMLHttpRequest object
        loadGal.onreadystatechange = function(){
            if(loadGal.readyState == 4 && loadGal.status == 200){
                var return_data = loadGal.responseText;

                document.getElementById("main-gallery").innerHTML = " ";
                document.getElementById("main-gallery").innerHTML = return_data;
                document.getElementById("loader").style.display="none";
            }
        }
    loadGal.send(vars);
    document.getElementById("loader").style.display='block';
}

function loadProd(obj){
    event.preventDefault();


    //return false;
    var loadProd = new XMLHttpRequest();
    var url = "../../loadProduct.php";
    var prodID = obj.getAttribute("href");
    var cat_id = document.getElementById("cat_id").value;

    var vars = "ID="+prodID+"&cat_id="+cat_id;
    loadProd.open("POST", url, true);

    //set content type header for sending url encoded variable in the request
        loadProd.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Access the onreadystatechange event for the XMLHttpRequest object
        loadProd.onreadystatechange = function(){
            if(loadProd.readyState == 4 && loadProd.status == 200){
                var return_data = loadProd.responseText;

                document.getElementById("media-listing").innerHTML = " ";
                document.getElementById("media-listing").innerHTML = return_data;
                document.getElementById("loader").style.display="none";
                initAudio($('.playlist li:first-child'));
            }
        }
    loadProd.send(vars);
    document.getElementById("loader").style.display='block';
}

function searchMedia(){
     event.preventDefault();


    //return false;
    var searchMedia = new XMLHttpRequest();
    var url = "../../searchResult.php";
    var search = document.getElementById("search").value;
    var cat_id = document.getElementById("cat_id").value;

    var vars = "search="+search+"&cat_id="+cat_id;
    searchMedia.open("POST", url, true);

    //set content type header for sending url encoded variable in the request
        searchMedia.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Access the onreadystatechange event for the XMLHttpRequest object
        searchMedia.onreadystatechange = function(){
            if(searchMedia.readyState == 4 && searchMedia.status == 200){
                var return_data = searchMedia.responseText;

                document.getElementById("media-listing").innerHTML = " ";
                document.getElementById("media-listing").innerHTML = return_data;
                document.getElementById("loader").style.display="none";
                initAudio($('.playlist li:first-child'));
            }
        }
    searchMedia.send(vars);
    document.getElementById("loader").style.display='block';
   
}

function lazyLoadGal(){
    event.preventDefault();
    
    var LazGal = new XMLHttpRequest();
    var url = "../../galNext.php";
    var startPoint = document.getElementById('lastCount').value;
    var range = 12;
    
    var NewPoint = Number(startPoint) + Number(range);
    var vars = "startPoint="+startPoint;
    LazGal.open("POST", url, true);
    
    LazGal.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    LazGal.onreadystatechange = function(){
        if(LazGal.readyState == 4 && LazGal.status == 200){
            var returned_data = LazGal.responseText;
            if(returned_data.length > 0){
            document.getElementById("main-gallery").innerHTML += returned_data;
            document.getElementById("lastCount").value = NewPoint;
            }else{
            document.getElementById("lastCount").value = startPoint;  
            }
            document.getElementById("loader").style.display="none";
        }
    }
    LazGal.send(vars);
    document.getElementById("loader").style.display='block';
}

function maxPic(obj){
    event.preventDefault();


    //return false;
    var maxPic = new XMLHttpRequest();
    var url = "../../loadImg.php";
    var galID = obj.getAttribute("href");

    var vars = "ID="+galID;
    maxPic.open("POST", url, true);

    //set content type header for sending url encoded variable in the request
        maxPic.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Access the onreadystatechange event for the XMLHttpRequest object
        maxPic.onreadystatechange = function(){
            if(maxPic.readyState == 4 && maxPic.status == 200){
                var return_data = maxPic.responseText;

                document.getElementById("holder").innerHTML = " ";
                document.getElementById("holder").innerHTML = return_data;
            }
        }
    maxPic.send(vars);
    document.getElementById("modal").style.display='block';
}

function toggleFullScreen() {
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {

        var i = document.getElementById("player");

        // go full-screen
        if (i.requestFullscreen) {
            i.requestFullscreen();
        } else if (i.webkitRequestFullscreen) {
            i.webkitRequestFullscreen();
        } else if (i.mozRequestFullScreen) {
            i.mozRequestFullScreen();
        } else if (i.msRequestFullscreen) {
            i.msRequestFullscreen();
        }    
    }
}

function clsModal(){
    document.getElementById("modal").style.display='none';
}	   

