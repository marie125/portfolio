
 var prev = document.getElementById("prev")
 var next = document.getElementById("next")


 /************ objet contenant les gestionnaires d'évènements */
 var listenersfunction = {
    nexslide: ()  =>{

        index = slideindex +1
        showSlide(index) 

    } ,
    prevslide: () =>{
        index = slideindex -1
        showSlide(index)  
    }
 }

 /*********** fonction qui gère les évènements */
 var setuplisteners = ()  =>{
    prev.onclick = listenersfunction.prevslide
    next.onclick = listenersfunction.nexslide
 }