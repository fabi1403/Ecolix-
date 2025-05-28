import React from 'react';

const recommendations = [
  {
    title: "🌱 Mejora la Calidad del Suelo",
    text: "EcoLix+ enriquece el suelo con materia orgánica y microorganismos beneficiosos, mejorando su estructura y capacidad de retención de agua y nutrientes.",
    image: "/path/to/suelo-icon.svg" // Reemplazar con ruta real
  },
  {
    title: "🌳 Estimula el Crecimiento de las Plantas",
    text: "Sus componentes naturales promueven un desarrollo radicular vigoroso y un crecimiento foliar saludable, resultando en plantas más fuertes y productivas.",
    image: "/path/to/planta-creciendo-icon.svg" // Reemplazar con ruta real
  },
  {
    title: "🌍 Agricultura Sostenible",
    text: "Al ser un producto orgánico, EcoLix+ reduce la dependencia de fertilizantes químicos, contribuyendo a prácticas agrícolas más sostenibles y amigables con el medio ambiente.",
    image: "/path/to/mundo-sostenible-icon.svg" // Reemplazar con ruta real
  },
  {
    title: "🛡️ Aumenta la Resistencia a Enfermedades",
    text: "Fortalece las defensas naturales de las plantas, haciéndolas más resistentes a enfermedades y al estrés causado por condiciones ambientales adversas.",
    image: "/path/to/escudo-planta-icon.svg" // Reemplazar con ruta real
  },
  {
    title: "🏡 Ideal para Huertos Urbanos",
    text: "Su fácil aplicación y beneficios lo hacen perfecto para huertos en casa, permitiendo cultivar alimentos saludables incluso en espacios reducidos.",
    image: "/path/to/huerto-urbano-icon.svg" // Reemplazar con ruta real
  }
];

const styles = {
  pageContainer: {
    padding: '90px 20px 40px 20px', // Ajustado para navbar fija
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
    minHeight: 'calc(100vh - 130px)', // 90px padding top + 40px padding bottom
  },
  mainTitle: {
    fontSize: '2.5em',
    color: '#FFD700',
    marginBottom: '15px',
  },
  subTitle: {
    fontSize: '1.2em',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
  },
  recommendationsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '30px',
    maxWidth: '1200px',
    margin: '30px auto 0 auto',
  },
  recommendationCard: {
    backgroundColor: '#2a2a2a',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centrar contenido de la tarjeta
  },
  recommendationImage: {
    width: '80px', // Tamaño del logo/imagen
    height: '80px',
    objectFit: 'contain',
    marginBottom: '15px',
    backgroundColor: '#333', // Fondo para placeholder si la imagen no carga o es transparente
    borderRadius: '50%', // Hacerlo circular
    padding: '5px', // Espacio si la imagen es más pequeña que el círculo
  },
  recommendationTitle: {
    fontSize: '1.4em',
    color: '#FFD700',
    marginBottom: '10px',
  },
  recommendationText: {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#E0E0E0',
  }
};

function RecommendationsPage() {
  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.mainTitle}>Recomendaciones</h2>
      <p>Descubre cómo EcoLix+ puede ayudarte a mejorar tus cultivos y prácticas agrícolas.</p>
      
      <div style={styles.recommendationsContainer}>
        {recommendations.map((rec, index) => (
          <div key={index} style={styles.recommendationCard}>
            {/* Mostrar imagen/logo. Si la imagen no existe, se mostrará el fondo del estilo. */}
            <img src={rec.image} alt={rec.title} style={styles.recommendationImage} onError={(e) => e.target.style.display='none'} /> 
            <h3 style={{...styles.recommendationTitle, textAlign: 'center'}}>{rec.title}</h3>
            <p style={{...styles.recommendationText, textAlign: 'center'}}>{rec.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationsPage;