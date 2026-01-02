document.addEventListener("DOMContentLoaded", function() {
  let width = document.documentElement.clientWidth;

  if (width <= 900) {
    const toggle = document.querySelector(".slide-toggle");
    const menu = document.querySelector(".menu-slide");

    let open = false;

    toggle.addEventListener("click", function () {
        if (open) {
          document.body.classList.remove("open");
          menu.classList.remove("open");
          open = false;
        }
        else {
          document.body.classList.add("open");
          menu.classList.add("open");
          open = true;
        }
    });
  }
  else {
    const nav = document.querySelector(".menu");
    nav.classList.add("nav-visible");

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function() {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        nav.classList.remove("nav-hidden");
        nav.classList.add("nav-visible");
      } else if (currentY > lastScrollY + 2) {
        nav.classList.add("nav-hidden");
        nav.classList.remove("nav-visible");
      } else if (currentY < lastScrollY - 2) {
        nav.classList.remove("nav-hidden");
        nav.classList.add("nav-visible");
      }

      lastScrollY = currentY;
    });
  }

  const media = window.matchMedia("(max-width: 900px)");

  media.addEventListener("change", function () {
    location.reload();
  });  
});

document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByClassName("bio-toggle");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      const wrapper = button.previousElementSibling;
      wrapper.classList.toggle("expanded");

      if (wrapper.classList.contains("expanded")) {
        button.textContent = "Read Less";
      } else {
        button.textContent = "Read More";
      }
    });
  }
});

function fadeTo(href, wait) {
  if (wait) {
    setTimeout(function () { 
      fadeTo(href, false); 
    }, 3000);

    return;
  }

  document.body.classList.remove('page-enter');
  document.body.classList.add('page-exit');

  setTimeout(function () {
    window.location.href = href;
  }, 400);
}

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('TXY_PQmxUy6C65tpx');

  const form = document.getElementById('bookingForm');
  const thankYouMessage = document.querySelector('.thank-you-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const bookingInfo = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    emailjs
      .send('service_jlq9x4n', 'template_469gogd', bookingInfo)
      .then(function () {
        console.log('Message sent successfully!');
        thankYouMessage.classList.add("appear");
        fadeTo(window.location.pathname, true);
      })
      .catch(function (err) {
        console.log('EmailJS error:', err);
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('page-enter');

  let links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"])');

  for (let link of links) {
    link.addEventListener('click', function (e) {
      let href = link.getAttribute('href');

      e.preventDefault();
      fadeTo(href, false);
    });
  }
});