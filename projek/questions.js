var myTimer;
var currIndex;
var c = 30;
var t;
var timer_is_on = 0;
var flagAskAFriendTimer=0;
var flagBtnFifty=0,flagBtnShuffle=0,flagBtnAskAFriend=0;

function loadQuestion(index) {

	var xhttp, xmlDoc, txt;
	var x;
	xhttp = new XMLHttpRequest();

    var myVar;
    myVar = setTimeout(showPage, 1500);

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			xmlDoc = this.responseXML;

            startCount();

            myTimer = setTimeout(function(){window.location.href='winner.html'},30000);
            document.cookie=index;

            index = index + Math.floor(Math.random()*5);

            while(currIndex==index){
                if(index%5==0){
                    index = +index + +1;
                }else if(index%5==1){
                    index = +index - +1;
                }else if(index%5==2){
                    index = +index - +2;
                }else if(index%5==3){
                    index = +index - +3;
                }else if(index%5==4){
                    index = +index - +4;
                }

                if(currIndex!=index)break;
            }

            x=xmlDoc.getElementsByTagName("PRIZE");
            txt=x[index].childNodes[0].nodeValue;
            document.getElementById('prize').innerHTML=txt;

		    x = xmlDoc.getElementsByTagName("ASK");
		    txt = x[index].childNodes[0].nodeValue;
		    document.getElementById('ask').innerHTML = txt;

		    x = xmlDoc.getElementsByTagName("ANSWERA");
		    txt = x[index].childNodes[0].nodeValue;
            let square = document.getElementById('answera');
            square.style.cursor="pointer";
            square.innerHTML=txt;
            let valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            let indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            square.setAttributeNode(indexBtn);
            square.setAttributeNode(valueBtn);
            square.addEventListener('click',nextQuestion);
            /*square.innerHTML='';
            let btnJawab = document.createElement('button');
            let valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            let indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            btnJawab.appendChild(document.createTextNode(txt));
		    btnJawab.setAttributeNode(valueBtn);
		    btnJawab.setAttributeNode(indexBtn);
		    btnJawab.addEventListener('click',nextQuestion);
            square.appendChild(btnJawab);*/

		    x = xmlDoc.getElementsByTagName("ANSWERB");
            txt = x[index].childNodes[0].nodeValue;
            square = document.getElementById('answerb');
            square.style.cursor="pointer";
            square.innerHTML=txt;
            valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            square.setAttributeNode(indexBtn);
            square.setAttributeNode(valueBtn);
            square.addEventListener('click',nextQuestion);
            /*square.innerHTML='';
            btnJawab = document.createElement('button');
            valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            btnJawab.appendChild(document.createTextNode(txt));
            btnJawab.setAttributeNode(valueBtn);
            btnJawab.setAttributeNode(indexBtn);
            btnJawab.addEventListener('click',nextQuestion);
            square.appendChild(btnJawab);*/

		    x = xmlDoc.getElementsByTagName("ANSWERC");
            txt = x[index].childNodes[0].nodeValue;
            square = document.getElementById('answerc');
            square.style.cursor="pointer";
            square.innerHTML=txt;
            valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            square.setAttributeNode(indexBtn);
            square.setAttributeNode(valueBtn);
            square.addEventListener('click',nextQuestion);
            /*square.innerHTML='';
            btnJawab = document.createElement('button');
            valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            btnJawab.appendChild(document.createTextNode(txt));
            btnJawab.setAttributeNode(valueBtn);
            btnJawab.setAttributeNode(indexBtn);
            btnJawab.addEventListener('click',nextQuestion);
            square.appendChild(btnJawab);*/

		    x = xmlDoc.getElementsByTagName("ANSWERD");
            txt = x[index].childNodes[0].nodeValue;
            square = document.getElementById('answerd');
            square.style.cursor="pointer";
            square.innerHTML=txt;
            valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            square.setAttributeNode(indexBtn);
            square.setAttributeNode(valueBtn);
            square.addEventListener('click',nextQuestion);
            /*square.innerHTML='';
            btnJawab = document.createElement('button');
            valueBtn = document.createAttribute('nilai-btn'); //masukin value false/true
            valueBtn.value=x[index].getAttribute('value');
            indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
            indexBtn.value=index;
            btnJawab.appendChild(document.createTextNode(txt));
            btnJawab.setAttributeNode(valueBtn);
            btnJawab.setAttributeNode(indexBtn);
            btnJawab.addEventListener('click',nextQuestion);
            square.appendChild(btnJawab);*/

            if(flagBtnFifty==0){
                let btnFifty = document.getElementById('help1');
                btnFifty.style.cursor="pointer";
                /*btnFifty.innerHTML='';
                let img = document.createElement('img');
                let src = document.createAttribute('src');
                src.value="http://vignette4.wikia.nocookie.net/millionaire/images/7/73/Classic5050.png/revision/latest?cb=20160407180209";
                img.setAttributeNode(src);*/
                indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
                indexBtn.value=index;
                btnFifty.setAttributeNode(indexBtn);
                //btnFifty.appendChild(img);
                btnFifty.addEventListener('click',fiftyfifty);
            }

            if(flagBtnShuffle==0){
                let btnShuffle = document.getElementById('help2');
                btnShuffle.style.cursor="pointer";
                /*btnShuffle.innerHTML='';
                img = document.createElement('img');
                src = document.createAttribute('src');
                src.value="ClassicShuffle2.png";
                img.setAttributeNode(src);*/
                indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
                indexBtn.value=index;
                btnShuffle.setAttributeNode(indexBtn);
                //btnShuffle.appendChild(img);
                btnShuffle.addEventListener('click',shuffle);
            }

            if(flagBtnAskAFriend==0){
                let btnAskAFriend = document.getElementById('help3');
                btnAskAFriend.style.cursor="pointer";
                /*btnAskAFriend.innerHTML='';
                img = document.createElement('img');
                src = document.createAttribute('src');
                src.value="http://vignette2.wikia.nocookie.net/millionaire/images/c/c6/ClassicATA.png/revision/latest?cb=20160407180412";
                img.setAttributeNode(src);*/
                indexBtn = document.createAttribute('index-btn'); //masukin index pertanyaan
                indexBtn.value=index;
                btnAskAFriend.setAttributeNode(indexBtn);
                //btnAskAFriend.appendChild(img);
                btnAskAFriend.addEventListener('click',askAFriend);
            }

		}
	};
	xhttp.open("GET", "questions.xml", true);
	xhttp.send();
}

function nextQuestion(){
	let index=this.getAttributeNode('index-btn').value;
	let value=this.getAttributeNode('nilai-btn').value;
	if(value=="true"){
		mouseOverSoundAnswerTrue.playclip();
        //alert("lu jago");

		//index++;
        if(index%5==0){
            index = +index + +5;
        }else if(index%5==1){
            index = +index + +4;
        }else if(index%5==2){
            index = +index + +3;
        }else if(index%5==3){
            index = +index + +2;
        }else if(index%5==4){
            index = +index + +1;
        }

        stopCount();
        clearTimeout(myTimer);
            /*var halfMinutes = (60 * 0.5),
            display = document.querySelector('#time');
            startTimer(halfMinutes, display);*/

        if(index>74){
            //alert("kalau kata ramli, hoki aja");
            document.cookie=index;
            window.location.href = "winner.html";
        }

		loadQuestion(index);
	}else{
        mouseOverSoundAnswerFalse.playclip();
		//alert("kalau kata ramli, skilles");
        document.cookie=index;
        window.location.href = "winner.html";
	}
}

function fiftyfifty(){
    var xhttp, xmlDoc, txt;
    var x;
    var a=0,b=0,c=0,d=0;
    let index=this.getAttributeNode('index-btn').value;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;

            x = xmlDoc.getElementsByTagName("ANSWERA");
            var tempValue = x[index].getAttribute('value');
            if(tempValue=="false"){
                a=0;
            }else if(tempValue=="true"){
                a=1;
            }

            x = xmlDoc.getElementsByTagName("ANSWERB");
            tempValue = x[index].getAttribute('value');
            if(tempValue=="false"){
                b=0;
            }else if(tempValue=="true"){
                b=1;
            }


            x = xmlDoc.getElementsByTagName("ANSWERC");
            tempValue = x[index].getAttribute('value');
            if(tempValue=="false"){
                c=0;
            }else if(tempValue=="true"){
                c=1;
            }

            x = xmlDoc.getElementsByTagName("ANSWERD");
            tempValue = x[index].getAttribute('value');
            if(tempValue=="false"){
                d=0;
            }else if(tempValue=="true"){
                d=1;
            }

            if(a==0){
                //asnwerA tidak perlu mengganti isi dari button lagi karena sudah ada dari awal

                if(b==1){
                    //answerB tidak perlu mengganti isi dari button lagi karena sudah ada dari awal
                }else{
                    x = xmlDoc.getElementsByTagName("ANSWERB");
                    txt = '';
                    square = document.getElementById('answerb');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);
                }
                if(c==1){
                    //answerC tidak perlu mengganti isi dari button lagi karena sudah ada dari awal
                }else{
                    x = xmlDoc.getElementsByTagName("ANSWERC");
                    txt = '';
                    square = document.getElementById('answerc');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);
                }
                if(d==1){
                    //answerD tidak perlu mengganti isi dari button lagi karena sudah ada dari awal
                }else{
                    x = xmlDoc.getElementsByTagName("ANSWERD");
                    txt = '';
                    square = document.getElementById('answerd');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);
                }
            }else{
                if(Math.floor(Math.random()*3)==0){
                    x = xmlDoc.getElementsByTagName("ANSWERB");
                    txt = '';
                    square = document.getElementById('answerb');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);

                    x = xmlDoc.getElementsByTagName("ANSWERC");
                    txt = '';
                    square = document.getElementById('answerc');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);
                }else if(Math.floor(Math.random()*3)==1){
                    x = xmlDoc.getElementsByTagName("ANSWERB");
                    txt = '';
                    square = document.getElementById('answerb');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);

                    x = xmlDoc.getElementsByTagName("ANSWERD");
                    txt = '';
                    square = document.getElementById('answerd');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);
                }else{
                    x = xmlDoc.getElementsByTagName("ANSWERC");
                    txt = '';
                    square = document.getElementById('answerc');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);

                    x = xmlDoc.getElementsByTagName("ANSWERD");
                    txt = '';
                    square = document.getElementById('answerd');
                    square.innerHTML = txt;
                    square.removeEventListener('click',nextQuestion);
                }  
            }   
            let btnFifty = document.getElementById('help1');
            flagBtnFifty=1;
            btnFifty.style.cursor="not-allowed";
            btnFifty.removeEventListener('click',fiftyfifty);
            /*let disableBtn = document.createAttribute('disabled'); //masukin index pertanyaan
            btnFifty.setAttributeNode(disableBtn);*/ 
        }
    };
    xhttp.open("GET", "questions.xml", true);
    xhttp.send();
}

function shuffle(){
    var xhttp, xmlDoc;
    let index=this.getAttributeNode('index-btn').value;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;

            currIndex=index;

            if(index%5==0){
                index = +index + +1;
            }else if(index%5==1){
                index = +index - +1;
            }else if(index%5==2){
                index = +index - +2;
            }else if(index%5==3){
                index = +index - +3;
            }else if(index%5==4){
                index = +index - +4;
            }

            stopCount();
            clearTimeout(myTimer);

            let btnShuffle = document.getElementById('help2');
            flagBtnShuffle=1;
            btnShuffle.style.cursor="not-allowed";
            btnShuffle.removeEventListener('click',shuffle);
            /*let disableBtn = document.createAttribute('disabled'); //masukin index pertanyaan
            btnShuffle.setAttributeNode(disableBtn);*/

            loadQuestion(index);
        }
    };
    xhttp.open("GET", "questions.xml", true);
    xhttp.send();
}

function askAFriend(){
    let index=this.getAttributeNode('index-btn').value;
    flagAskAFriendTimer=1;
    stopCount();
    startCount();
    clearTimeout(myTimer);
    myTimer = setTimeout(function(){window.location.href='winner.html'},60000);
    document.cookie=index;
    flagAskAFriendTimer=0;
    flagBtnAskAFriend=1;

    let btnAskAFriend = document.getElementById('help3');
    btnAskAFriend.style.cursor="not-allowed";
    btnAskAFriend.removeEventListener('click',askAFriend);
    /*let disableBtn = document.createAttribute('disabled'); //masukin index pertanyaan
    btnAskAFriend.setAttributeNode(disableBtn);*/
}

function gameover(){
    let index = document.cookie;
    //alert(index);
    let createdBy = window.prompt("What is your name?");
    let name = document.getElementById('keterangan2');
    name.innerHTML=createdBy;
    let prize = document.getElementById('keterangan');
    if(index>74){
        prize.innerHTML='$1,000,000';
    }else if(index<5){
        prize.innerHTML='$0';
    }else if(index<15){
        prize.innerHTML='$100';
    }else if(index<50){
        prize.innerHTML='1,000';
    }else if(index<75){
        prize.innerHTML='32.000';
    }
}

/*function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}*/

//line 37-63: disabling back button
window.onload = function () {
    /*var halfMinutes = (60 * 0.5)+1,
        display = document.querySelector('#time');
    startTimer(halfMinutes, display);*/
    
    if (typeof history.pushState === "function") {
        history.pushState("jibberish", null, null);
        window.onpopstate = function () {
            history.pushState('newjibberish', null, null);
            // Handle the back (or forward) buttons here
            // Will NOT handle refresh, use onbeforeunload for this.
        };
    }
    else {
        var ignoreHashChange = true;
        window.onhashchange = function () {
            if (!ignoreHashChange) {
                ignoreHashChange = true;
                window.location.hash = Math.random();
                // Detect and redirect change here
                // Works in older FF and IE9
                // * it does mess with your hash symbol (anchor?) pound sign
                // delimiter on the end of the URL
            }
            else {
                ignoreHashChange = false;   
            }
        };
    }
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function timedCount() {
    document.getElementById("time").innerHTML = c;
    c = c - 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        if(flagAskAFriendTimer==1){
            c=60;
        }else{
            c=30;    
        }
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}



// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
    // Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

    //** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
    //** Call: uniquevar.playclip() to play sound

    var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
     "mp3": "audio/mpeg",
     "mp4": "audio/mp4",
     "ogg": "audio/ogg",
     "wav": "audio/wav"
    }

    function createsoundbite(sound){
     var html5audio=document.createElement('audio')
     if (html5audio.canPlayType){ //check support for HTML5 audio
      for (var i=0; i<arguments.length; i++){
       var sourceel=document.createElement('source')
       sourceel.setAttribute('src', arguments[i])
       if (arguments[i].match(/\.(\w+)$/i))
        sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
       html5audio.appendChild(sourceel)
      }
      html5audio.load()
      html5audio.playclip=function(){
       html5audio.pause()
       html5audio.currentTime=0
       html5audio.play()
      }
      return html5audio
     }
     else{
      return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
     }
    }

    //Initialize two sound clips with 1 fallback file each:

    var mouseoversound=createsoundbite("telefonjoker_start.mp3")
    var mouseOverSoundAnswerFalse=createsoundbite("wechsel_nach_stufe_2.mp3")
    var mouseOverSoundAnswerTrue=createsoundbite("richtig_stufe_1.mp3")