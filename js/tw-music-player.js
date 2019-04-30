
            initAudio($('.playlist li:first-child'));

                // remove default controls
                var mplayer = document.getElementById('player');
                mplayer.removeAttribute("controls");

                function initAudio(elem){
                    var url = elem.attr('audiourl');
                    var title = elem.text();
                    
                    $('.scrollname').text(title);
                    //initiate audio src with the file from playlist
                    document.getElementById('player').src = url;
                    
                    $('.playlist li').removeClass('active');
                    elem.addClass('active');
                    
                    function playAudio(){
                        document.getElementById('player').play();
                        
                        $('.btnStop').css('display', 'block');
                        $('.btnPlay').css('display', 'none');
                    }
                    
                    function stopAudio(){
                        document.getElementById('player').pause();
                        $('.btnPlay').css('display', 'block');
                        $('.btnStop').css('display', 'none');
                    }
                    
                    function muteAudio(){
                        var mPlayer = document.getElementById('player');
                        mPlayer.volume = 0;
                        $('.btnVolOff').css('display', 'block');
                        $('.btnVolOn').css('display', 'none');
                    }
        
                    function unmuteAudio(){
                        var mPlayer = document.getElementById('player');
                        mPlayer.volume = 1; 
                        $('.btnVolOn').css('display', 'block');
                        $('.btnVolOff').css('display', 'none'); 
                    }
                    
                    function setVolume(){
                        var mPlayer = document.getElementById('player');
                        mPlayer.volume = document.getElementById("volume1").value;
                    }
                    
                    $('#volume1').on("change", setVolume);

                    // media function to continue to play the playlist automatically
                    function loopPlay(){
                        var audioplay = document.getElementById('player');
                        audioplay.onended = function(){
                            var next = $('.playlist li.active').next();
                            if(next.length == 0){
                                next = $('.playlist li:first-child');
                                initAudio(next);
                            }else{
                                initAudio(next);
                                playAudio();
                            }
                        }
                    }
                    
                    
                    $('.btnLoop').click(function(e){
                        e.preventDefault();
                        loopPlay()
                    });
                                        
                    
                    $('.btn2').click(function(e){
                        e.preventDefault();
                        stopAudio();
                        
                        var next = $('.playlist li.active').next();
                        if(next.length == 0){
                            var next = $('.playlist li:first-child');
                            
                        }
                        
                        initAudio(next);
                        playAudio();
                    });
                    
                    $('.btn1').click(function(e){
                        e.preventDefault();
                        stopAudio();
                        
                        var prev = $('.playlist li.active').prev();
                        if(prev.length == 0){
                            var prev = $('.playlist li:first-child');
                            
                        }
                        
                        initAudio(prev);
                        playAudio();
                    });
                    
                    $('.btnPlay').click(function(e){
                        e.preventDefault();

                        playAudio();
                    });
                    
                    $('.btnStop').click(function(e){
                        e.preventDefault();

                        stopAudio();
                    });                    

                    $('.btnloop').click(function(e){
                        e.preventDefault();

                        loopPlay();
                    });  

                    $('.btnVolOff').click(function(e){
                        e.preventDefault();

                        unmuteAudio();
                    }); 
                    $('.btnVolOn').click(function(e){
                        e.preventDefault();

                        muteAudio();
                    });                      
                    $('.playlist li').click(function(){
                        $('.music_player').css('bottom', '0');
                        stopAudio();
                        initAudio($(this));
                        playAudio();
                    })
                    
                   var myPlayer = document.getElementById('player');
                   myPlayer.ontimeupdate=function(){
                        var sec = new Number();
                        var min = new Number();
                        
                        sec = Math.floor(myPlayer.duration)
                        min = Math.floor(sec / 60);
                        min = min >= 10 ? min : '0' + min;
                        sec = Math.floor(sec % 60);
                        sec = sec >= 10 ? sec : '0' + sec;
                        
                        ct_sec = Math.floor(myPlayer.currentTime)
                        ct_min = Math.floor(ct_sec / 60);
                        ct_min = ct_min >= 10 ? ct_min : '0' + ct_min;
                        ct_sec = Math.floor(ct_sec % 60);
                        ct_sec = ct_sec >= 10 ? ct_sec : '0' +ct_sec;
                        
                        document.getElementById('tracktime').innerHTML =  min + ':' + sec;
                        document.getElementById('currtime').innerHTML= ct_min + ':' + ct_sec ;
                       
                       
                       function seek(event) {
                            var myPlayer = document.getElementById('player');
                            var progressbar = document.getElementById('seek-obj');
                            var percent = event.offsetX / this.offsetWidth;
                            myPlayer.currentTime = percent * myPlayer.duration;
                            progressbar.value = percent / 100;
                          }
                       
                        var progressbar = document.getElementById('seek-obj');
                          progressbar.value = (myPlayer.currentTime / myPlayer.duration);
                          //progressbar.on("click", seek);

                          if (myPlayer.currentTime == myPlayer.duration) {
                            var next = $('.playlist li.active').next();
                            if(next.length !== 0){
                            $('.playlist li.active').removeClass('active');  
                            next.addClass('active');
                            initAudio(next);
                            playAudio();
                            }else{
                                stopAudio();
                            }
                          }
                       
                   }

                }

                          