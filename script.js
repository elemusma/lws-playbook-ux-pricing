jQuery('.mobile-packages ul.box-features li div[data-tooltip] span').click(function(){
    jQuery('.mobile-packages ul.box-features li div[data-tooltip]').removeClass('show_totltip');
    jQuery(this).closest('div').toggleClass('show_totltip');
    
    // if(jQuery(this).closest('div').hasClass('show_totltip')){
    //     jQuery(this).closest('div').removeClass('show_totltip');
    // }
  });
  
  function equalHeightBox() {
  let boxInfoOne = document.querySelector('.box-info-height-one');
  let boxInfoTwo = document.querySelector('.box-info-height-original');
  let boxInfoThree = document.querySelector('.box-info-height-three');
  let boxInfoFour = document.querySelector('.box-info-height-four');
  
  boxInfoOne.style.height = `${boxInfoTwo.offsetHeight}px`;
  // boxInfoThree.style.height = `${boxInfoTwo.offsetHeight}px`;
  boxInfoFour.style.height = `${boxInfoTwo.offsetHeight}px`;
  
  console.log(boxInfoTwo.offsetHeight);
  }
  equalHeightBox();