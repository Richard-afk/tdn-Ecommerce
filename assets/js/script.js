// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================
$(document).ready(function(){
var btn = $('.btn');
//var link = document.getElementsByClassName('link')
btn.on('click', function() {
  $(this).toggleClass('active not-active');
  $('.link').toggleClass('open closed');
});
});



// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
  const productTag = document.querySelector('name="tabset"');
  const catalogue = document.querySelectorAll(".catalogue");
  productTag.addEventListener('change', () => {
    catalogue.forEach(element => {
      element.style.display = "none";
      const filter = element.getElementsByTagName('span');
      if(productTag.value = "All"){
        catalogue.style.display = "";
      }
      else if(productTag.value == filter.textContent){
        filter.parentElement.style.display = "";
      }
      else{

      }
    });
  })
//i have no idea why this isn't working 😅





// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================
const displayItems = () =>{
  var kword = searchProduct.value.toUpperCase();
  const card = document.getElementsByClassName("percard");

  for(i = 0;i < card.length; i++){
    var name = card[i].getElementsByTagName("p")[0];
    var txtValue = name.textContent || name.innetText;
    if (txtValue.toUpperCase().indexOf(kword) > -1) {
      card[i].style.display = "";
    } 
    else {
      card[i].style.display = "none";
    }
  } 

}




/*
        _____________________________________________
      //:::::::::::::::::::::::::::::::::::::::::::::\\
    //:::_______:::::::::________::::::::::_____:::::::\\
  //:::_/   _-"":::_--"""        """--_::::\_  ):::::::::\\
 //:::/    /:::::_"                    "-_:::\/:::::|^\:::\\
//:::/   /~::::::I__                      \:::::::::|  \:::\\
\\:::\   (::::::::::""""---___________     "--------"  /::://
 \\:::\  |::::::::::::::::::::::::::::""""==____      /::://
  \\:::"\/::::::::::::::::::::::::::::::::::::::\   /~::://
    \\:::::::::::::::::::::::::::::::::::::::::::)/~::://
      \\::::\""""""------_____::::::::::::::::::::::://
        \\:::"\               """""-----_____:::::://
          \\:::"\    __----__                )::://
            \\:::"\/~::::::::~\_         __/~:://
              \\::::::::::::::::""----""":::://
                \\::::::::::::::::::::::::://
                  \\:::\^""--._.--""^/::://
                    \\::"\         /":://
                      \\::"\     /":://
                        \\::"\_/":://
                          \\::::://
                            \\_//
                              "
*/