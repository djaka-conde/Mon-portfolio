document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile Responsive
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // 2. Traitement du Formulaire de Contact
    const contactForm = document.getElementById('contact-form');
    const feedbackBox = document.getElementById('form-feedback');

    if (contactForm && feedbackBox) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Bloque la retransmission de page standard

            let isValid = true;

            // Vider les messages d'erreur sous les inputs
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

            // Récupération des inputs
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            // Validation du Nom
            if (!fullname || !fullname.value.trim()) {
                document.getElementById('fullname-error').textContent = 'Veuillez saisir votre nom.';
                isValid = false;
            }

            // Validation de l'Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !email.value.trim()) {
                document.getElementById('email-error').textContent = 'L\'adresse e-mail est requise.';
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                document.getElementById('email-error').textContent = 'Format e-mail invalide.';
                isValid = false;
            }

            // Validation du Sujet
            if (!subject || !subject.value.trim()) {
                document.getElementById('subject-error').textContent = 'Veuillez indiquer un sujet.';
                isValid = false;
            }

            // Validation du Message
            if (!message || !message.value.trim()) {
                document.getElementById('message-error').textContent = 'Le message ne peut pas être vide.';
                isValid = false;
            }

            // Traitement de l'affichage du message de confirmation
            if (isValid) {
                feedbackBox.className = 'feedback-message feedback-success';
                feedbackBox.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important;';
                feedbackBox.textContent = 'Votre message a été envoyé avec succès ! Merci de m\'avoir contacté.';
                
                // Réinitialise les champs du formulaire
                contactForm.reset();
            } else {
                feedbackBox.className = 'feedback-message';
                feedbackBox.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; background: #fef2f2; color: #dc2626; border: 1px solid #fca5a5;';
                feedbackBox.textContent = 'Veuillez corriger les erreurs dans le formulaire ci-dessous.';
            }
        });
    }

    // 3. Bouton Flottant (Affichage constant sur les pages secondaires comme contact.html)
    const floatingHomeBtn = document.getElementById('floatingHomeBtn');
    if (floatingHomeBtn) {
        if (floatingHomeBtn.getAttribute('href') !== '#top') {
            // Sur la page contact, le bouton d'accueil reste toujours visible
            floatingHomeBtn.classList.add('visible');
        } else {
            // Sur la page index, apparition au défilement
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    floatingHomeBtn.classList.add('visible');
                } else {
                    floatingHomeBtn.classList.remove('visible');
                }
            });

            floatingHomeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
});