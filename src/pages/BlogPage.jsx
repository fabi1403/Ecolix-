import React, { useState } from 'react';

const styles = {
  pageContainer: {
    padding: '90px 20px 40px 20px',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
    minHeight: 'calc(100vh - 130px)',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: '2.5em',
    color: '#FFD700',
    marginBottom: '15px',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '1.2em',
    marginBottom: '30px',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    borderBottom: '2px solid #444',
  },
  tabButton: {
    padding: '12px 25px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ccc',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
  },
  activeTab: {
    color: '#FFD700',
    borderBottom: '3px solid #FFD700',
  },
  tabContent: {
    padding: '20px',
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    lineHeight: '1.7',
  },
  userContentSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  textarea: {
    width: '100%',
    minHeight: '150px',
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    fontSize: '1em',
    boxSizing: 'border-box',
  },
  fileInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
  imagePreview: {
    maxWidth: '100%',
    maxHeight: '300px',
    marginTop: '15px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  articleTitle: {
    fontSize: '1.8em',
    color: '#FFD700',
    marginBottom: '15px',
  },
  articleParagraph: {
    marginBottom: '15px',
    color: '#E0E0E0',
  },
  articleList: {
    listStylePosition: 'inside',
    paddingLeft: '20px',
    marginBottom: '15px',
  },
  articleListItem: {
    marginBottom: '8px',
    color: '#E0E0E0',
  }
};

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
        <h3 style={styles.articleTitle}>Unidad Educativa General Eloy Alfaro</h3>
        <p style={styles.articleParagraph}>
          La Unidad Educativa General Eloy Alfaro se encuentra en la provincia de Cotopaxi, cantón Salcedo, parroquia San Miguel, Ecuador. Es un centro educativo urbano que ofrece educación regular en jornada matutina, abarcando los niveles Inicial, Educación Básica y Bachillerato. <mcreference link="https://www.escuelasecuador.com/unidad-educativa-general-eloy-alfaro-cotopaxi-salcedo-05h00597" index="1">1</mcreference> <mcreference link="https://www.infoescuelas.com/ecuador/cotopaxi/unidad-educativa-general-eloy-alfaro-en-salcedo/" index="2">2</mcreference>
        </p>
        <h3 style={styles.articleTitle}>Oferta Académica y Valores</h3>
        <p style={styles.articleParagraph}>
          La institución se enfoca en una educación integral, fomentando valores, patriotismo, solidaridad y trabajo en equipo. Ofrece bachillerato técnico en Producción Agropecuaria y Electromecánica Automotriz, además de educación inicial, básica y bachillerato general unificado. <mcreference link="https://uegea.edu.ec/" index="0">0</mcreference>
        </p>
        <h3 style={styles.articleTitle}>Innovación y Sostenibilidad</h3>
        <p style={styles.articleParagraph}>
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
        <h3 style={styles.articleTitle}>¿Qué son los Lixiviados y por qué son importantes en la Agricultura?</h3>
        <p style={styles.articleParagraph}>
          Los lixiviados, en el contexto de la agricultura orgánica y el compostaje, son líquidos que se percolan a través de materia orgánica en descomposición. Este líquido recoge nutrientes solubles, minerales y microorganismos beneficiosos presentes en el material original. EcoLix+ es un ejemplo de un lixiviado de alta calidad, producido bajo condiciones controladas para maximizar su potencial benéfico.
        </p>
        <p style={styles.articleParagraph}>
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
        <h3 style={styles.articleTitle}>Principales Beneficios de Usar Lixiviados como EcoLix+</h3>
        <ul style={styles.articleList}>
          <li style={styles.articleListItem}><strong>Aporte Nutricional Completo:</strong> Contienen una amplia gama de macro y micronutrientes esenciales para el desarrollo vegetal.</li>
          <li style={styles.articleListItem}><strong>Mejora de la Estructura del Suelo:</strong> La materia orgánica y los microorganismos ayudan a agregar las partículas del suelo, mejorando la aireación y la retención de agua.</li>
          <li style={styles.articleListItem}><strong>Estimulación Biológica:</strong> Introducen microorganismos beneficiosos que pueden suprimir patógenos del suelo y facilitar la absorción de nutrientes.</li>
          <li style={styles.articleListItem}><strong>Crecimiento Vigoroso:</strong> Promueven un sistema radicular más fuerte y un desarrollo foliar exuberante.</li>
          <li style={styles.articleListItem}><strong>Sostenibilidad:</strong> Reducen la necesidad de fertilizantes sintéticos, apoyando una agricultura más ecológica.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'como-usar-lixiviados',
    title: '💡 Cómo Usar Lixiviados',
    content: (
      <>
        <h3 style={styles.articleTitle}>Guía Práctica para la Aplicación de Lixiviados</h3>
        <p style={styles.articleParagraph}>
          El uso de lixiviados como EcoLix+ es sencillo. Generalmente se diluyen en agua antes de su aplicación. La proporción de dilución puede variar según el tipo de planta y la concentración del lixiviado.
        </p>
        <p style={styles.articleParagraph}>
          <strong>Aplicación Foliar:</strong> Pulverizar directamente sobre las hojas. Esto permite una rápida absorción de nutrientes.
        </p>
        <p style={styles.articleParagraph}>
          <strong>Riego al Suelo:</strong> Aplicar directamente al suelo alrededor de la base de las plantas. Esto nutre las raíces y mejora la calidad del suelo a largo plazo.
        </p>
        <p style={styles.articleParagraph}>
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
    <div style={styles.pageContainer}>
      <h2 style={styles.mainTitle}>Blog de EcoLix+</h2>
      <p style={styles.subTitle}>Artículos, noticias y consejos sobre agricultura ecológica y nuestros productos.</p>

      <div style={styles.tabsContainer}>
        {blogPosts.map(post => (
          <button 
            key={post.id} 
            style={activeTab === post.id ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
            onClick={() => setActiveTab(post.id)}
          >
            {post.title}
          </button>
        ))}
      </div>

      <div style={styles.tabContent}>
        {blogPosts.map(post => {
          if (post.id === activeTab) {
            if (post.id === 'user-post') {
              return (
                <div key={post.id} style={styles.userContentSection}>
                  <h3 style={styles.articleTitle}>🎉 Crea tu Propia Entrada 🎉</h3>
                  <p style={styles.articleParagraph}>Somos parte de la unidad educativa. Tenemos este proyecto o este trabajo. 💚</p>
                  <textarea 
                    style={styles.textarea}
                    placeholder="Comparte tus ideas, proyectos o experiencias con EcoLix+ aquí..."
                    value={userText}
                    onChange={handleTextChange}
                  />
                  <input 
                    type="file" 
                    accept="image/*" 
                    style={styles.fileInput}
                    onChange={handleImageChange}
                  />
                  {imagePreview && <img src={imagePreview} alt="Vista previa" style={styles.imagePreview} />}
                  {/* Aquí podrías añadir un botón para 'guardar' o 'publicar' la entrada del usuario si tuvieras un backend */}
                </div>
              );
            }
            return (
              <>
                {post.id === 'institucion' && <img src="/img4.png" alt="Imagen de la institución" style={{ width: '100%', maxWidth: '200px', display: 'block', margin: '0 auto 20px auto', borderRadius: '8px' }} />}
                {post.id === 'que-son-lixiviados' && <img src="https://www.aristegui.info/wp-content/uploads/2016/01/aislamiento-lixiviados1-600x349-2.jpg" alt="Imagen de lixiviados" style={{ width: '100%', maxWidth: '200px', display: 'block', margin: '0 auto 20px auto', borderRadius: '8px' }} />}
                {post.id === 'beneficios-lixiviados' && <img src="https://www.lahuertadeivan.com/wp-content/uploads/2020/03/Gu%C3%ADa-completa-sobre-los-lixiviados.png" alt="Imagen de beneficios" style={{ width: '100%', maxWidth: '200px', display: 'block', margin: '0 auto 20px auto', borderRadius: '8px' }} />}
                {post.id === 'como-usar-lixiviados' && <img src="https://th.bing.com/th/id/OIP.8Y7CL9BDzkb780C9bPQ-XAHaCZ?cb=iwp2&rs=1&pid=ImgDetMain" alt="Imagen de uso" style={{ width: '100%', maxWidth: '200px', display: 'block', margin: '0 auto 20px auto', borderRadius: '8px' }} />}
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

export default BlogPage;