

// const ready = (selector, callback) => {
// 	window.addEventListener('DOMContentLoaded', function () {
// 		const elems = [...document.querySelectorAll(selector)];
// 		if (elems.length) {
// 			for (let elem of elems) {
// 				callback(elem);
// 			}
// 		}
// 	});
// };

// ready('.counter', (stat) => {
// 	// pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
// 	const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
// 	const time = 100;
// 	let result = [...patt.exec(stat.textContent)];
// 	let fresh = true;
// 	let ticks;
	
// 	// Remove first full match from result array (we dont need the full match, just the individual match groups).
// 	result.shift();
// 	// Remove undefined values from result array where they didnt have a match in one of the optional regex groups
// 	result = result.filter(res => res != null);

// 	while (stat.firstChild) {
// 		stat.removeChild(stat.firstChild);
// 	}

// 	for (let res of result) {
// 		if (isNaN(res)) {
// 			stat.insertAdjacentHTML('beforeend', `<span>${res}</span>`);
// 		}
// 		else {
// 			for (let i = 0; i < res.length; i++) {
// 				stat.insertAdjacentHTML('beforeend',
// 					`<span data-value="${res[i]}">
// 						<span>&ndash;</span>
// 						${Array(parseInt(res[i]) + 1).join(0).split(0).map((x, j) => `
// 							<span>${j}</span>
// 						`).join('')}
// 					</span>`
// 				);
// 			}
// 		}
// 	}

// 	ticks = [...stat.querySelectorAll('span[data-value]')];

// 	let activate = () => {
// 		let top = stat.getBoundingClientRect().top;
// 		let offset = (window.innerHeight * 3 / 4);

// 		setTimeout(() => {
// 			fresh = false;
// 		}, time);

// 		if (top < offset) {
// 			setTimeout(() => {
// 				for (let tick of ticks) {
// 					let dist = parseInt(tick.getAttribute('data-value')) + 1;
// 					tick.style.transform = `translateY(-${(dist) * 100}%)`
// 				}
// 			}, fresh ? time : 0);
// 			window.removeEventListener('scroll', activate);
// 		}
// 	}
// 	window.addEventListener('scroll', activate);
// 	activate();
// });




function cursoreffect(){

  

    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")
    
    page1Content.addEventListener("mousemove",function(dets){
    gsap .to(cursor,{
        x:dets.x,
        y:dets.y
    })
    
    })
    
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1,
          
        })
    
    })
    
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:1
        })
    })
    
    
    }
    cursoreffect()

    let value =0;
    setInterval( () => {
      value +=1
      odometer.innerHTML = value;
    })
    


   // --- aboutimg ---

gsap.to(".aboutimg", {scrollTrigger: {
    trigger: ".aboutimg",
    toggleActions: "restart pause reverse pause",
       // pin: true,
       // pinSpacing:false,
        scrub:1,
    start: "top bottom",
      end: "center top"
      },
        backgroundPosition: "0px -500px", ease: "none"});
  
  
  
 gsap.to(".aboutimg2", {scrollTrigger: {
            trigger: ".aboutimg2",
            toggleActions: "restart pause reverse pause",
               // pin: true,
               // pinSpacing:false,
                scrub:1,
            start: "top bottom",
              end: "center top"
              },
                backgroundPosition: "0px -500px", ease: "none"});


                
                
                
                
                

 var tl = gsap.timeline()



 tl.from("#loader h3",{
  opacity:100,
  y:0,
  duration:1.5,
  stagger:0.1,
 })


 tl.to("#loader h3",{
  opacity:0,
  duration:1,
  stagger:0.1
 
 })

 
 

 tl.from("#loader",{
  opacity:100,
  y:0,
  duration:1.5,
  stagger:0.1,
  
 })

 tl.to("#loader",{
  opacity:100,
  y:-1000,
  duration:1,
 
 })

 
 
 tl.to(".boundingelm",{
  y:0,
  delay:-0.5,
  opacity:100,
  duration:1,
  stagger:0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
 })

 tl.from(".nlink",{
  y:-20,
  opacity:0,
  delay:0,
 })


 tl.to("#loader",{
   opacity:0,  
 })

 tl.to("#loader",{
   display:"none"
 })

 

 ScrollReveal().reveal(".page_No",{ duration:2500 });
 ScrollReveal().reveal(".Lines",{ duration:2500 });
 ScrollReveal().reveal(".advantage_titel",{ duration:2500 });
 ScrollReveal().reveal(".paraghraph_lines",{ duration:2500 });
 ScrollReveal().reveal(".page_No2",{ duration:2500 });
 ScrollReveal().reveal(".Recent-project",{ duration:2500 });
 ScrollReveal().reveal(".Creative-designe",{ duration:2500 });
 
 ScrollReveal({ distance: '300px' });
 ScrollReveal().reveal('.project-1',{  delay:500,origin: 'bottom' });
 ScrollReveal().reveal(".project-1info",{ duration:1000 });
 ScrollReveal().reveal(".project-2",{  delay:500,origin: 'bottom' });
 ScrollReveal().reveal(".project-2info",{ duration:1000 });

// PAGE 3 Animation
ScrollReveal({ distance: '300px' });
ScrollReveal().reveal(".My_img",{ duration:1000 });
ScrollReveal().reveal('#page_No3 h2', { duration:1000,origin: 'bottom' });
ScrollReveal().reveal('#page_No3 h4', { delay:500,duration:1000,origin: 'bottom' });
ScrollReveal().reveal('#page_No3 h3', {  delay:500,duration:1500,origin: 'left' });
ScrollReveal().reveal('.Gaming-Music h3', {  delay:300,duration:1000,origin: 'right' });
ScrollReveal().reveal(".discription h3,h2",{delay:500, duration:1000,origin: 'bottom' });

ScrollReveal({ distance: '300px' });
ScrollReveal().reveal('.email-id h4', { delay:500,duration:1500,origin:'left' });
ScrollReveal().reveal('.page_No4 h4', { duration:2000,origin: 'bottom' });
ScrollReveal().reveal('.part2_heading h4', { duration:1000,origin: 'bottom' });
ScrollReveal().reveal('.part1_heading h4', { duration:1000,origin: 'bottom' });
ScrollReveal().reveal(".bottom_heading1 h4",{ delay:500 });
ScrollReveal().reveal(".bottom_heading2 h4",{ delay:500 });
ScrollReveal().reveal(".bottom_heading3 h4",{ delay:500 });


 


