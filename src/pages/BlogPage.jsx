import React, { useState } from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    id: 'user-post',
    title: '🚀 Tu Espacio',
    content: null, // Será manejado por el estado del usuario
  },
  {
    id: 'institucion',
    title: '🏫 Institución',
    content: (
      <>
        <h3 className="blog-article-title">Unidad Educativa General Eloy Alfaro</h3>
        <p className="blog-article-paragraph">
          La Unidad Educativa General Eloy Alfaro se encuentra en la provincia de Cotopaxi, cantón Salcedo, parroquia San Miguel, Ecuador. Es un centro educativo urbano que ofrece educación regular en jornada matutina, abarcando los niveles Inicial, Educación Básica y Bachillerato. <mcreference link="https://www.escuelasecuador.com/unidad-educativa-general-eloy-alfaro-cotopaxi-salcedo-05h00597" index="1">1</mcreference> <mcreference link="https://www.infoescuelas.com/ecuador/cotopaxi/unidad-educativa-general-eloy-alfaro-en-salcedo/" index="2">2</mcreference>
        </p>
        <h3 className="blog-article-title">Oferta Académica y Valores</h3>
        <p className="blog-article-paragraph">
          La institución se enfoca en una educación integral, fomentando valores, patriotismo, solidaridad y trabajo en equipo. Ofrece bachillerato técnico en Producción Agropecuaria y Electromecánica Automotriz, además de educación inicial, básica y bachillerato general unificado. <mcreference link="https://uegea.edu.ec/" index="0">0</mcreference>
        </p>
        <h3 className="blog-article-title">Innovación y Sostenibilidad</h3>
        <p className="blog-article-paragraph">
          Impulsan proyectos sostenibles y enseñan los Objetivos de Desarrollo Sostenible, con un enfoque tecnológico que incluye el uso de realidad aumentada y virtual. Cuentan con instalaciones modernas y recursos tecnológicos para un aprendizaje inmersivo. <mcreference link="https://uegea.edu.ec/" index="0">0</mcreference>
        </p>
      </>
    ),
  },
  {
    id: 'que-son-lixiviados',
    title: '💧 ¿Qué son los Lixiviados?',
    content: (
      <>
        <h3 className="blog-article-title">¿Qué son los Lixiviados y por qué son importantes en la Agricultura?</h3>
        <p className="blog-article-paragraph">
          Los lixiviados, en el contexto de la agricultura orgánica y el compostaje, son líquidos que se percolan a través de materia orgánica en descomposición. Este líquido recoge nutrientes solubles, minerales y microorganismos beneficiosos presentes en el material original. EcoLix+ es un ejemplo de un lixiviado de alta calidad, producido bajo condiciones controladas para maximizar su potencial benéfico.
        </p>
        <p className="blog-article-paragraph">
          Son una fuente rica y natural de alimento para las plantas, actuando como un fertilizante líquido orgánico. Su aplicación puede mejorar significativamente la salud del suelo y el vigor de las plantas.
        </p>
      </>
    ),
  },
  {
    id: 'beneficios-lixiviados',
    title: '🌿 Beneficios de los Lixiviados',
    content: (
      <>
        <h3 className="blog-article-title">Principales Beneficios de Usar Lixiviados como EcoLix+</h3>
        <ul className="blog-article-list">
          <li className="blog-article-list-item"><strong>Aporte Nutricional Completo:</strong> Contienen una amplia gama de macro y micronutrientes esenciales para el desarrollo vegetal.</li>
          <li className="blog-article-list-item"><strong>Mejora de la Estructura del Suelo:</strong> La materia orgánica y los microorganismos ayudan a agregar las partículas del suelo, mejorando la aireación y la retención de agua.</li>
          <li className="blog-article-list-item"><strong>Estimulación Biológica:</strong> Introducen microorganismos beneficiosos que pueden suprimir patógenos del suelo y facilitar la absorción de nutrientes.</li>
          <li className="blog-article-list-item"><strong>Crecimiento Vigoroso:</strong> Promueven un sistema radicular más fuerte y un desarrollo foliar exuberante.</li>
          <li className="blog-article-list-item"><strong>Sostenibilidad:</strong> Reducen la necesidad de fertilizantes sintéticos, apoyando una agricultura más ecológica.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'como-usar-lixiviados',
    title: '💡 Cómo Usar Lixiviados',
    content: (
      <>
        <h3 className="blog-article-title">Guía Práctica para la Aplicación de Lixiviados</h3>
        <p className="blog-article-paragraph">
          El uso de lixiviados como EcoLix+ es sencillo. Generalmente se diluyen en agua antes de su aplicación. La proporción de dilución puede variar según el tipo de planta y la concentración del lixiviado.
        </p>
        <p className="blog-article-paragraph">
          <strong>Aplicación Foliar:</strong> Pulverizar directamente sobre las hojas. Esto permite una rápida absorción de nutrientes.
        </p>
        <p className="blog-article-paragraph">
          <strong>Riego al Suelo:</strong> Aplicar directamente al suelo alrededor de la base de las plantas. Esto nutre las raíces y mejora la calidad del suelo a largo plazo.
        </p>
        <p className="blog-article-paragraph">
          Es recomendable aplicarlos temprano en la mañana o al atardecer para evitar la evaporación rápida y posibles quemaduras solares en las hojas.
        </p>
      </>
    ),
  },
];

function BlogPage() {
  const [activeTab, setActiveTab] = useState(blogPosts[0].id);
  const [userText, setUserText] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleTextChange = (event) => {
    setUserText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="blog-page-container">
      <h2 className="blog-main-title">Blog de EcoLix+</h2>
      <p className="blog-sub-title">Artículos, noticias y consejos sobre agricultura ecológica y nuestros productos.</p>

      <div className="blog-tabs-container">
        {blogPosts.map(post => (
          <button 
            key={post.id} 
            className={`blog-tab-button ${activeTab === post.id ? 'active' : ''}`}
            onClick={() => setActiveTab(post.id)}
          >
            {post.title.split(' ').map((word, i) => (
              <span key={i} className={`emoji-animated delay-${(blogPosts.indexOf(post) * 2 + i) % 5}`}>{word} </span>
            ))}
          </button>
        ))}
      </div>

      <div className="blog-tab-content">
        {blogPosts.map(post => {
          if (post.id === activeTab) {
            if (post.id === 'user-post') {
              return (
                <div key={post.id} className="blog-user-content-section">
                  <h3 className="blog-article-title">🎉 Crea tu Propia Entrada 🎉</h3>
                  <p className="blog-article-paragraph">Somos parte de la unidad educativa. Tenemos este proyecto o este trabajo. 💚</p>
                  <textarea 
                    className="blog-textarea"
                    placeholder="Comparte tus ideas, proyectos o experiencias con EcoLix+ aquí..."
                    value={userText}
                    onChange={handleTextChange}
                  />
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="blog-file-input"
                    onChange={handleImageChange}
                  />
                  {imagePreview && <img src={imagePreview} alt="Vista previa" className="blog-image-preview" />}
                  {/* Aquí podrías añadir un botón para 'guardar' o 'publicar' la entrada del usuario si tuvieras un backend */}
                </div>
              );
            }
            return (
              <>
                {post.id === 'institucion' && <img src="/img4.png" alt="Imagen de la institución" className="blog-image-article" />}
                {post.id === 'que-son-lixiviados' && <img src="https://www.aristegui.info/wp-content/uploads/2016/01/aislamiento-lixiviados1-600x349-2.jpg" alt="Imagen de lixiviados" className="blog-image-article" />}
                {post.id === 'beneficios-lixiviados' && <img src="https://www.lahuertadeivan.com/wp-content/uploads/2020/03/Gu%C3%ADa-completa-sobre-los-lixiviados.png" alt="Imagen de beneficios" className="blog-image-article" />}
                {post.id === 'como-usar-lixiviados' && <img src="https://th.bing.com/th/id/OIP.8Y7CL9BDzkb780C9bPQ-XAHaCZ?cb=iwp2&rs=1&pid=ImgDetMain" alt="Imagen de uso" className="blog-image-article" />}
                {post.content}
              </>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

// Add a new style for images within articles
// This will be added to BlogPage.css in the next step
/*
.blog-image-article {
  width: 100%;
  max-width: 200px;
  display: block;
  margin: 0 auto 20px auto;
  border-radius: 8px;
}
*/

export default BlogPage;