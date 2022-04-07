     if (msg.indexOf("/한강온도") != -1) {
        #메시지를 받았을때,

        var han = Utils.getWebText("http://openapi.seoul.go.kr:8088/(인증키)/xml/WPOSInformationTime/(측정소 코드)/(측정소 코드)/");
        #파싱
        
        var MSR_DATE = han.split("MSR_DATE")[1].split("MSR_TIM")[0].replace(/"/g, "").replace(/:/g, "").replace(/,/g, "");
        #MSR_DATE(측정날짜) 추출 + 불필요한 문자(" : ,) 제거

        var MSR_TIME = han.split("MSR_TIM")[1].split("SITE_ID")[0].substring (4, 8);
        #MSR_TIME(측정 시간) 추출 + 시간 특성상 :를 살리기위해 .replace가 아닌 .substring을 사용 

        var SITE_ID = han.split("SITE_ID")[1].split("W_TEMP")[0].replace(/"/g, "").replace(/:/g, "").replace(/,/g, "");
        #SITE_ID(측정위치) 추출 + 불필요한 문자(" : ,) 제거

        var W_TEMP = han.split("W_TEMP")[1].split("W_PH")[0].replace(/"/g, "").replace(/:/g, "").replace(/,/g, "");
       #W_TEMP(온도) 추출 + 불필요한 문자(" : ,) 제거
      
        replier.reply("[한강온도]\n" + "측정일자:"+ MSR_DATE + " " + MSR_TIME + "\n" + SITE_ID + " 기준\n" + W_TEMP + "℃");
        #문자열 다듬기 + 출력

        }

 #참고 https://cafe.naver.com/nameyee?iframe_url_utf8=%2FArticleRead.nhn%253Fclubid%3D29537083%2526articleid%3D37139
