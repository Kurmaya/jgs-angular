    function geeto(){
        alert('hello');
    }
    
    $("#carouselExampleIndicators .carousel-indicators li").hover(function(){
      var goto = Number( $(this).attr('data-slide-to') );
      $("#carouselExampleIndicators").carousel(goto);  
    });