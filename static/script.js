Voici le code complet pour une landing page avec animations, scroll smooth et menu mobile en JavaScript vanilla :

## HTML (index.html)

html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page - Animations</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">Logo</a>
            <div class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#accueil" class="nav-link">Accueil</a></li>
                <li><a href="#services" class="nav-link">Services</a></li>
                <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="hero">
        <div class="hero-content">
            <h1 class="animate-fadeIn">Bienvenue sur notre site</h1>
            <p class="animate-fadeIn">Découvrez des solutions innovantes pour votre entreprise</p>
            <a href="#services" class="btn animate-fadeIn">En savoir plus</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title animate-slideUp">Nos Services</h2>
            <div class="services-grid">
                <div class="service-card animate-slideUp">
                    <div class="service-icon">🚀</div>
                    <h3>Développement Web</h3>
                    <p>Création de sites web modernes et responsives</p>
                </div>
                <div class="service-card animate-slideUp">
                    <div class="service-icon">🎨</div>
                    <h3>Design UI/UX</h3>
                    <p>Interfaces utilisateur intuitives et attractives</p>
                </div>
                <div class="service-card animate-slideUp">
                    <div class="service-icon">📱</div>
                    <h3>Applications Mobile</h3>
                    <p>Applications natives et hybrides performantes</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="section-title animate-slideUp">Notre Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item animate-scale">
                    <img src="https://via.placeholder.com/300x200" alt="Projet 1">
                    <div class="portfolio-overlay">
                        <h3>Projet 1</h3>
                        <p>Description du projet</p>
                    </div>
                </div>
                <div class="portfolio-item animate-scale">
                    <img src="https://via.placeholder.com/300x200" alt="Projet 2">
                    <div class="portfolio-overlay">
                        <h3>Projet 2</h3>
                        <p>Description du projet</p>
                    </div>
                </div>
                <div class="portfolio-item animate-scale">
                    <img src="https://via.placeholder.com/300x200" alt="Projet 3">
                    <div class="portfolio-overlay">
                        <h3>Projet 3</h3>
                        <p>Description du projet</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title animate-slideUp">Contactez-nous</h2>
            <form class="contact-form animate-fadeIn">
                <input type="text" placeholder="Votre nom" required>
                <input type="email" placeholder="Votre email" required>
                <textarea placeholder="Votre message" required></textarea>
                <button type="submit" class="btn">Envoyer</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Landing Page. Tous droits réservés.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>


## CSS (style.css)

css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: background 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #007bff;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover