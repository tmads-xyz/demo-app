window.onload=function(){ //initializing the whole thing on page load
  Telegram.WebApp.ready(); //initializing Telegram Mini Apps SDK
  TMAds.init("f314fa3c30958c737a2145765ef9c49c"); //initializing TMAds SDK
  document.getElementById("show").onclick=function(){ //show TMAds banner upon clicking "Show" button
    this.disabled=true;
    document.getElementById("title").innerHTML="Showing banner...";
    document.getElementById("pos").disabled=true;
    document.getElementById("hide").disabled=false;
    TMAds.show(document.getElementById("pos").value); //calling TMAds SDK show function and passing banner position selector's value to it ("top" or "bottom")
  };
  document.getElementById("hide").onclick=function(){ //hide TMAds banner upon clicking "Hide" button
    this.disabled=true;
    document.getElementById("title").innerHTML="Banner hidden";
    document.getElementById("show").disabled=false;
    document.getElementById("pos").disabled=false;
    document.getElementById("bottom").style.height="40px";
    TMAds.hide();
  };
  document.getElementById("showInt").onclick=function(){ //show TMAds Interstital upon clicking "Show" button
    this.disabled=true;
	Telegram.WebApp.expand(); //expanding Mini App before displaying a fullscreen ad
    document.getElementById("title").innerHTML="Showing Interstital...";
    document.getElementById("preloadInt").disabled=true;
    document.getElementById("showRew").disabled=true;
	document.getElementById("preloadRew").disabled=true;
    TMAds.showInterstitialAd();
  };
  document.getElementById("preloadInt").onclick=function(){ //preloading TMAds Interstital upon clicking "Preload" button
    this.disabled=true;
    document.getElementById("title").innerHTML="Preloading Interstital...";
    document.getElementById("showInt").disabled=true;
    document.getElementById("showRew").disabled=true;
	document.getElementById("preloadRew").disabled=true;
    TMAds.checkInterstitialAd();
  };
  document.getElementById("showRew").onclick=function(){ //show TMAds Rewarded upon clicking "Show" button
    this.disabled=true;
	Telegram.WebApp.expand(); //expanding Mini App before displaying a fullscreen ad
    document.getElementById("title").innerHTML="Showing Rewarded...";
    document.getElementById("preloadRew").disabled=true;
    document.getElementById("showInt").disabled=true;
	document.getElementById("preloadInt").disabled=true;
    TMAds.showRewardedAd();
  };
  document.getElementById("preloadRew").onclick=function(){ //preloading TMAds Rewarded upon clicking "Preload" button
    this.disabled=true;
    document.getElementById("title").innerHTML="Preloading Rewarded...";
    document.getElementById("showRew").disabled=true;
    document.getElementById("showInt").disabled=true;
	document.getElementById("preloadInt").disabled=true;
    TMAds.checkRewardedAd();
  };
  TMAds.addCallback("onAdLoadSuccess",function(obj){ //adding on TMAds ad loaded callback
    document.getElementById("title").innerHTML="Banner loaded, height: "+obj.banner_height.toString()+"px";
    if (obj.banner_position=="bottom") //if banner is positioned at the bottom, padding the page contents a bit so it won't be covered by banner
      document.getElementById("bottom").style.height=(40+obj.banner_height).toString()+"px";
  });
  TMAds.addCallback("onAdLoadFail",function(){ //adding on TMAds ad load failed callback
    document.getElementById("title").innerHTML="Banner loading error";
    document.getElementById("hide").disabled=true;
    document.getElementById("show").disabled=false;
    document.getElementById("pos").disabled=false;
  });
  TMAds.addCallback("onInterstitialAdLoadSuccess",function(){ //adding on TMAds interstitial ad load success callback
    document.getElementById("title").innerHTML="Interstitial loaded";
    document.getElementById("preloadInt").disabled=true;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
  TMAds.addCallback("onInterstitialAdLoadFail",function(){ //adding on TMAds interstitial ad load fail callback
    document.getElementById("title").innerHTML="Interstitial failed to load";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
  TMAds.addCallback("onInterstitialAdShowSuccess",function(){ //adding on TMAds interstitial ad show success callback
    document.getElementById("title").innerHTML="Interstitial successfully showed";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
  TMAds.addCallback("onInterstitialAdShowFail",function(){ //adding on TMAds interstitial ad show fail callback
    document.getElementById("title").innerHTML="Interstitial failed to show";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
  TMAds.addCallback("onRewardedAdLoadSuccess",function(){ //adding on TMAds Rewarded ad load success callback
    document.getElementById("title").innerHTML="Rewarded loaded";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=true;
  });
  TMAds.addCallback("onRewardedAdLoadFail",function(){ //adding on TMAds Rewarded ad load fail callback
    document.getElementById("title").innerHTML="Rewarded failed to load";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
  TMAds.addCallback("onRewardedAdShowSuccess",function(){ //adding on TMAds Rewarded ad show success callback
    document.getElementById("title").innerHTML="Rewarded successfully showed";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
  TMAds.addCallback("onRewardedAdShowFail",function(){ //adding on TMAds Rewarded ad show fail callback
    document.getElementById("title").innerHTML="Rewarded failed to show";
    document.getElementById("preloadInt").disabled=false;
    document.getElementById("showInt").disabled=false;
    document.getElementById("showRew").disabled=false;
	document.getElementById("preloadRew").disabled=false;
  });
};
