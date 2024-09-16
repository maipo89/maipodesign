$(document).ready(function() {


    const boxes = $('.boxes');
    console.log(boxes)
    const boxWidth = boxes.children('.box').first().width();
    const animationDuration = 10000; // Change this value to adjust animation speed
    
    // Calculate initial offset
    const rowWidth = boxes.width();
    const initialOffset = -100 * (boxWidth / rowWidth); // Adjusted calculation
    
    // Set initial position
    boxes.css('left', initialOffset + '%');
    
    // Define animation function
    const animateBoxes = () => {
        boxes.animate({ 'left': '0%' }, {
            duration: animationDuration,
            easing: 'linear',
            complete: function() {
                // Reset position after animation completes
                boxes.css('left', initialOffset + '%');
                // Call animateBoxes recursively for infinite loop
                animateBoxes();
            }
        });
    };
    
    // Start animation
    animateBoxes();

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    gsap.defaults({ease: "none"});
    
    // Function to create the desktop animation
    const createDesktopAnimation = () => {
      const pulses = gsap.timeline({
        defaults: {
          scale: 1.1,
          autoAlpha: 1,
          transformOrigin: 'center',
          ease: "elastic(2.5, 1)"
        }
      })
      .to("#cloud-0", {}, 0.20)
      .to(".cloud-1", {}, 0.84)
      .to(".cloud-2", {}, 1.36)
      .to(".cloud-3", {}, 3.22)
      .to(".cloud-4", {}, 4.82);
    
      const main = gsap.timeline({
        scrollTrigger: {
          trigger: "#airplane-desktop",
          scrub: true,
          start: "top center",
          end: "bottom center",
        }
      })
      .to(".airplane", {
        motionPath: {
          path: "#airplane-desktop .cls-3",
          align: "#airplane-desktop .cls-3",
          alignOrigin: [0.5, 0.5],
          autoRotate: 270,
        },
        duration: 6
      }, 0);
    
      main.add(pulses, 0);
    
      return { pulses, main };
    };

    const createBalloonAnimation = () => {

      const pulses = gsap.timeline({
        defaults: {
          scale: 1.1,
          autoAlpha: 1,
          transformOrigin: 'center',
          ease: "elastic(2.5, 1)"
        }
      })
      .to("#ballon .cloud-6", {}, 1.10)
      .to("#ballon .cloud-7", {}, 0.20)
      .to("#ballon .cloud-8", {}, 0.50)
      .to("#ballon .cloud-14", {}, 3)
      .to("#ballon .cloud-12", {}, 4)
      .to("#ballon .cloud-13", {}, 4.5)
    
      const main = gsap.timeline({
        scrollTrigger: {
          trigger: "#ballon",
          scrub: true,
          start: "top center",
          end: "bottom center",
        }
      })
      .to("#air-ballon", {
        motionPath: {
          path: "#ballon .cls-6",
          align: "#ballon .cls-6",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6
      }, 0);
    
      main.add(pulses, 0);
    
      return { pulses, main };
    };

    const createBalloonAnimationIpad = () => {

      const pulses = gsap.timeline({
        defaults: {
          scale: 1.1,
          autoAlpha: 1,
          transformOrigin: 'center',
          ease: "elastic(2.5, 1)"
        }
      })
      .to("#air-ballon-ipad .cloud-10", {}, 0.5)
      .to("#air-ballon-ipad .cloud-1", {}, 1)
      .to("#air-ballon-ipad .cloud-2", {}, 1)
      .to("#air-ballon-ipad .cloud-11", {}, 1.5)
      .to("#air-ballon-ipad .cloud-12", {}, 1.5)
      .to("#air-ballon-ipad .cloud-4", {}, 2)
      .to("#air-ballon-ipad .cloud-9", {}, 3.5)
      .to("#air-ballon-ipad .cloud-3", {}, 4)
      .to("#air-ballon-ipad .cloud-5", {}, 5)
      .to("#air-ballon-ipad .cloud-6", {}, 6)
      .to("#air-ballon-ipad .cloud-7", {}, 6)
      .to("#air-ballon-ipad .cloud-8", {}, 7)
    
      const main = gsap.timeline({
        scrollTrigger: {
          trigger: "#air-ballon-ipad",
          scrub: true,
          start: "top center",
          end: "bottom center",
        }
      })
      .to("#air-ballon-ipad-group", {
        motionPath: {
          path: "#air-ballon-ipad .cls-5",
          align: "#air-ballon-ipad .cls-5",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6
      }, 0);
    
      main.add(pulses, 0);
  
      return { pulses, main };
    };

    const createBalloonAnimationIphone = () => {

      const pulses = gsap.timeline({
        defaults: {
          scale: 1.1,
          autoAlpha: 1,
          transformOrigin: 'center',
          ease: "elastic(2.5, 1)"
        }
      })
      .to("#air-ballon-iphone .cloud11", {}, 0.2)
      .to("#air-ballon-iphone .cloud2", {}, 0.4)
      .to("#air-ballon-iphone .cloud3", {}, 0.4)
      .to("#air-ballon-iphone .cloud5", {}, 1)
      .to("#air-ballon-iphone .cloud13", {}, 1.3)
      .to("#air-ballon-iphone .cloud14", {}, 1.3)
      .to("#air-ballon-iphone .cloud10", {}, 2.7)
      .to("#air-ballon-iphone .cloud7", {}, 2.9)
      .to("#air-ballon-iphone .cloud8", {}, 2.9)
      .to("#air-ballon-iphone .cloud9", {}, 4)
      .to("#air-ballon-iphone .cloud6", {}, 4.2)
      .to("#air-ballon-iphone .cloud15", {}, 5.5)
      .to("#air-ballon-iphone .cloud14", {}, 5.7)
      .to("#air-ballon-iphone .cloud1", {}, 5.8)
    
      const main = gsap.timeline({
        scrollTrigger: {
          trigger: "#air-ballon-iphone",
          scrub: true,
          start: "top center",
          end: "bottom center",
        }
      })
      .to("#air-ballon-iphone-group", {
        motionPath: {
          path: "#air-ballon-iphone .cls-8",
          align: "#air-ballon-iphone .cls-8",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6
      }, 0);
    
      main.add(pulses, 0);
    
      return { pulses, main };
    };
    
    // Function to create the iPad animation
    const createIpadAnimation = () => {
      return gsap.to("#airplaine-ipad__airplaine", {
        motionPath: {
          path: "#airplaine-ipad .cls-1",
          align: "#airplaine-ipad .cls-1",
          alignOrigin: [0.5, 0.5],
          autoRotate: 450,
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const birds1 = () => {
      return gsap.to(".birds1", {
        motionPath: {
          path: ".path-birds1",
          align: ".path-birds1",
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const birds2 = () => {
      return gsap.to(".birds2", {
        motionPath: {
          path: ".path-birds2",
          align: ".path-birds2",
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const birds3 = () => {
      return gsap.to(".birds3", {
        motionPath: {
          path: ".path-birds3",
          align: ".path-birds3",
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const birds1Mobile = () => {
      return gsap.to(".birds1-mobile", {
        motionPath: {
          path: ".birds-path1-mobile",
          align: ".birds-path1-mobile",
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const birds2Mobile = () => {
      return gsap.to(".birds2-mobile", {
        motionPath: {
          path: ".birds-path2-mobile",
          align: ".birds-path2-mobile",
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const birds3Mobile = () => {
      return gsap.to(".birds3-mobile", {
        motionPath: {
          path: ".birds-path3-mobile",
          align: ".birds-path3-mobile",
          alignOrigin: [0.5, 0.5],
        },
        duration: 10,
        ease: "none",
        repeat: -1
      });
    };

    const balloonsBow = () => {
      return gsap.to("#balloons-bow", {
        motionPath: {
          path: ".path-balloons-bow",
          align: ".path-balloons-bow",
          alignOrigin: [0.7, 0.7],
        },
        duration: 15,
        ease: "none",
        repeat: -1
      });
    };


    const balloonsBowMobile = () => {
      return gsap.to("#ballons-bow-mobile", {
        motionPath: {
          path: ".ballons-bow-mobile-path",
          align: ".ballons-bow-mobile-path",
          alignOrigin: [0.5, 0.5],
        },
        duration: 20,
        ease: "none",
        repeat: -1
      });
    };

    const balloonsAnimation1 = () => {
      
      const main = gsap.timeline({
        scrollTrigger: {
          trigger: "#balloons",
          scrub: true,
          start: "1000px top",
          end: "+=2640px 50%",
        }
      });
    
      // Balloon 8 movement
      main.to("#balloon-8", {
        motionPath: {
          path: ".ballon-path-8",
          align: ".ballon-path-8",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);
    
      // Balloon 1 movement
      main.to("#balloon-1", {
        motionPath: {
          path: ".ballon-path-1",
          align: ".ballon-path-1",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);

      // Balloon 2 movement
      main.to("#balloon-2", {
        motionPath: {
          path: ".ballon-path-2",
          align: ".ballon-path-2",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);

      // Balloon 3 movement
      main.to("#balloon-3", {
        motionPath: {
          path: ".ballon-path-3",
          align: ".ballon-path-3",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);

      // Balloon 4 movement
      main.to("#balloon-4", {
        motionPath: {
          path: ".ballon-path-4",
          align: ".ballon-path-4",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);

      // Balloon 5 movement
      main.to("#balloon-5", {
        motionPath: {
          path: ".ballon-path-5",
          align: ".ballon-path-5",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);


      // Balloon 6 movement
      main.to("#balloon-6", {
        motionPath: {
          path: ".ballon-path-6",
          align: ".ballon-path-6",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);


      // Balloon 7 movement
      main.to("#balloon-7", {
        motionPath: {
          path: ".ballon-path-7",
          align: ".ballon-path-7",
          alignOrigin: [0.5, 0.5],
        },
        duration: 6,
        ease: "power1.inOut",
      }, 0);
      return { main };
    };

    const floatAnimation = () => {
      // Function to create random movement values within a range
      const getRandomValue = (min, max) => Math.random() * (max - min) + min;
    
      // Loop over each .niches__niche element and apply random floating animation
      $('.niches__niche').each((index, element) => {
        const animate = () => {
          // Apply random movement to the element with a short duration for faster animations
          gsap.to(element, {
            duration: getRandomValue(2, 4), // Speed: random between 2 and 4 seconds
            x: getRandomValue(-50, 50),     // Random horizontal movement
            y: getRandomValue(-50, 50),     // Random vertical movement
            rotation: getRandomValue(-15, 15), // Random rotation
            ease: "power1.inOut",
            onComplete: animate // Recursively call animate to keep it looping
          });
        };
        
        animate(); // Start the animation
      });
    };

    const storyLine = () => {
      const slides = gsap.utils.toArray(".story__area");
      const slidesAmount = slides.length;
    
      gsap.to(slides, {
        ease: "none",
        duration: slides.length,
        xPercent: -(100 * (slidesAmount - 1)),
        scrollTrigger: {
          trigger: ".about-me",
          start: "center center",
          end: "+=" + 50 * slidesAmount + "%",
          scrub: true,
          pin: ".about-me",
          snap: 1 / (slidesAmount - 1),
        }
      });
    };

    const wheel = () => {
      gsap.to("#wheel-image", {
          rotate: 360 * 5,  // Rotates the wheel 5 times (5 * 360 degrees)
          transformOrigin: "90px 90px", // Set the rotation point (x, y)
          ease: "none",     // No easing, ensures linear animation
          scrollTrigger: {
              trigger: "about-me",  // Element that triggers the animation
              start: "top bottom", // Start animation when the wheel is fully in the viewport
              end: "bottom top",   // End animation when the wheel leaves the top of the viewport
              scrub: true,         // Link animation progress to the scroll position
          }
      });
    };
    
    // Setup GSAP matchMedia
    const mm = gsap.matchMedia();
    
    // Add the animations based on screen width
    mm.add("(min-width: 1071px)", () => {
      // Clear previous animations
      gsap.killTweensOf("#airplaine-ipad__airplaine");
      gsap.killTweensOf(".airplane");
      gsap.killTweensOf("#air-ballon-mobile-group");
      gsap.killTweensOf("#air-ballon");
    
      // Create desktop animation
      createDesktopAnimation();
      createBalloonAnimation();
      balloonsAnimation1();
      floatAnimation();
      balloonsBow();
      storyLine();
      wheel();
    });
    
    mm.add("(max-width: 1070px)", () => {
      // Clear previous animations
      gsap.killTweensOf(".airplane");
      gsap.killTweensOf("#airplaine-ipad__airplaine");
      gsap.killTweensOf("#air-ballon-mobile-group");
      gsap.killTweensOf("#air-ballon");
      gsap.killTweensOf(".birds1-mobile");
      gsap.killTweensOf(".birds2-mobile");
      gsap.killTweensOf(".birds3-mobile");
      gsap.killTweensOf(".birds1");
      gsap.killTweensOf(".birds2");
      gsap.killTweensOf(".birds3");
    
      // Create iPad animation
      createIpadAnimation();
      birds1();
      birds2();
      birds3();
      createBalloonAnimationIpad();
      balloonsAnimation1();
      floatAnimation();
      balloonsBowMobile();
    });

    mm.add("(max-width: 450px)", () => {
      // Clear previous animations
      gsap.killTweensOf(".birds1");
      gsap.killTweensOf(".birds2");
      gsap.killTweensOf(".birds3");
      gsap.killTweensOf(".birds1-mobile");
      gsap.killTweensOf(".birds2-mobile");
      gsap.killTweensOf(".birds3-mobile");
      gsap.killTweensOf("#airplaine-ipad__airplaine");
      gsap.killTweensOf("#air-ballon");
    
      // Create iPad animation
      birds1Mobile();
      birds2Mobile();
      birds3Mobile();
      createBalloonAnimationIphone();
      createIpadAnimation();
      balloonsAnimation1();
      floatAnimation();
    });

    // About Page

    const mediamatch = gsap.matchMedia();

    mediamatch.add("(min-width: 1071px)", () => {
    
      balloonsAnimation1();
      
    });

    // Project Sliders

        var prevArrow = `
        <svg id="button-prev" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.55 52.57">
          <defs>
            <style>
              #button-prev .cls-1 { fill: url(#linear-gradient); }
              #button-prev .cls-1, .cls-2 { stroke-width: 0px; }
              #button-prev .cls-2 { fill: #fff; }
            </style>
            <linearGradient id="linear-gradient" x1="0" y1="26.28" x2="67.55" y2="26.28" gradientUnits="userSpaceOnUse">
              <stop offset=".45" stop-color="#88202e"/>
              <stop offset="1" stop-color="#451115"/>
            </linearGradient>
          </defs>
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path class="cls-1" d="M42.09,0H0v52.57h42.09c14.06,0,25.46-11.77,25.46-26.28S56.15,0,42.09,0Z"/>
              <polyline class="cls-2" points="27.73 40.35 42.09 25.99 28.05 11.95"/>
              <polyline class="cls-2" points="42.09 40.48 56.45 26.13 42.41 12.08"/>
            </g>
          </g>
        </svg>`;

    var nextArrow = `
        <svg id="button-next" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 67.55 52.57">
            <defs>
            <style>
                #button-next .cls-1 {
                    fill: url(#linear-gradient);
                }
        
                #button-next .cls-1, .cls-2 {
                    stroke-width: 0px;
                }
        
                #button-next .cls-2 {
                    fill: #fff;
                }
            </style>
            <linearGradient id="linear-gradient" x1="0" y1="26.28" x2="67.55" y2="26.28" gradientUnits="userSpaceOnUse">
                <stop offset=".45" stop-color="#88202e"/>
                <stop offset="1" stop-color="#451115"/>
            </linearGradient>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
            <g>
                <path class="cls-1" d="M42.09,0H0v52.57h42.09c14.06,0,25.46-11.77,25.46-26.28S56.15,0,42.09,0Z"/>
                <polyline class="cls-2" points="49.27 12.15 34.91 26.51 48.95 40.55"/>
                <polyline class="cls-2" points="34.91 12.02 20.55 26.38 34.59 40.42"/>
            </g>
            </g>
        </svg>`;  

    $('.projects-mobile__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: '40px'
                }
            }
        ]
    });

    // Header

    $('#main-nav').on('click', function(e){
      e.preventDefault();
    if ( $(this).hasClass('active-menu') ) {
      $( this ).removeClass( 'active-menu' );
      $(".header__mobile").removeClass('open');
      $(".header").removeClass('open');
      $(".sections").removeClass('open');
    } else {
      $( this ).addClass( 'active-menu' );
      $(".header__mobile").addClass('open');
      $(".header").addClass('open');
      $(".sections").addClass('open');
    }
  });

});