// --- components.js (HEADER + FOOTER MAESTROS) ---

class SiniyHeader extends HTMLElement {
    connectedCallback() {
        // Detectamos la ruta actual quitando el dominio
        const path = window.location.pathname;
        
        // Lógica de detección mejorada
        const isHome = path === "/" || path === "/index" || path.endsWith("/index.html");
        const isServicios = path.includes("servicios");
        const isPortafolio = path.includes("portafolio");
        const isPagos = path.includes("pagos");

        this.innerHTML = `
        <header style="position: sticky; top:0; z-index: 100; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e5e7eb; padding: 16px 0;">
            <div class="wrap" style="display:flex; justify-content:space-between; align-items:center; max-width:1150px; margin:0 auto; padding:0 24px;">
                
                <div class="brand">
                    <a href="/">
                        <img src="logovioletasiniy.svg" alt="SINIY" style="max-height: 75px; width: auto;">
                    </a> 
                </div>

                <div>
                    <nav id="nav-menu" style="display:flex; gap:30px; align-items:center;">
                        
                        <a href="/" style="font-weight: 500; font-size: 0.95rem; text-decoration: none; transition: 0.3s; color: ${isHome ? '#5e17eb' : '#6b7280'};">
                            Inicio
                        </a>

                        <a href="/servicios" style="font-weight: 500; font-size: 0.95rem; text-decoration: none; transition: 0.3s; color: ${isServicios ? '#5e17eb' : '#6b7280'};">
                            Servicios
                        </a>

                        <a href="/portafolio" style="font-weight: 500; font-size: 0.95rem; text-decoration: none; transition: 0.3s; color: ${isPortafolio ? '#5e17eb' : '#6b7280'};">
                            Portafolio
                        </a>

                        <a href="/pagos" class="btn-pagar" style="
                            padding: 8px 24px; 
                            border-radius: 50px; 
                            font-weight: 600; 
                            font-size: 0.9rem; 
                            text-decoration: none; 
                            transition: all 0.3s ease;
                            background-color: ${isPagos ? '#450eb5' : '#5e17eb'}; 
                            color: white; 
                            box-shadow: ${isPagos ? 'inset 0 2px 5px rgba(0,0,0,0.2)' : '0 4px 14px rgba(94, 23, 235, 0.3)'};
                        ">
                            ${isPagos ? 'Zona de Pagos' : 'Pagar Aquí'}
                        </a>

                    </nav>
                    
                    <div class="hamburger" onclick="document.getElementById('nav-menu').classList.toggle('show')" style="display:none; font-size:24px; cursor:pointer; color:#1f2937;">☰</div>
                </div>
            </div>
            
            <style>
                @media (max-width: 850px) {
                    nav { display: none !important; position: absolute; top: 90px; left: 0; right: 0; background: white; flex-direction: column; padding: 20px; border-bottom: 1px solid #e5e7eb; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
                    nav.show { display: flex !important; }
                    .hamburger { display: block !important; }
                }
            </style>
        </header>
        `;
    }
}

class SiniyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer style="margin-top: 150px; background: #f9fafb; padding: 80px 0 30px; border-top: 1px solid #e5e7eb; color: #1f2937; font-family: 'Inter', sans-serif;">
            
            <div class="wrap footer-grid" style="margin-bottom: 100px;">
            
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
                    <li><a href="https://siniy.pro/contacto">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer-col payment-zone">
                    <h4>Métodos de Pago</h4>
                    <p style="margin-bottom: 15px;">Pagos 100% Seguros</p>
                    
                    

                    <img src="epayco_pago_seguro.jpg" alt="Pagos con ePayco" style="width: 100%; max-width: 260px;">
                </div>

            </div>

            <div class="wrap copyright" style="border-top: 1px solid #e5e7eb; padding-top: 50px; text-align: center; font-size: 0.85rem; color: #6b7280;">
                © 2026 SINIY SOLUCIONES DIGITALES · José David Alzate Ayala · Todos los derechos reservados.
            </div>
        </footer>
        `;
    }
}

// Definimos los elementos personalizados
customElements.define('siniy-header', SiniyHeader);
customElements.define('siniy-footer', SiniyFooter);
