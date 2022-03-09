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
  

  $(document).ready(function(){
    console.log("Hey!");
    if(checkForWeb2()){
      //Navigation - Theme Setup
    	$("div.tag-early-access").addClass("web2");
        $(".navlink").addClass("web2");
      	
      //Home - Theme Setup
        $(".tag-coming-soon").addClass("web2");
        $(".headline").addClass("web2");
        $(".paint-swipe").addClass("web2");
        $(".powered-by---tag").addClass("web2");
        $(".button").addClass("web2");
        $(".col-slider-w-bg-shape").addClass("web2");
      
     //Resource - Theme Setup
      $(".btn-scrolldown").addClass("web2");
      $(".btn-text").addClass("web2");
      $(".arrow-icon").addClass("web2");
      
    }    
   });
  
  $("div.wrapper-mode-toggle").click(function(){
    if(checkForWeb2()){
    	//Remove Cookie
    	console.log("Remove Cookie");
    	document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    	//document.cookie = 'theme=; Max-Age=0; path=/; domain=' + location.host;

    } else {
    	//Set Cookie
    	console.log("Set Cookie");
    	setCookie();
    }
      
//Home Page - Theme Targets
    $("div.tag-early-access").toggleClass("web2");
    $(".navlink").toggleClass("web2");
    $(".tag-coming-soon").toggleClass("web2");
    $(".headline").toggleClass("web2");
    $(".paint-swipe").toggleClass("web2");
    $(".powered-by---tag").toggleClass("web2");
    $(".button").toggleClass("web2");
    $(".col-slider-w-bg-shape").toggleClass("web2");
    
//Resources - Theme Targets
    $(".btn-scrolldown").toggleClass("web2");
    $(".btn-text").toggleClass("web2");
    $(".arrow-icon").toggleClass("web2");
    
  });   