document.addEventListener('DOMContentLoaded', function() {

  var description = document.getElementById('description');
  var clicker = document.getElementById('next-button');
  var wisdomPages = document.getElementsByClassName('page');
  var indicators = document.getElementsByClassName('indicator');
  var currentPageIndex = 0;
  var counter = 0;
  
  clicker.addEventListener('click', function() {
    wisdomPages[currentPageIndex].className = wisdomPages[currentPageIndex].className.replace(' active', '');
    indicators[currentPageIndex].className = indicators[currentPageIndex].className.replace(' current', ' completed');

    while(counter === 0) {
      description.className += ' fade-away';
      counter++;
    };
    currentPageIndex++;
    if(currentPageIndex < wisdomPages.length ) {
      wisdomPages[currentPageIndex].className += ' active';
      indicators[currentPageIndex].className += ' current';
    } else {
      currentPageIndex = 0;
      description.className = description.className.replace(' fade-away', '');
      counter = 0;

      for(var i = 1; i < 6; i++) {
        indicators[i].className = indicators[i].className.replace(' completed', '');
      };
    }
  });

  // generator.addEventListener('click', function() {
  //     currentPageIndex++;
  //     for(var i = 0; i < wisdomPages.length; i++) {
  //       if( i === currentPageIndex) {
  //         wisdomPages[i].className += ' current';
  //       }
  //     };
  //     description.className += ' fade-away';
  // });


});
