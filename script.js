const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth:true
});






var over = document.querySelector("#overlay")
var over2 = document.querySelector("#overlay2")
var over3 = document.querySelector("#overlay3")
var overh4 = document.querySelector("#overh4")
var overh42 = document.querySelector("#overh42")
var overh43 = document.querySelector("#overh43")
var page3 = document.querySelector("#page3")
var photo = document.querySelectorAll(".photo")



// overh4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(dets){
//         console.log(dets);
//         elem.style.color ="#fff"
        
//         gsap.to(dets.target,{
//             y:-60,
//             duration:0.2,
            
//         })
//     })
    
// })


// overh4.forEach(function(elem){
//     elem.addEventListener("mouseleave",function(dets){
//         elem.style.color ="#000"
        
//         gsap.to(dets.target,{
//             y:0,
//             duration:0.2,
            
//         })
//     })
    
// })

overh4.addEventListener("mouseenter",function(){
    overh4.style.color ="#fff"
    
    gsap.to("#overlay",{
        y:-60,
        duration:0.2,
        
    })
})


overh4.addEventListener("mouseleave",function(){
    overh4.style.color ="#000"

    gsap.to("#overlay",{
        y:0,
        duration:0.2,
    })
})

overh42.addEventListener("mouseenter",function(){
    overh42.style.color ="#fff"
    
    gsap.to("#overlay2",{
        y:-70,
        duration:0.2,
        
    })
})


overh42.addEventListener("mouseleave",function(){
    overh42.style.color ="#000"

    gsap.to("#overlay2",{
        y:0,
        duration:0.2,
    })
})


overh43.addEventListener("mouseenter",function(){
    overh43.style.color ="#fff"
    
    gsap.to("#overlay3",{
        y:-100,
        duration:0.2,
        
    })
})


overh43.addEventListener("mouseleave",function(){
    overh43.style.color ="#000"

    gsap.to("#overlay3",{
        y:0,
        duration:0.25,
    })
})


gsap.to(".col",{
    x:"-200%",
    repeat:-1,
    duration:15,
    ease:"none",
})


var elemContainer = document.querySelector("#elem-container")

elemContainer.addEventListener("mouseenter", function(){
    profile.style.display ="initial"
    profile.style.backgroundSize ="cover"
    profile.style.position ="center"
})

var profile = document.querySelector("#fixed")
page3.addEventListener("mouseenter",function(){
   photo.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
       var image = elem.getAttribute("data-image");
        profile.style.backgroundImage =`url(${image})`
     })
   })

})


elemContainer.addEventListener("mouseleave", function(){
    profile.style.display ="none"
    profile.style.backgroundSize ="cover"
    profile.style.position ="center"
})

var a= "#FE330A";

var design =document.querySelector("#design")
var projects =document.querySelector("#Project")
var execution =document.querySelector("#Execution")
var bigImage = document.querySelector("#bigImage")
var blackboxh1 =document.querySelectorAll("#blackbox h1")
var para = document.querySelector("#right4 p")

projects.addEventListener("click", function(){
    design.style.opacity = 0.6
    execution.style.opacity = 0.6
    projects.style.opacity = 1
    projects.style.borderLeft ="4px solid #FE330A"
    execution.style.borderLeft ="#eec9c9c1"
    design.style.borderLeft ="#eec9c9c1"
     para.textContent = `Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.`
     
       
})


execution.addEventListener("click", function(){
    
    design.style.opacity = 0.6
    projects.style.opacity = 0.6
    execution.style.borderLeft ="4px solid #FE330A"
    execution.style.opacity = 1
    projects.style.borderLeft ="#eec9c9c1"
    design.style.borderLeft ="#eec9c9c1"
    para.textContent = `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`
})


design.addEventListener("click", function(){
    projects.style.opacity = 0.6
    execution.style.opacity = 0.6
    design.style.opacity = 1
    design.style.borderLeft ="4px solid #FE330A"
    execution.style.borderLeft ="#eec9c9c1"
    projects.style.borderLeft ="#eec9c9c1"
    para.textContent = `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`
})


blackboxh1.forEach(function(elem){
   elem.addEventListener("click", function(){
     var photoh1 = elem.getAttribute("data-image")
    bigImage.style.backgroundImage =`url(${photoh1})`
   })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var page5 = document.querySelector("#page5")
  var cursor = document.querySelector("#cursor")
  cursor.style.opacity = 0

  page5.addEventListener("mousemove", function(dets){
       gsap.to(cursor,{
        x:dets.x+"-200px",
        y:dets.y+"-200px"
       })
    

  var slides = document.querySelectorAll(".swiper-slide")
  slides.forEach(function(slide){
     slide.addEventListener("mouseenter",function(){
          cursor.style.opacity = 1;
     })
  })

  slides.forEach(function(slides){
    slides.addEventListener("mouseleave",function(){
        cursor.style.opacity = 0;
   })
  })

  })

