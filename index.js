


// Appointment form:

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxF9zFO6Ecp_LJbyFvWBhFZ08LovN91fyP2MSocTFm3sKp8cl_O7tlo8IKQkr9Qlj1m7w/exec'
//             const form = document.forms[0]
//             console.log(form);
          
//             form.addEventListener('submit', e => {
//               e.preventDefault()
//               fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//                 .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//                 .catch(error => console.error('Error!', error.message))
//             })


            $(function () {
                $(window).on('scroll', function () {
                    if ( $(window).scrollTop() > 10 ) {
                        $('.nvbr').addClass('active');
                    } else {
                        $('.nvbr').removeClass('active');
                    }
                });
            });
            
            (function(){
                $('#msbo').on('click', function(){
                  $('body').toggleClass('msb-x');
                });
              }());
            
              $(window).scroll(function(){
                $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
            });
            
            const navSlide = () => {
                const burger = document.querySelector('.burger');
                const nav = document.querySelector('.nav-links');
                const navLinks = document.querySelectorAll('.nav-links li');
            
                burger.addEventListener('click', () => {
                    
                    nav.classList.toggle('nav-active');
                    
                    //animate links
            
                    navLinks.forEach((link,index) => {
                        if(link.style.animation)
                        {
                            link.style.animation = '';
                        }
                        else{
                            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.6}s`;
                        }
                    });
            
                    //burger animation
                    burger.classList.toggle('toggle');
            
                });
            }
            
            
            console.log("xyz")
            
            navSlide();