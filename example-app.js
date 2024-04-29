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
};
