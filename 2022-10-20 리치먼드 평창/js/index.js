// 헤드에 서브 메뉴 떨어지는 js
let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('#gnb_bg');
//여러개니까 querySelectorAll로 부른다
let lnb = document.querySelectorAll('.lnb');
console.log(lnb); //NodeList(7)

//gnb에 마우스가 가면 마우스이벤트가 일어날것이다
//화살표 함수 ()=>{} 기존함수 function(){}
gnb.addEventListener('mouseenter',()=>{
  //gnb_bg에 높이를 250으로 갖고
  gnb_bg.style.height = '250px';

  //포문을 사용해서 lnb갯수만큼 디스플레이를 블럭으로 한다
  for( i = 0 ; i <lnb.length; i++){
    lnb[i].style.display = 'block';
  }
})
//gnb에 마우스가 떠나면 마우스이벤트가 일어날것이다
gnb.addEventListener('mouseleave',()=>{
  //gnb_bg에 높이를 0으로 갖고
  gnb_bg.style.height = '0px';

  //포문을 사용해서 lnb갯수만큼 디스플레이를 논으로 한다
  for( i = 0 ; i <lnb.length; i++){
    lnb[i].style.display = 'none';
  }
})


//네번째 섹션 호버하면 이미지 변경
let list = document.querySelectorAll('.list');
  //마우스가 들어오면
  for(let i = 0; i<list.length; i++){
    list[i].addEventListener('mouseenter',()=>{
      list[i].src = `img/main3-on${i+1}.jpg`
    });
  //마우스가 떠나면
    list[i].addEventListener('mouseleave',()=>{
      list[i].src = `img/main3-img${i+1}.jpg`
    });
}


//다섯번째 섹션 호버하면 아이콘 이미지 변경
let floor = document.querySelectorAll('.floor');
for(let i = 0; i<floor.length; i++){
  //마우스가 들어오면
  floor[i].addEventListener('mouseenter',()=>{
    floor[i].style.backgroundImage = 'url(img/floorplan-icon-on.png)';
    floor[i].style.backgroundColor = '#fff';
    floor[i].style.color = '#333';
  })
  //마우스가 떠나면
  floor[i].addEventListener('mouseleave',()=>{
    floor[i].style.backgroundImage = 'url(img/floorplan-icon.png)';
    floor[i].style.backgroundColor = '#8d7249';
    floor[i].style.color = '#fff';
  })
}


let vr = document.querySelectorAll('.vr');
for(let i = 0; i <vr.length; i++){
  //마우스가 들어오면
  vr[i].addEventListener('mouseenter',()=>{
    vr[i].style.backgroundColor = '#fff';
    vr[i].style.backgroundImage = 'url(img/vr-icon-on.png)';
    vr[i].style.color = '#333';
  })
  //마우스가 나가면
  vr[i].addEventListener('mouseleave',()=>{
    vr[i].style.backgroundColor = '#59483f';
    vr[i].style.color = '#fff';
    vr[i].style.backgroundImage = 'url(img/vr-icon.png)';
  })
}