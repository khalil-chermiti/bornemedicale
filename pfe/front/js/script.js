
function next(msg){
      document.getElementById("contunue").style.display="none";
      document.getElementById(msg).style.display="block";
      if (msg==="oxy")  SetValOwymetre();
      else if(msg ==="poid") setValpoid();
      else if(msg ==="temp") setValTemp();
      else if(msg === "tensio") setValTensio();
      else if(msg === "size") setValSize();
    
}

function nextTest(msg){
  
  if(msg==="part-oxy"){
    window.location.href = "../parts_test/oxy.html";
  }
  else if(msg ==="part-poid"){
    window.location.href = "../parts_test/poid.html";
  }
  else if(msg==="part-size"){
    window.location.href = "../parts_test/size.html";
  }
  else if(msg ==="part-temp"){
    window.location.href = "../parts_test/temp.html";
  }
  else if(msg ==="part-tensio"){
    window.location.href = "../parts_test/tensio.html";
  }

}

function SetValOwymetre(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=5;
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);
  getValOxy()
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

    if(x===val_oxy+1 && y===val_cc +1) clearInterval(setval);
  },50);
}

function setValpoid(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=5;
  getValpoid()
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
      if(x===val_poid+1) {msg2.innerHTML=val_poid+" kg";clearInterval(setval);}
      else msg2.innerHTML=x++ +" Kg"
    },50)
  },7000);

}

function setValTensio(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  
  i=10;
  getValtensio()
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre tension est "
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_temp+1) {msg2.innerHTML=val_tension+" mmHg";clearInterval(setval);}
      else msg2.innerHTML=x++ +" mmHg"
    },100)
  },12000);
}

function setValTemp(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  getValtemp()
  i=10;
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre température est"
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_temp+1) {msg2.innerHTML=val_temp+" °C";clearInterval(setval);}
      else msg2.innerHTML=x++ +" °C"
    },100)
  },12000);
}

function setValSize(){
  msg1=document.getElementById("msg1")
  msg2=document.getElementById("msg2")
  getValsize()
  i=5;
  let intervaltime=setInterval(()=>{
    msg2.innerHTML=i-- +" secondes";
    if(i===-1){
      clearInterval(intervaltime);
    }

  },1000);

  setTimeout(()=>{
    msg1.innerHTML="Votre taille est "
    x=0
    let setval=setInterval(()=>
    {
      if(x===val_size+1) {msg2.innerHTML=val_size+" cm";clearInterval(setval);}
      else msg2.innerHTML=x++ +" cm"
    },10)
  },7000);
}

