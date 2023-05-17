
function next(msg){
  document.getElementById("contunue").style.display="none";
  document.getElementById(msg).style.display="block";
  if (msg==="oxy")  SetValOwymetreauto();
  else if(msg ==="poid") setValpoidauto();
  else if(msg ==="temp") setValTempauto();
  else if(msg === "tensio") setValTensioauto();
  else if(msg === "size") setValSizeauto();
  

}
function SetValOwymetreauto(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  pagec="./parts_test/poid.html"
  i=5;
  getVals("oxy")
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);
  setTimeout(setValOxyandCC,7000);
}

function setValOxyandCC(){
  msg1.style.fontSize="70px"
  indesx_wait=0;
  x=0;
  y=0;
  let setval=setInterval(()=>{
    if(x===val_oxy+1) msg1.innerHTML="Oxygène : "+val_oxy+" %";
    else msg1.innerHTML="Oxygène : "+x++ +" %";
    
    if(y===val_cc+1) msg2.innerHTML="Pulsation : "+val_cc+" bpm";
    else msg2.innerHTML="Pulsation : "+y++ +" bpm";

    if(x===val_oxy+1 && y===val_cc +1) {clearInterval(setval);setTimeout(()=>{
      window.location.href="./poid.html"
    },2000);}
  },50);
}

function setValpoidauto(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=5;
  getVals("poid")
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre poids est"
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_poid+1) {msg2.innerHTML=val_poid+" kg";clearInterval(setval);setTimeout(()=>{
          window.location.href="./size.html"
        },2000); }
      else msg2.innerHTML=x++ +" Kg"
    },50)
  },7000);

}
function setValTensioauto(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=10;
  getVals("tensio")
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes.";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre tension est "
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_temp+1) {msg2.innerHTML=val_tension+" mmHg";clearInterval(setval);setTimeout(()=>{
          window.location.href="./temp.html"
        },2000);}
      else msg2.innerHTML=x++ +" mmHg"
    },100)
  },12000);
}

function setValTempauto(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=10;
  getVals("temp")
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes.";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre température est"
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_temp+1) {msg2.innerHTML=val_temp+" °C";clearInterval(setval);setTimeout(setInterfaceAuto,3000);}
      else msg2.innerHTML=x++ +" °C"
    },100)
  },12000);
}

function setValSizeauto(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=5;
  getVals("size")
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes.";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre taille est"
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_size+1) {msg2.innerHTML=val_size+" cm";clearInterval(setval);setTimeout(()=>{
          window.location.href="./tensio.html"
        },2000);}
      else msg2.innerHTML=x++ +" cm"
    },10)
  },7000);
}


/* fonction pour faire les secondes */
function nextAuto(){
  i=7
  let settime= setInterval(() => {
      document.getElementById("timesleep").innerHTML = i--;
      if(i===-1){clearInterval(settime);
          document.getElementById("main").style.display="block";
          document.getElementById("clock").display="none";
          document.body.style.background="url(../src/back.jpg)" }
      
  }, 1000);
}
function setInterfaceAuto(){
window.location.href="./getinfos.html"
}
function setalert(alert){
document.getElementById(alert).classList.add("alert-apk-class");
}

function removealert(alert){
document.getElementById(alert).classList.remove("alert-apk-class");
}
