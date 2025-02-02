
  var slideindex = 0
 

var changeSlide = ()  =>{
      var index = slideindex +1
      showSlide(index)
  }

 var intervalID = setInterval(changeSlide,5000)


var hideslider = () =>{
     sliders = document.querySelectorAll('.slide')
      displaydot(sliders)
     for (let index = 1; index < sliders.length; index++) {
        const slide = sliders[index];
        slide.style.display = "none"
        
     }
}

var initslide  = () =>{
    hideslider()
}
var displaydot  = ( slider) =>{
    for (let index = 0; index < slider.length; index++) {
        const element = slider[index];
         var span = document.createElement("span")
          span.onclick = () => showSlide(index)
         span.className = "dot"
         document.getElementById("dots").appendChild(span)
        
    }

}
 var showSlide = (index)  =>{
    sliders = document.querySelectorAll('.slide')
    let lastslideindex = slideindex
    if (index < 0) {
         index += 3
    }
    slideindex = index % sliders.length
    sliders[lastslideindex].style.display = "none"
    sliders[slideindex].style.display= "block"


 }
  