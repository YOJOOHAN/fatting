'use strict';
{ 
  // loading処理
  const preImages= [
  'img/back00.png',
  'img/burger00.png',
  'img/kemoshota00.png',
  'img/kemoshota01.png',
  'img/kemoshota02.png',
  'img/kemoshota03.png',
  'img/kemoshota04.png',
  'img/kemoshota05.png',
  'img/kemoshota06.png',
  'img/kemoshota07.png',
  'img/kemoshota08.png',
  ];

  const prepare=document.getElementById("prepare")
  const preImage =document.getElementById("preImage");
  const load =document.getElementById("load");
  let imageIndex=0;
  preImage.src=preImages[imageIndex];
  
  preImage.addEventListener('load',()=>{if(imageIndex< preImages.length-1){imageIndex++;
    preImage.src = preImages[imageIndex];
    load.textContent=`画像を読み込み中(${imageIndex+1}/${preImages.length})`; 
    if(imageIndex===10){
      prepare.style.opacity="0";
      prepare.style.userSelect="none";
    }
  }})
   
  
  
  
  
  
  
  const images = [
    'img/kemoshota00.png',
    'img/kemoshota01.png',
    'img/kemoshota02.png',
    'img/kemoshota03.png',
    'img/kemoshota04.png',
    'img/kemoshota05.png',
    'img/kemoshota06.png',
    'img/kemoshota07.png',
    'img/kemoshota08.png',
  ];
  let currentIndex = 0
  const puu = document.getElementById("puu");
  puu.volume =0.01
  const power = document.getElementById("power");
  power.volume =0.01
  
  const burger_back = document.getElementById("burger_back")
  const burger= document.getElementById("burger")
   // デフォルトのドラッグ機能をオフ
   burger_back.ondragstart = e=>{
    return false;
    }

  // マウスダウンでマウスムーブ時に”onMouseMove”を呼び出す
  burger_back.onmousedown = e=>{
   if(burgerNum<=0){retun};
   document.addEventListener("mousemove",onMouseMove);
    }
  
    // clientX,clientYで画面左端、上端からのマウスの位置を取得。
  // offsetWidth,offsetHeightで要素のサイズを取得できる。
  //下の処理で、マウスに画像が追随する。
  const onMouseMove = e=>{
    let x = e.clientX;
    let y = e.clientY;
    let width = burger_back.offsetWidth;
    let height = burger_back.offsetHeight;
    burger.style.top = (y-height/2) + "px";
    burger.style.left = (x-width/2) + "px";
    burger.style.opacity = "1"
    burger_back.style.opacity="0.5"
    }

    const num = document.getElementById("num");
    let burgerNum =8

   // 下は、マウスを放したときの処理
   
   burger.onmouseup = e=>{
      document.removeEventListener("mousemove",onMouseMove);
      burger.style.opacity ="0";
      burger_back.style.opacity="1";


      let x = e.clientX;
      let y = e.clientY;
      const kemoshota = document.getElementById("kemoshota");
      const kemoshotaRect = kemoshota.getBoundingClientRect();
      if((x>=kemoshotaRect.left && x<=(kemoshotaRect.left+kemoshotaRect.width)) && (y>=kemoshotaRect.top && y<=(kemoshotaRect.top+kemoshotaRect.height))&& burgerNum>=1){
      
        if(burgerNum>=2){puu.currentTime= 0;
        puu.play();
        }
        if(burgerNum===1){power.currentTime= 0;
          power.play();}
       burgerNum--
       num.textContent =`${burgerNum}`
       currentIndex++
       kemoshota.src = images[currentIndex];
      }

      if(burgerNum===0){
        burger_back.style.opacity="0.2"
      }
      
    }

}