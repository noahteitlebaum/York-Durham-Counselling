document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.querySelector(".slide-toggle");

  let open = false;

  toggle.addEventListener("click", function() {
    open = !open;
    document.body.classList.toggle("menu-open");
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

function fadeTo(href) {
  document.body.classList.remove('page-enter');
  document.body.classList.add('page-exit');

  setTimeout(function () {
    window.location.href = href;
  }, 400);
}

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('TXY_PQmxUy6C65tpx');

  const form = document.getElementById('bookingForm');

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
        form.reset();
        fadeTo(window.location.pathname);
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
      fadeTo(href)
    });
  }
});