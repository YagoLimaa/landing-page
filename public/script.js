document.addEventListener('DOMContentLoaded', () => {

    // Rolagem suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manipulação do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                displayNotification(result.message, 'success');
                contactForm.reset();
            } else {
                displayNotification(result.message, 'error');
            }
        } catch (error) {
            displayNotification('Um erro de rede ocorreu. Tente novamente.', 'error');
        }
    });

    function displayNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});
