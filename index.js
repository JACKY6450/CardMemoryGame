var cover;
        var back;
        var flip = 0;
        var clearint,clearint1;
        var fullscreen;
        var container;
        var maincont;
        var cardimg0,cardimg1;
        var array1 = [];
        var array2 = [];
        var array3 = [];
        window.onload = function(){
            var i;
            fullscreen = document.getElementById("fullscreen");
            container = document.getElementById("container");
            maincont = document.getElementById("maincont");
            cover = document.getElementsByClassName("cover");
            back = document.getElementsByClassName("back");
            cardimg0 = document.getElementById("cardtao").getElementsByTagName("img");   
            cardimg1 = document.getElementById("container").getElementsByTagName("img");
            // alert(cardimg0.length); 
            
        }
        function gamestart(){
            
            var i,j;
            var cardRand;
            var cardrep = 0;
            var contRand;
            var contrep = 0;
            var cardarray = [];
            var contarray = [];
            for(i=0;i<cover.length;i++){
                 
                cardRand = Math.floor(Math.random()*cover.length);// 用亂數做洗牌
                // alert(cover.length+" "+cardRand); 
                for(j=0;j<i;j++){
                    if(cardarray[j]==cardRand){
                        cardrep = 1;
                        break;
                        
                    }          
                }
                if(cardrep==1){
                    i--;
                    cardrep = 0;
                    continue;
                }
                else{ 
                cardarray[i] = cardRand;  
                }    
            }
            
            /* alert(cardarray[0]+" "+cardarray[1]+" "+cardarray[2]+" "+cardarray[3]+" "+
                  cardarray[4]+" "+cardarray[5]+" "+cardarray[6]+" "+cardarray[7]);  */
            j=0;
            for(i=0;i<back.length;i+=2){
                // back[cardarray[i]].innerHTML = j;
                // back[cardarray[i+1]].innerHTML = j;
                cardimg1[cardarray[i]].src = cardimg0[j].src;
                cardimg1[cardarray[i+1]].src = cardimg0[j].src;
                j++;        
            }    
            fullscreen.style.display = "none";
            container.style.display = "flex";
        }
        function flipback(n){
           var i;
            cover[n].classList.toggle("flipback");
            back[n].classList.toggle("flipcover");
            cover[n].classList.add("disabevent");
            array1[flip] = back[n];
            array2[flip] = cover[n];
            flip++;
            if(flip==2){
                for(i=0;i<cover.length;i++){
                    cover[i].classList.add("disabevent");
                }
                clearint1 = window.setInterval(recover,2000);
                clearint = window.setInterval(flipcover, 1200);
                
                flip = 0;
            }
            
        }
        function flipcover(){
            var i;
            var j =0;
            clearInterval(clearint);
            if(array1[0].innerHTML==array1[1].innerHTML){
                array1[0].classList.toggle("scaledown");
                array2[0].classList.toggle("scaledown");
                array1[1].classList.toggle("scaledown");
                array2[1].classList.toggle("scaledown");
                clearint = window.setInterval(function(){
                
                    clearInterval(clearint);
                    for(i=0;i<2;i++){
                        array1[i].style.display="none";
                        array2[i].style.display="none";        
                        array1[i].classList.toggle("scaledown");
                        array2[i].classList.toggle("scaledown");                
                    }
                    for(i=0;i<cover.length;i++){
                        if(cover[i].style.display=="none"){
                            j++;
                        }
                    }
                    if(j==cover.length){
                        var Button = document.getElementById("descript").getElementsByTagName("input");
                        
                        for(i=0;i<Button.length;i++){
                            Button[i].classList.toggle("hide");
                        }
                        maincont.innerHTML="你贏了太爽啦!"
                        fullscreen.style.display="block";
                        container.style.display = "none";
                        for(i=0;i<cover.length;i++){
                            cover[i].classList.remove("flipback");
                            back[i].classList.remove("flipcover");
                            cover[i].style.display="block";
                            back[i].style.display="flex";
                        }
                        
                        
                    }
                    else j=0;
                }, 800);    
            }
            else{
                for(i=0;i<cover.length;i++){
                    cover[i].classList.remove("flipback");
                    back[i].classList.remove("flipcover");
                }
            }
            
            // cover[n].style.display="none";
            // back[n].style.display="none";
        }
        function recover(){
            clearInterval(clearint1);
            for(var i=0;i<cover.length;i++){
                cover[i].classList.remove("disabevent");
            }
        }

        function restart(){
            fullscreen.style.display = "none";
            var i;
            var Button = document.getElementById("descript").getElementsByTagName("input");
            for(i=0;i<Button.length;i++){
                Button[i].classList.toggle("hide");
            }
            gamestart();
        }

        function backtohome(){
            var i;
            var Button = document.getElementById("descript").getElementsByTagName("input");
            for(i=0;i<Button.length;i++){
                Button[i].classList.toggle("hide");
            }
            maincont.innerHTML="歡迎來玩<br>請按開始遊戲";
        }