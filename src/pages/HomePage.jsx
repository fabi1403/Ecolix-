import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './HomePage.css';

// Iconos SVG como componentes de React para los beneficios (ejemplos simples)
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/><path d="M17 6c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z"/></svg>
);
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"/></svg>
);
const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M20.5 8H19V6c0-1.103-.897-2-2-2h-5c-1.103 0-2 .897-2 2v2H8.5C7.122 8 6 9.121 6 10.5V17h1.5c.827 0 1.5.673 1.5 1.5S8.327 20 7.5 20H4c-.552 0-1-.449-1-1v-8.5C3 8.364 4.364 7 6.5 7H10V6c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v1h2.5c1.378 0 2.5 1.121 2.5 2.5V17h-1.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5H21c.552 0 1-.449 1-1v-6.5C22 9.121 21.378 8 20.5 8zM7.5 18C7.776 18 8 17.776 8 17.5S7.776 17 7.5 17H6v1h1.5zm10 0c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H16v1h1.5z"/></svg>
);
const PiggyBankIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M15.414 10.586L12 14l-3.414-3.414a2 2 0 112.828-2.828L12 11.172l.586-.586a2 2 0 112.828 2.828zM10 7a1 1 0 100-2 1 1 0 000 2z"/></svg>
);

function HomePage() {
  const products = [
    {
      name: '🌱Ecolixi-NBiofertilizante',
      description: 'Biofertilizante para crecimiento de hojas y tallos. Ayuda a plantas con hojas amarillas o poco desarrollo.',
      image: '/lixi.png',
      ingredients: 'Cáscara de papa (nitrógeno) 🧴'
    },
    {
      name: '🌸Ecolixi-P',
      description: 'Estimula floración y producción de frutos. Ideal para plantas con hojas moradas o desarrollo lento.',
      image: '/lixi.png',
      ingredients: 'Fósforo natural 🧴'
    },
    {
      name: '🌻Ecolixi-K',
      description: 'Mejora resistencia, floración y defensa. Fortalece plantas con bordes amarillos o secos.',
      image: '/lixi.png',
      ingredients: 'Cáscara de plátano (potasio) 🧴'
    },
    {
      name: '🌿Ecolixi-Ca',
      description: 'Fortalece tallos, raíces y hojas. Previene deformaciones y necrosis.',
      image: '/lixi.png',
      ingredients: 'Cáscara de huevo (calcio) 🧴'
    },
    {
      name: '🌎Ecolixi-Balance',
      description: 'Fórmula integral para plantas sanas. Aporta nutrientes completos para todas las etapas.',
      image: '/lixi.png',
      ingredients: 'Mezcla de cáscaras 🧴'
    }
  ];

  const benefits = [
    { 
      icon: <LeafIcon />,
      title: '100% Ecológico',
      description: 'Producto natural que mejora la calidad del suelo sin químicos dañinos.'
    },
    {
      icon: <ChartIcon />,
      title: 'Mayor Rendimiento',
      description: 'Aumenta la producción de sus cultivos de manera sostenible.'
    },
    {
      icon: <TruckIcon />,
      title: 'Entrega a Domicilio',
      description: 'Servicio de entrega en las principales ciudades de Ecuador.'
    },
    {
      icon: <PiggyBankIcon />,
      title: 'Ahorro Garantizado',
      description: 'Reduce sus costos de producción mientras cuida el medio ambiente.'
    }
  ];

  return (
    <>
      <div className="homepage-container hero-section">
        <div className="homepage-content">
          <div className="text-section">
            <h1>EcoLix+</h1>
            <h2>Nutrimos la tierra, reducimos tus costos</h2>
            <p>
              EcolixiPlus es una línea de biofertilizantes naturales elaborados a partir de lixiviados de cáscaras de plátano, papa y huevo. Nuestro objetivo es crear una agricultura más sostenible, reducir residuos y cuidar la salud de tus plantas con soluciones innovadoras, accesibles y amigables con el medio ambiente.
            </p>
            {/* El botón se movió a la sección de producto */}
          </div>
          <div className="image-section">
            <img src="/ecolix-logo.png" alt="EcoLix+ Logo" className="main-logo"/>
            <p className="slogan">De la tierra para la tierra</p>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2 className="section-title">Beneficios de EcoLix+</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="product-section">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image"/>
              <p className="product-subtitle">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <Link to="/shop" className="cta-button product-cta-button">
                Comprar Ahora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
