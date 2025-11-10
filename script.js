document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les éléments à animer
    const targets = document.querySelectorAll('.animate-scroll');

    // Vérifie si le navigateur supporte IntersectionObserver
    if ('IntersectionObserver' in window) {
        const options = {
            threshold: 0.15, // Déclenche quand 15% de l'élément est visible
            rootMargin: "0px 0px -10% 0px" // Marge de sécurité en bas
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Ajoute la classe qui lance la transition CSS
                    entry.target.classList.add('visible');
                    // Arrête d'observer cet élément une fois animé
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Commence à observer chaque cible
        targets.forEach(target => observer.observe(target));
    } else {
        // Fallback pour les vieux navigateurs : affiche tout immédiatement
        targets.forEach(target => target.classList.add('visible'));
    }
});