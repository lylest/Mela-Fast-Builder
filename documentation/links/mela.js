
window.onload = function(){

 

  //MELA BASIC LAYOUT JS GOES HERE

  var  mela = document.getElementById('mela-basic');
  mela.innerHTML="<div id='nav'></div><div id='banner'></div><div id='items-box'><div id='item1'></div><div id='item1'></div><div id='item1'></div></div> <div id='two-side'><div class='side-bar'><div class='side-one'></div><div class='side-two'></div> </div></div>";


  //END OF MELA BASIC LAYOUT JS 
 



 
        //show hidden side bar #sider-menu

  var menubutton = document.getElementsByClassName('menu-button');

     menubutton[0].addEventListener('click', function(e){

       //get sider menu and show it

       document.getElementById('sider-menu').style.display = "block";
       document.getElementById('sider-menu').style.transition = "all 2s";
     });

     //close sider menu

     var closebutton = document.getElementsByClassName('close-button');

       closebutton[0].addEventListener('click',function(e){

         document.getElementById('sider-menu').style.display = "none";
         document.getElementById('sider-menu').style.transition = "all 2s";

       });

  //show hidden side bar #sider-menu
 




 
   //Hide upload progress bar div

    var closeuploader = document.getElementsByClassName('close-uploader');

    closeuploader[0].addEventListener('click', function(e){

       document.getElementById('uploader').style.display = "none";
    });

  //hide of upload progress bar div
 



  


}
