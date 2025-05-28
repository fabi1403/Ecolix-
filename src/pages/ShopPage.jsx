import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Estilos en línea para simplificar, idealmente irían en un archivo CSS
const getResponsiveStyles = (isMobile) => ({
  container: {
    padding: isMobile ? '80px 15px 20px 15px' : '90px 20px 40px 20px', // Aumentado padding superior para navbar
    maxWidth: '800px',
    margin: '0 auto',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '15px' : '20px',
    marginTop: '30px',
    padding: isMobile ? '20px' : '30px',
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    fontSize: isMobile ? '0.9em' : '1em',
  },
  button: {
    padding: isMobile ? '12px 18px' : '15px 20px',
    backgroundColor: '#FFD700',
    color: '#333333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: isMobile ? '1em' : '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  paymentMethodsContainer: {
    marginTop: '40px',
    paddingTop: '25px',
    borderTop: '1px solid #444',
  },
  paymentLogosGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '15px' : '20px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  paymentLogoCard: {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#333333',
    borderRadius: '8px',
    width: isMobile ? '100px' : '130px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, border 0.2s ease', // Añadida transición para suavidad
  },
  paymentLogoImg: {
    height: isMobile ? '35px' : '45px',
    marginBottom: '8px',
  },
  paymentLogoName: {
    fontSize: isMobile ? '0.8em' : '0.9em',
    margin: 0,
    color: '#ccc',
  },
  h2: {
    textAlign: 'center',
    fontSize: isMobile ? '2em' : '2.5em',
    marginBottom: '10px',
  },
  h3: {
    textAlign: 'center',
    fontSize: isMobile ? '1.5em' : '1.8em',
    marginBottom: '15px',
    color: '#FFD700',
  },
  p: {
    textAlign: 'center',
    fontSize: isMobile ? '1em' : '1.1em',
    marginBottom: '25px',
  },
  productSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '15px' : '20px',
    padding: isMobile ? '20px' : '30px',
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    marginBottom: '30px',
  },
  productImage: {
    width: isMobile ? '120px' : '150px',
    height: 'auto',
    borderRadius: '8px',
  },
  quantitySelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  quantityInput: {
    width: '60px',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    fontSize: '1em',
  },
  totalPrice: {
    fontSize: isMobile ? '1.1em' : '1.2em',
    fontWeight: 'bold',
    color: '#FFD700',
  },
  productSelectionGrid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    width: '100%',
    marginBottom: '20px',
  },
  productCard: {
    backgroundColor: '#333333',
    padding: '15px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, border 0.2s ease',
  },
  productName: {
    fontSize: isMobile ? '0.9em' : '1em',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#FFFFFF',
  },
  productPrice: {
    fontSize: isMobile ? '0.8em' : '0.9em',
    color: '#FFD700',
  }
});

function ShopPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicStyles = getResponsiveStyles(isMobile);
  const location = useLocation();
  const products = [
    {
      id: 'lixiviado-verde',
      name: 'Lixiviado Verde',
      description: 'Lixiviado de alta calidad para nutrir tus plantas.',
      image: '/lixi.png',
      price: 4.99
    },
    {
      id: 'lixiviado-blanco',
      name: 'Lixiviado Blanco',
      description: 'Lixiviado concentrado para un crecimiento vigoroso.',
      image: '/lixi.png',
      price: 5.99
    },
    {
      id: 'lixiviado-morado',
      name: 'Lixiviado Morado',
      description: 'Lixiviado especial para floración y fructificación.',
      image: '/lixi.png',
      price: 6.99
    },
    {
      id: 'lixiviado-azul',
      name: 'Lixiviado Azul',
      description: 'Lixiviado para mejorar la resistencia de tus cultivos.',
      image: '/lixi.png',
      price: 7.99
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  useEffect(() => {
    if (location.state?.product === 'ecolix-plus') {
      console.log('Navegado a la tienda para EcoLix+');
    }
  }, [location]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handlePaymentMethodSelect = (methodName) => {
    setSelectedPaymentMethod(methodName);
    console.log('Método de pago seleccionado:', methodName);
  };

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del pedido:', formData, 'Producto seleccionado:', selectedProduct.name, 'Cantidad:', quantity);
    alert(`¡Pedido de ${selectedProduct.name} realizado con éxito! (Simulación)`);
    setFormData({
      fullName: '', address: '', city: '', postalCode: '',
      cardNumber: '', expiryDate: '', cvv: '',
    });
  };

  const totalPrice = quantity * selectedProduct.price;

  const paymentMethods = [
    { name: 'Credit Card', logo: '/payment-logos/credit-card.png', type: 'internal' },
    { name: 'Debit Card', logo: '/payment-logos/debit-card.png', type: 'internal' },
    { name: 'Google Pay', logo: '/payment-logos/google-pay.png', type: 'external', url: 'https://pay.google.com/intl/es_es/about/' },
    { name: 'Apple Pay', logo: '/payment-logos/apple-pay.png', type: 'external', url: 'https://www.apple.com/apple-pay/' },
    { name: 'PayPal', logo: '/payment-logos/paypal.png', type: 'external', url: 'https://www.paypal.com/signin' }, 
    { name: 'Bank Transfer', logo: '/payment-logos/bank-transfer.png', type: 'bankTransfer' },
  ];

  const getPaymentLogoCardStyle = (methodName) => ({
    ...dynamicStyles.paymentLogoCard,
    border: selectedPaymentMethod === methodName ? '2px solid #FFD700' : '2px solid transparent',
    transform: selectedPaymentMethod === methodName ? 'scale(1.05)' : 'scale(1)',
    cursor: 'pointer',
  });

  const renderPaymentFields = () => {
    switch (selectedPaymentMethod) {
      case 'Credit Card':
      case 'Debit Card':
        return (
          <>
            <p style={{textAlign: 'center', color: '#FFD700'}}>Estás pagando con {selectedPaymentMethod}.</p>
            <input type="text" name="cardNumber" placeholder="Número de Tarjeta (XXXX-XXXX-XXXX-XXXX)" value={formData.cardNumber} onChange={handleChange} required style={dynamicStyles.input} />
            <input type="text" name="expiryDate" placeholder="Fecha de Expiración (MM/AA)" value={formData.expiryDate} onChange={handleChange} required style={dynamicStyles.input} />
            <input type="text" name="cvv" placeholder="CVV (XXX)" value={formData.cvv} onChange={handleChange} required style={dynamicStyles.input} />
          </>
        );
      case 'Bank Transfer':
        return (
          <>
            <p style={{textAlign: 'center', color: '#FFD700'}}>Por favor, realiza la transferencia bancaria a los siguientes datos:</p>
            <div style={{backgroundColor: '#333333', padding: '20px', borderRadius: '8px', marginTop: '15px'}}>
              <p style={{margin: '5px 0', color: '#ccc'}}>Banco: Banco Ejemplo</p>
              <p style={{margin: '5px 0', color: '#ccc'}}>Número de Cuenta: 1234-5678-9012-3456</p>
              <p style={{margin: '5px 0', color: '#ccc'}}>Beneficiario: EcoLix+ S.A.</p>
              <p style={{margin: '5px 0', color: '#ccc'}}>Concepto: Pedido EcoLix+ #{Math.floor(Math.random() * 100000)}</p>
            </div>
            <p style={{textAlign: 'center', color: '#FFD700', marginTop: '15px'}}>Una vez realizada la transferencia, haz clic en "Realizar Pedido".</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={dynamicStyles.container}>
      <h2 style={dynamicStyles.h2}>Tienda EcoLix+</h2>
      
      <div style={dynamicStyles.productSection}>
        <h3 style={dynamicStyles.h3}>Selecciona tu Producto</h3>
        <div style={dynamicStyles.productSelectionGrid}>
          {products.map(product => (
            <div
              key={product.id}
              style={{
                ...dynamicStyles.productCard,
                border: selectedProduct.id === product.id ? '2px solid #FFD700' : '2px solid transparent',
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} style={dynamicStyles.productImage} />
              <p style={dynamicStyles.productName}>{product.name}</p>
              <p style={dynamicStyles.productPrice}>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <p style={dynamicStyles.p}>Producto Seleccionado: {selectedProduct.name}</p>
        <div style={dynamicStyles.quantitySelector}>
          <label htmlFor="quantity" style={{fontSize: '1em'}}>Cantidad:</label>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            value={quantity} 
            onChange={handleQuantityChange} 
            min="1" 
            style={dynamicStyles.quantityInput}
          />
        </div>
        <p style={dynamicStyles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <p style={dynamicStyles.p}>Completa tus datos para finalizar la compra.</p>

      <form onSubmit={handleSubmit} style={dynamicStyles.form}>
        <h3 style={dynamicStyles.h3}>Información de Envío</h3>
        <input type="text" name="fullName" placeholder="Nombre Completo" value={formData.fullName} onChange={handleChange} required style={dynamicStyles.input} />
        <input type="text" name="address" placeholder="Dirección de Envío" value={formData.address} onChange={handleChange} required style={dynamicStyles.input} />
        <input type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required style={dynamicStyles.input} />
        <input type="text" name="postalCode" placeholder="Código Postal" value={formData.postalCode} onChange={handleChange} required style={dynamicStyles.input} />
        
        <h3 style={dynamicStyles.h3}>Información de Pago (Simulación)</h3>
        {renderPaymentFields()}

        {selectedPaymentMethod && <p style={{textAlign: 'center', marginTop: '15px', color: '#FFD700'}}>Método seleccionado: {selectedPaymentMethod}</p>}
        
        <button type="submit" style={dynamicStyles.button}>Realizar Pedido</button>
      </form>
      
      <div style={dynamicStyles.paymentMethodsContainer}>
        <h3 style={dynamicStyles.h3}>Métodos de Pago Aceptados</h3>
        <div style={dynamicStyles.paymentLogosGrid}>
          {paymentMethods.map(method => (
            <div key={method.name} style={getPaymentLogoCardStyle(method.name)} onClick={() => {
              if (method.type === 'external') {
                window.open(method.url, '_blank');
              } else {
                handlePaymentMethodSelect(method.name);
              }
            }}>
              <img src={method.logo} alt={method.name} style={dynamicStyles.paymentLogoImg} />
              <p style={dynamicStyles.paymentLogoName}>{method.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
