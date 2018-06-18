$(document).ready(function () {


    var questionNumber=0;
    var questionBank=new Array();
    var questionBank2=new Array();
    var questionBank3=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions = 11;
    var score=0;

    var oikein_aani = new Audio();
    oikein_aani.src = "aanet/oikeinaani.mp3";
    oikein_aani.volume = 1;

    var vaarin_aani = new Audio();
    vaarin_aani.src = "aanet/vaarinaani.mp3";
    vaarin_aani.volume = 1;

    var menu_aani = new Audio();
    menu_aani.src = "aanet/menunklikkiaani.mp3";
    menu_aani.volume = 1;




    displayMenu();

    $.getJSON('json/taso1.json', function(data) {

        for(i=0;i<data.taso1.length;i++){ 
            questionBank[i]=new Array;
            questionBank[i][0]=data.taso1[i].question;
            questionBank[i][1]=data.taso1[i].option1;
            questionBank[i][2]=data.taso1[i].option2;
            questionBank[i][3]=data.taso1[i].option3;
        }
         questionBank.sort(function() { return 0.5 - Math.random(); });

    });//gtjson
 
    $.getJSON('json/taso2.json', function(data) {

        for(i=0;i<data.taso2.length;i++){ 
            questionBank2[i]=new Array;
            questionBank2[i][0]=data.taso2[i].question;
            questionBank2[i][1]=data.taso2[i].option1;
            questionBank2[i][2]=data.taso2[i].option2;
            questionBank2[i][3]=data.taso2[i].option3;
            questionBank2[i][4]=data.taso2[i].option4;
        }
         questionBank2.sort(function() { return 0.5 - Math.random(); });

    });//gtjson
 
    $.getJSON('json/taso3.json', function(data) {

           for(i=0;i<data.taso3.length;i++){ 
               questionBank3[i]=new Array;
               questionBank3[i][0]=data.taso3[i].question;
               questionBank3[i][1]=data.taso3[i].option1;
               questionBank3[i][2]=data.taso3[i].option2;
               questionBank3[i][3]=data.taso3[i].option3;
               questionBank3[i][4]=data.taso3[i].option4;
           }
            questionBank3.sort(function() { return 0.5 - Math.random(); });

    });//gtjson
 
    function displayMenu(){
        
        $(stage).animate({"right": "+=1000px"},"slow", function() {questionLock=false;});
        
        $(stage).append('<img class="otsikko" src="img/otsikko1.png">' +
                        '<div class="menukuva"> <div class="valinta1">Luokat 1-2</div> </div>' + 
                        '<div class="menukuva2"> <div class="valinta2">Luokat 3-4</div> </div>' +
                        '<div class="menukuva3"> <div class="valinta3">Luokat 5-6</div> </div>');
        
        //$(stage).css('display','');

        
        $('.valinta1').click(function(){
            menu_aani.play();
            $(stage).animate({
                "right": "+=1000px"}
                ,"slow", 
                function() {
                $(stage).css('right','-1000px');
            });
            setTimeout(function(){
                changeQuestion();
            },500); 
        });
        
        $('.valinta2').click(function(){
            menu_aani.play();
            $(stage).animate({
                "right": "+=1000px"}
                ,"slow", 
                function() {
                $(stage).css('right','-1000px');
            });
            setTimeout(function(){
                changeQuestion2();
            },500); 
        });
        
        $('.valinta3').click(function(){
            menu_aani.play();
            $(stage).animate({
                "right": "+=1000px"}
                ,"slow", 
                function() {
                $(stage).css('right','-1000px');
            });
            setTimeout(function(){
                changeQuestion3();
            },500); 
        });

    }

    function displayQuestion(){
        var rnd=Math.random()*3;
        rnd=Math.ceil(rnd);
        var q1;
        var q2;
        var q3;

       if(rnd==1){
           q1=questionBank[questionNumber][1];
           q2=questionBank[questionNumber][2];
           q3=questionBank[questionNumber][3];
       }
       if(rnd==2){
           q2=questionBank[questionNumber][1];
           q3=questionBank[questionNumber][2];
           q1=questionBank[questionNumber][3];
       }
       if(rnd==3){
           q3=questionBank[questionNumber][1];
           q1=questionBank[questionNumber][2];
           q2=questionBank[questionNumber][3];
       }


        $(stage).append('<div class="ylapalkki">Tunnista kasvi</div><div class="questionText"><img src="img/'+questionBank[questionNumber][0]+
                '"></div><div class="kysymysnumero">' + questionNumber +
                '/10</div><div class="pisteet">' + score +
                '</div><div class="kuva1"><div id="1" class="pix1">' + q1 +
                '</div></div><div class="kuva1"><div id="2" class="pix1">' + q2 +
                '</div></div><div class="kuva1"><div id="3" class="pix1">' + q3 + 
                '</div></div>');

        $('.pix1').click(function(){
            if(questionLock==false){
                questionLock=true;	
                //correct answer
                if(this.id==rnd){
                 $(stage).append('<div class="feedback1"><img class="y" src="img/oikein.png" /></div>');
                 oikein_aani.play();
                 score++;
                 }
                //wrong answer	
                if(this.id!=rnd){
                 $(stage).append('<div class="feedback1"><img class="y" src="img/vaarin.png" /></div>');
                 vaarin_aani.play();
                }
            setTimeout(function(){changeQuestion();},1000);
        }});  
    }//display question

    function changeQuestion(){

        questionNumber++;

        if(stage=="#game1"){
            stage2="#game1";
            stage="#game2";
        }else{
           stage2="#game2";
           stage="#game1";
        }

        if(questionNumber<numberOfQuestions){
            displayQuestion();
        }else{
            displayFinalSlide();
        }

         $(stage2).animate({"right": "+=1000px"},"slow", function() {$(stage2).css('right','-1000px');$(stage2).empty();});
         $(stage).animate({"right": "+=1000px"},"slow", function() {questionLock=false;});
    }//change question

    function displayQuestion2(){
        var rnd=Math.random()*4;
        rnd=Math.ceil(rnd);
        var q1;
        var q2;
        var q3;
        var q4;

     if(rnd==1){
           q1=questionBank2[questionNumber][1];
           q2=questionBank2[questionNumber][2];
           q3=questionBank2[questionNumber][3];
           q4=questionBank2[questionNumber][4];
       }
       if(rnd==2){
           q2=questionBank2[questionNumber][1];
           q4=questionBank2[questionNumber][2];
           q1=questionBank2[questionNumber][3];
           q3=questionBank2[questionNumber][4];
       }
       if(rnd==3){
           q3=questionBank2[questionNumber][1];
           q1=questionBank2[questionNumber][2];
           q4=questionBank2[questionNumber][3];
           q2=questionBank2[questionNumber][4];
       }
       if(rnd==4){
           q4=questionBank2[questionNumber][1];
           q1=questionBank2[questionNumber][2];
           q3=questionBank2[questionNumber][3];
           q2=questionBank2[questionNumber][4];
       }
       
        $(stage).append('<div class="ylapalkki">Tunnista kasvi</div><div class="questionText"><img src="img/'+questionBank2[questionNumber][0]+
                '"></div><div class="kysymysnumero">' + questionNumber +
                '/10</div><div class="pisteet">' + score +
                '</div> <div class="kuva"><div id="1" class="pix">' + q1 +
                '</div></div><div class="kuva"><div id="2" class="pix">' + q2 +
                '</div></div><div class="kuva"><div id="3" class="pix">' + q3 + 
                '</div></div><div class="kuva"><div id="4" class="pix">' + q4 + 
                '</div></div>');

        $('.pix').click(function(){
            if(questionLock==false){
                questionLock=true;	
                //correct answer
                if(this.id==rnd){
                 $(stage).append('<div class="feedback1"><img class="y" src="img/oikein.png" /></div>');
                 oikein_aani.play();
                 score++;
                 }
                //wrong answer	
                if(this.id!=rnd){
                 $(stage).append('<div class="feedback1"><img class="y" src="img/vaarin.png" /></div>');
                 vaarin_aani.play();
                }
            setTimeout(function(){changeQuestion2();},1000);
        }});
    }//display question

    function changeQuestion2(){

        questionNumber++;

        if(stage=="#game1"){
            stage2="#game1";
            stage="#game2";
        }else{
           stage2="#game2";
           stage="#game1";
        }

        if(questionNumber<numberOfQuestions){displayQuestion2();}else{displayFinalSlide();}

         $(stage2).animate({"right": "+=1000px"},"slow", function() {$(stage2).css('right','-1000px');$(stage2).empty();});
         $(stage).animate({"right": "+=1000px"},"slow", function() {questionLock=false;});
    }//change question

    function displayQuestion3(){
        var rnd=Math.random()*4;
        rnd=Math.ceil(rnd);
        var q1;
        var q2;
        var q3;
        var q4;

       if(rnd==1){
           q1=questionBank3[questionNumber][1];
           q2=questionBank3[questionNumber][2];
           q3=questionBank3[questionNumber][3];
           q4=questionBank3[questionNumber][4];
       }
       if(rnd==2){
           q2=questionBank3[questionNumber][1];
           q4=questionBank3[questionNumber][2];
           q1=questionBank3[questionNumber][3];
           q3=questionBank3[questionNumber][4];
       }
       if(rnd==3){
           q3=questionBank3[questionNumber][1];
           q1=questionBank3[questionNumber][2];
           q4=questionBank3[questionNumber][3];
           q2=questionBank3[questionNumber][4];
       }
       if(rnd==4){
           q4=questionBank3[questionNumber][1];
           q1=questionBank3[questionNumber][2];
           q3=questionBank3[questionNumber][3];
           q2=questionBank3[questionNumber][4];
       }


        $(stage).append('<div class="ylapalkki">Tunnista kasvi</div><div class="questionText"><img src="img/'+questionBank3[questionNumber][0]+
                '"></div><div class="kysymysnumero">' + questionNumber +
                '/10</div><div class="pisteet">' + score +
                '</div> <div class="kuva"><div id="1" class="pix">' + q1 +
                '</div></div><div class="kuva"><div id="2" class="pix">' + q2 +
                '</div></div><div class="kuva"><div id="3" class="pix">' + q3 + 
                '</div></div><div class="kuva"><div id="4" class="pix">' + q4 + 
                '</div></div>');

        $('.pix').click(function(){
            if(questionLock==false){
                questionLock=true;	
                //correct answer
                if(this.id==rnd){
                 $(stage).append('<div class="feedback1"><img class="y" src="img/oikein.png" /></div>');
                 oikein_aani.play();
                 score++;
                 }
                //wrong answer	
                if(this.id!=rnd){
                 $(stage).append('<div class="feedback1"><img class="y" src="img/vaarin.png" /></div>');
                 vaarin_aani.play();
                }
            setTimeout(function(){changeQuestion3();},1000);
        }});
    }//display question

    function changeQuestion3(){

        questionNumber++;

        if(stage=="#game1"){
            stage2="#game1";
            stage="#game2";
        }else{
           stage2="#game2";
           stage="#game1";
        }

        if(questionNumber<numberOfQuestions){displayQuestion3();}else{displayFinalSlide();}

         $(stage2).animate({"right": "+=1000px"},"slow", function() {
             $(stage2).css('right','-1000px');
             $(stage2).empty();
         });
         
         $(stage).animate({"right": "+=1000px"},"slow", function() {
             questionLock = false;
         });
    }//change question


    function displayFinalSlide(){

            $(stage).append('<div class="ylapalkki2">YHTEENVETO</div>'+
                    '<div class="loppu"><div class="tulokset">'+ score +'/'+ (numberOfQuestions-1) + '</br>' + 'PISTETTÄ' +
                    '</div></div><div class="pelaauud"><div class="uudestaan">JATKA</div></div>');

            $('.pelaauud').click(function(){
                menu_aani.play();
                $(stage).animate({
                    "right": "+=1000px"}
                    ,"slow", 
                    function() {
                    $(stage).css('right','-1000px');
                });
                setTimeout(function(){
                    $(stage).empty();
                    questionNumber = 0;
                    score = 0;
                    questionBank.sort(function() { return 0.5 - Math.random(); });
                    questionBank2.sort(function() { return 0.5 - Math.random(); });
                    questionBank3.sort(function() { return 0.5 - Math.random(); });
                    displayMenu();
                    
                },500); 
            });

    }//display final slide

});//doc ready