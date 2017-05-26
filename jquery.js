jQuery(document).ready(function(){
jQuery('.#abc').click(function(){
  alert('hello');
});
jQuery("#username","#username1","#username2").click(function(){
  alert('hello marlabs');
  var this_obj= jQuery(this),
  id=this_obj.attr('id');
  
  switch (id){
    case 'username':
      resp='button with id'+id +'clicked';
      break;
    case 'username1':
      resp='button with id'+id +'clicked';
      break;
    case 'username2':
      resp='button with id'+id +'clicked';
      break;
        
  }  
  alert(resp);
});
jQuery('[details]!="arun"').click(function(){
  alert(jQuery(this).html());
})

});

jQuery(document).ready(function){
  
  jQuery("div:has(p)").click(function(){
    jQuery('#animatecntr').animated({
      width:"90%",
      "font-size:20px",
      "padding :2px",
      "border: 10px solid red";
    })
  })
  jQuery('#abc').siblings().css({'color':'red'});
  jQuery(this).next().css({'color':'red'});
  
  
  
});

jQuery(document).on({
  jQuery('div').each(function(){
    
    
  });
});
jQuery(document).ready(function(){
    jQuery('#abc').click(function(event){
      event.preventDefault();
    });
  
    jQuery('#para').click(function(event){
     event.stopPropagation();
     alert('paragraph');
    });
  });