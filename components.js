// --- components.js ---

class SiniyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="wrap footer-grid">
            
            <div class="footer-col">
                <a href="https://www.siniy.pro">
                <img src="logovioletasiniy.svg" alt="SINIY" class="footer-logo"> 
                </a>
                <p>Expertos en Publicidad Impresa, Web y Marketing. Llevamos tu marca al futuro desde Manizales para el mundo.</p>
                
                <div class="social-links">
                <a href="https://www.instagram.com/siniysd/" target="_blank" class="social-btn" title="Instagram">IG</a>
                <a href="https://www.facebook.com/siniysd" target="_blank" class="social-btn" title="Facebook">FB</a>
                <a href="https://www.tiktok.com/@siniysd" target="_blank" class="social-btn" title="TikTok">TK</a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Legal</h4>
                <ul class="footer-links">
                <li><a href="https://siniy.pro/tratamiento-datos">Tratamiento de Datos</a></li>
                <li><a href="https://siniy.pro/politicas-generales">Políticas Generales</a></li>
                <li><a href="#contacto" onclick="openModal()">Contacto</a></li>
                </ul>
            </div>

            <div class="footer-col payment-zone">
                <h4>Métodos de Pago</h4>
                <p style="margin-bottom: 15px;">Pagos 100% Seguros</p>
                
                <div style="margin-bottom: 15px;">
                    <script src="https://bold.co/library/ui-kit.js?type=slider"></script>
                </div>

                <img src="https://epayco.com/wp-content/uploads/2023/01/pagos_procesados_por_epayco_260px_.png" alt="Pagos con ePayco" style="width: 100%; max-width: 260px;">
            </div>

            </div>

            <div class="wrap copyright">
            © 2026 SINIY SOLUCIONES DIGITALES · José David Alzate Ayala · Todos los derechos reservados.
            </div>
        </footer>
        `;
    }
}

// Definimos la nueva etiqueta HTML <siniy-footer>
customElements.define('siniy-footer', SiniyFooter);
