const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

const navLink = document.querySelectorAll('.nav-link, .nav-contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''),
      angleStep = 360 / letters.length

homeText.textContent = ''

letters.forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.transform = `rotate(${i * angleStep}deg)`
    homeText.appendChild(span)
})


const typedHome = new Typed('#home-typed', {
    strings: ['Freelancer', 'Web Developer', 'SEO Specialist'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
})


const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const servicesCards = document.querySelectorAll('.services-card'),
      servicesButtons = document.querySelectorAll('.services-button')

servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services-card'),
      isOpen = currentCard.classList.contains('services-open')

      servicesCards.forEach(card => {
         card.classList.replace('services-open','services-close')
      })

      if(!isOpen){
         currentCard.classList.replace('services-close','services-open')
      }
   })
})


const tracks = document.querySelectorAll('.testimonials-content')

tracks.forEach(track => {

   const cards = [...track.children]

   for (const card of cards) {
      track.appendChild(card.cloneNode(true))
   }
})


const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {

   e.preventDefault()

   try {
      await emailjs.sendForm('service_lo06xr9','template_pbv7uky','#contact-form','5cTMGzRvh8esIICBv')
   
      contactMessage.textContent = 'Message sent successfully ✅'
      
      contactForm.reset()
   } catch (error) {
      contactMessage.textContent = 'Message not sent (service error) ❌'
   } finally {
      setTimeout(() => contactMessage.textContent = '', 5000)
   }
}
contactForm.addEventListener('submit', sendEmail)


const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')

   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id,
            top = section.offsetTop - 50,
            height = section.offsetHeight,
            link = document.querySelector('.nav-menu a[href*=' + id + ']')

            if(!link) return

            link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)
