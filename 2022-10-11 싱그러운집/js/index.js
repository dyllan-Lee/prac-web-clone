function tabOpen(e, tabName) {
  // let tabcontent = document.getElementsByClassName('tabcont');
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = 'none';
  // }
  // document.getElementById(tabName).style.display = 'block';
  //컨텐츠를 보여주기 위해서 사용


  //클래스 추가하기 위함
  let tabL = document.getElementsByClassName('tablink');
  for (i = 0; i < tabL.length; i++) {
    tabL[i].className = tabL[i].className.replace(' green_active', '');
  }
  e.currentTarget.className += ' green_active';
}