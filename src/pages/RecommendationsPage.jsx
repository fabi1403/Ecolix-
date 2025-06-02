import React from 'react';
import './RecommendationsPage.css';

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

function RecommendationsPage() {
  return (
    <div className="recommendations-page-container">
      <h2 className="recommendations-main-title">Recomendaciones</h2>
      <p className="recommendations-sub-title">Descubre cómo EcoLix+ puede ayudarte a mejorar tus cultivos y prácticas agrícolas.</p>
      
      <div className="recommendations-container">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-card">
            {/* Mostrar imagen/logo. Si la imagen no existe, se mostrará el fondo del estilo. */}
            <img src={rec.image} alt={rec.title} className="recommendation-image" onError={(e) => e.target.style.display='none'} /> 
            <h3 className="recommendation-title">
              {rec.title.split(' ').map((word, i) => (
                <span key={i} className={`emoji-animated delay-${(index * 2 + i) % 5}`}>{word} </span>
              ))}
            </h3>
            <p className="recommendation-text">{rec.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationsPage;