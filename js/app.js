
    document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

      // Obtén los valores del formulario
      const email = document.getElementById('mail').value;
      const subject = 'Correo de ' + document.getElementById('nombre').value;
      const message = document.getElementById('mensaje').value;

      // Codifica los valores para que sean válidos en una URL
      const encodedSubject = encodeURIComponent(subject);
      const encodedMessage = encodeURIComponent(message);
      
      // Crea el enlace mailto
      const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedMessage}`;

      // Abre el gestor de correo electrónico que por algún motivo no funciona bien en thundermail
      window.location.href = mailtoLink;
    });
  