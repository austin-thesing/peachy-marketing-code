console.log("It Fetched the new version - combo");    
    function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }
  
  function setCookie(){
    // set default theme (opposite of what's referenced below is the default) so the default is web3
    document.cookie = "theme=web2";
  };
  
  function checkForWeb2(){
  	console.log(getCookie("theme"));
  	return getCookie("theme");
  };
  
  //Check for existing cookie/theme setting
  $(document).ready(function(){
    console.log("Hey!");
    if(checkForWeb2()){

      //Navigation - Theme Setup
    	  $("div.tag-early-access").addClass("web2");
        $(".navlink").addClass("web2");
      	
      //Home Page - Theme Setup
        $(".tag-coming-soon").addClass("web2");
        $(".headline").addClass("web2");
        $(".paint-swipe").addClass("web2");
        $(".powered-by---tag").addClass("web2");
        $(".button").addClass("web2");
        $(".col-slider-w-bg-shape").addClass("web2");

     // Resource Page - Theme Setup
        $(".btn-scrolldown").addClass("web2");
        $(".btn-text").addClass("web2");
        $(".arrow-icon").addClass("web2");
        $(".page-intro---title").addClass("web2");
    // Resource Gallery List
        $(".bg---paint-swipe").addClass("web2");
        $(".resource3xwide").addClass("web2");
        $(".section-title").addClass("web2");
    //Resource Preview
        $(".category-tag").addClass("web2");
        $(".btn-readmore").addClass("web2");
    }    
   });
  
  $("div.wrapper-mode-toggle").click(function(){
    if(checkForWeb2()){
    	//Remove Cookie
    	console.log("Remove Cookie");
    	document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";


    } else {
    	//Set Cookie
    	console.log("Set Cookie");
    	setCookie();
    }
      
//Nav + Global - Theme Targets
    $("div.tag-early-access").toggleClass("web2");
    $(".navlink").toggleClass("web2");
    $(".powered-by---tag").toggleClass("web2");

//Home Page - Theme Targets
    $(".tag-coming-soon").toggleClass("web2");
    $(".headline").toggleClass("web2");
    $(".paint-swipe").toggleClass("web2");
    
    $(".button").toggleClass("web2");
    $(".col-slider-w-bg-shape").toggleClass("web2");
    
//Resources - Theme Targets
    $(".btn-scrolldown").toggleClass("web2");
    $(".btn-text").toggleClass("web2");
    $(".arrow-icon").toggleClass("web2");
    $(".page-intro---title").toggleClass("web2");
    // Resource Gallery List
      $(".bg---paint-swipe").toggleClass("web2");
      $(".resource3xwide").toggleClass("web2");
      $("h2.section-title").toggleClass("web2");
   //Resource Preview
      $(".category-tag").toggleClass("web2");
      $(".btn-readmore").toggleClass("web2");
    
  });   