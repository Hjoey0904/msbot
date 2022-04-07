    var botOff = false; 
   #위 줄은  function response 위에 써주세요 


   if (msg == "셧다운해제" && sender == "(관리자이름)" ) {

        botOff = false;

        replier.reply("관리자에 의해 셧다운이 해제 되었습니다.");

    } else if (msg == "셧다운" && sender == "(관리자이름)") {

        botOff = true;

        replier.reply("관리자에 의해 셧다운이 실행 되었습니다");

    
   
      
      
    }
