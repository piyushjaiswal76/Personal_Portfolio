/*================== toogle icon navbar ==================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
};

/*================== scroll section active link ==================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*====================== sticky navbar ===============*/
    let header = document.querySelector('header');

    header.classList.toogle('sticky', window.scrollY > 100);

    /*==================remove toogle icon and navbar when click navbar link (scroll) ==================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*====================== scroll reveal ===============*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*====================== typed js ===============*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:  true
});


function Send(){
    // console.log("function call");
    var name = document.getElementById("Name").value;
    var subject = document.getElementById("Subject").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Number").value;
    var message = document.getElementById("Message").value;

    var body = "Name: " + name + "<br/> Subject:" + subject + "<br/> Contact Number:" + contact + "<br/> Email:" + email + "<br/>Meassge:" + message;

    console.log(body);
    
        Email.send({
            SecureToken : "c9cda8a6-0793-4c3f-b60b-2ef804b8f6ce",
            To : 'piyushjaiswal602@gmail.com',
            From : "piyushjaiswal602@gmail.com",
            Subject : subject,
            Body : body
        }).then(
          message => {
            if(message == 'OK'){

            swal("Successful", "Your Data Successfull Received", "success");
        }
        else{
            swal("Something Wrong", "Your Data is not Received", "error");
        }
    }
        );
    
}

