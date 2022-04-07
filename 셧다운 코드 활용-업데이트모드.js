var botOff = false;     
#역시나 function response 위에 써주세요


if (msg == "update mod" && sender == "(관리자이름)" ) {
     botOff = true;

        replier.reply("관리자에 의해 업데이트 모드로 전환 되었습니다.\n\n※모든 기능이 일시중지 됩니다.※");
    
    }
    if (msg == "update complete" && sender == "(관리자이름)" ) {
     botOff = false;

        replier.reply("관리자에 의해 업데이트 모드가 해제 되었습니다.\n\n  ※모든 기능이 재가동 중.※\n업데이트를 완료했습니다.\n/패치노트로 확인하던지ㅋ");
    
    }
