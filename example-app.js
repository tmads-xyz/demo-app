window.onload=function(){ //initializing the whole thing on page load
  Telegram.WebApp.ready(); //initializing Telegram Mini Apps SDK
  TMAds.init("5e56a0575c837bd04f06e50fe501779c"); //initializing TMAds SDK
  
  //some manual buttons binding — you can use a more modern promises approach for interstitials, rewarded and surveys (see docs)
  var but_show=document.getElementById("show");
  var but_hide=document.getElementById("hide");
  var but_pos=document.getElementById("pos");
  var but_int_preload=document.getElementById("preloadInt");
  var but_int_show=document.getElementById("showInt");
  var but_rew_preload=document.getElementById("preloadRew");
  var but_rew_show=document.getElementById("showRew");
  var but_sur_preload=document.getElementById("preloadSur");
  var but_sur_show=document.getElementById("showSur");
  
  var title=document.getElementById("title");
  
  
  but_show.onclick=function(){ //show TMAds banner upon clicking "Show" button
    this.disabled=true;
    title.innerHTML="Showing banner...";
    but_pos.disabled=true;
    but_hide.disabled=false;
    TMAds.show(document.getElementById("pos").value); //calling TMAds SDK show function and passing banner position selector's value to it ("top" or "bottom")
  };
  but_hide.onclick=function(){ //hide TMAds banner upon clicking "Hide" button
    this.disabled=true;
    title.innerHTML="Banner hidden";
    but_show.disabled=false;
    but_pos.disabled=false;
    document.getElementById("bottom").style.height="40px";
    TMAds.hide();
  };
  but_int_show.onclick=function(){ //show TMAds Interstital upon clicking "Show" button
    this.disabled=true;
	Telegram.WebApp.expand(); //expanding Mini App before displaying a fullscreen ad
    title.innerHTML="Showing Interstital...";
    but_int_preload.disabled=true;
    but_rew_show.disabled=true;
	but_rew_preload.disabled=true;
    but_sur_show.disabled=true;
	but_sur_preload.disabled=true;
    TMAds.showInterstitialAd();
  };
  but_int_preload.onclick=function(){ //preloading TMAds Interstital upon clicking "Preload" button
    this.disabled=true;
    title.innerHTML="Preloading Interstital...";
    but_int_show.disabled=true;
    but_rew_show.disabled=true;
	but_rew_preload.disabled=true;
    but_sur_show.disabled=true;
	but_sur_preload.disabled=true;
    TMAds.checkInterstitialAd();
  };
  but_rew_show.onclick=function(){ //show TMAds Rewarded upon clicking "Show" button
    this.disabled=true;
	Telegram.WebApp.expand(); //expanding Mini App before displaying a fullscreen ad
    title.innerHTML="Showing Rewarded...";
    but_rew_preload.disabled=true;
    but_int_show.disabled=true;
	but_int_preload.disabled=true;
    but_sur_show.disabled=true;
	but_sur_preload.disabled=true;
    TMAds.showRewardedAd();
  };
  but_rew_preload.onclick=function(){ //preloading TMAds Rewarded upon clicking "Preload" button
    this.disabled=true;
    title.innerHTML="Preloading Rewarded...";
    but_rew_show.disabled=true;
    but_int_show.disabled=true;
	but_int_preload.disabled=true;
    but_sur_show.disabled=true;
	but_sur_preload.disabled=true;
    TMAds.checkRewardedAd();
  };
  but_sur_show.onclick=function(){ //show TMAds Rewarded Survey upon clicking "Show" button
    this.disabled=true;
	Telegram.WebApp.expand(); //expanding Mini App before displaying a fullscreen ad
    title.innerHTML="Showing Survey...";
    but_rew_preload.disabled=true;
    but_int_show.disabled=true;
	but_int_preload.disabled=true;
    but_sur_show.disabled=true;
	but_sur_preload.disabled=true;
    TMAds.showRewardedSurvey();
  };
  but_sur_preload.onclick=function(){ //preloading TMAds Rewarded Survey upon clicking "Preload" button
    this.disabled=true;
    title.innerHTML="Preloading Survey...";
    but_rew_show.disabled=true;
    but_int_show.disabled=true;
	but_int_preload.disabled=true;
    but_sur_show.disabled=true;
	but_sur_preload.disabled=true;
    TMAds.checkRewardedSurvey();
  };
  TMAds.addCallback("onAdLoadSuccess",function(obj){ //adding on TMAds ad loaded callback
    title.innerHTML="Banner loaded, height: "+obj.banner_height.toString()+"px";
    if (obj.banner_position=="bottom") //if banner is positioned at the bottom, padding the page contents a bit so it won't be covered by banner
      document.getElementById("bottom").style.height=(40+obj.banner_height).toString()+"px";
  });
  TMAds.addCallback("onAdLoadFail",function(){ //adding on TMAds ad load failed callback
    title.innerHTML="Banner loading error";
    but_hide.disabled=true;
    but_show.disabled=false;
    but_pos.disabled=false;
  });
  TMAds.addCallback("onInterstitialAdLoadSuccess",function(){ //adding on TMAds interstitial ad load success callback
    title.innerHTML="Interstitial loaded";
    but_int_preload.disabled=true;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onInterstitialAdLoadFail",function(){ //adding on TMAds interstitial ad load fail callback
    title.innerHTML="Interstitial failed to load";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onInterstitialAdShowSuccess",function(){ //adding on TMAds interstitial ad show success callback
    title.innerHTML="Interstitial successfully showed";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onInterstitialAdShowFail",function(){ //adding on TMAds interstitial ad show fail callback
    title.innerHTML="Interstitial failed to show";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedAdLoadSuccess",function(){ //adding on TMAds Rewarded ad load success callback
    title.innerHTML="Rewarded loaded";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=true;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedAdLoadFail",function(){ //adding on TMAds Rewarded ad load fail callback
    title.innerHTML="Rewarded failed to load";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedAdShowSuccess",function(){ //adding on TMAds Rewarded ad show success callback
    title.innerHTML="Rewarded successfully showed";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedAdShowFail",function(){ //adding on TMAds Rewarded ad show fail callback
    title.innerHTML="Rewarded failed to show";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedSurveyLoadSuccess",function(){ //adding on TMAds Survey load success callback
    title.innerHTML="Survey loaded";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=true;
  });
  TMAds.addCallback("onRewardedSurveyLoadFail",function(){ //adding on TMAds Survey load fail callback
    title.innerHTML="Survey failed to load";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedSurveySuccess",function(){ //adding on TMAds Survey success callback
    title.innerHTML="Survey successfully completed";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
  TMAds.addCallback("onRewardedSurveyFail",function(){ //adding on TMAds Survey fail callback
    title.innerHTML="Survey was not completed";
    but_int_preload.disabled=false;
    but_int_show.disabled=false;
    but_rew_show.disabled=false;
	but_rew_preload.disabled=false;
    but_sur_show.disabled=false;
	but_sur_preload.disabled=false;
  });
};
