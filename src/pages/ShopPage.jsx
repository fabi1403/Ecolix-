import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ShopPage.css'; // Importar el archivo CSS

function ShopPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();
  const products = [
    {
      id: 'ecolixi-nbiofertilizante',
      name: '🌱Ecolixi-NBiofertilizante',
      description: 'Biofertilizante para crecimiento de hojas y tallos. Ayuda a plantas con hojas amarillas o poco desarrollo.',
      image: '/lixi.png',
      price: 4.99 // Precio de ejemplo, ajustar si es necesario
    },
    {
      id: 'ecolixi-p',
      name: '🌸Ecolixi-P',
      description: 'Estimula floración y producción de frutos. Ideal para plantas con hojas moradas o desarrollo lento.',
      image: '/lixi.png',
      price: 5.99 // Precio de ejemplo, ajustar si es necesario
    },
    {
      id: 'ecolixi-k',
      name: '🌻Ecolixi-K',
      description: 'Mejora resistencia, floración y defensa. Fortalece plantas con bordes amarillos o secos.',
      image: '/lixi.png',
      price: 6.99 // Precio de ejemplo, ajustar si es necesario
    },
    {
      id: 'ecolixi-ca',
      name: '🌿Ecolixi-Ca',
      description: 'Fortalece tallos, raíces y hojas. Previene deformaciones y necrosis.',
      image: '/lixi.png',
      price: 7.99 // Precio de ejemplo, ajustar si es necesario
    },
    {
      id: 'ecolixi-balance',
      name: '🌎Ecolixi-Balance',
      description: 'Fórmula integral para plantas sanas. Aporta nutrientes completos para todas las etapas.',
      image: '/lixi.png',
      price: 8.99 // Precio de ejemplo, ajustar si es necesario
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedProductsList, setSelectedProductsList] = useState([]);
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
    if (!selectedProduct) {
      alert('Por favor, selecciona un producto antes de realizar el pedido.');
      return;
    }
    console.log('Datos del pedido:', formData, 'Producto seleccionado:', selectedProduct.name, 'Cantidad:', quantity);
    alert(`¡Pedido de ${selectedProduct.name} realizado con éxito! (Simulación)`);
    setFormData({
      fullName: '', address: '', city: '', postalCode: '',
      cardNumber: '', expiryDate: '', cvv: '',
    });
  };

  const totalPrice = selectedProductsList.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  const handleDecreaseQuantity = (id) => {
    setSelectedProductsList(prevList => {
      const existingProductIndex = prevList.findIndex(item => item.id === id);
      if (existingProductIndex > -1) {
        const newList = [...prevList];
        if (newList[existingProductIndex].quantity > 1) {
          newList[existingProductIndex] = { ...newList[existingProductIndex], quantity: newList[existingProductIndex].quantity - 1 };
        } else {
          // If quantity is 1, remove the product from the list
          return newList.filter(item => item.id !== id);
        }
        return newList;
      }
      return prevList;
    });
  };

  const handleIncreaseQuantity = (id) => {
    setSelectedProductsList(prevList => {
      const existingProductIndex = prevList.findIndex(item => item.id === id);
      if (existingProductIndex > -1) {
        const newList = [...prevList];
        newList[existingProductIndex] = { ...newList[existingProductIndex], quantity: newList[existingProductIndex].quantity + 1 };
        return newList;
      }
      return prevList;
    });
  };

  const handleRemoveProduct = (id) => {
    setSelectedProductsList(prevList => prevList.filter(item => item.id !== id));
  };

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
    <div className="shop-page-container">
      <h2 className="shop-h2">Tienda EcoLix+</h2>
      
      <div className="product-section">
        <h3 className="shop-h3">Selecciona tu Producto</h3>
        <div className="product-selection-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card ${selectedProduct && selectedProduct.id === product.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedProductsList(prevList => {
                  const existingProductIndex = prevList.findIndex(item => item.id === product.id);
                  if (existingProductIndex > -1) {
                    const newList = [...prevList];
                    newList[existingProductIndex] = { ...newList[existingProductIndex], quantity: newList[existingProductIndex].quantity + 1 };
                    return newList;
                  } else {
                    return [...prevList, { ...product, quantity: 1 }];
                  }
                });
              }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">
                {product.name.split(' ').map((word, i) => (
                  <span key={i} className={`emoji-animated delay-${(index * 2 + i) % 5}`}>{word} </span>
                ))}
              </p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>


      </div>

      {selectedProductsList.length > 0 && (
        <div className="product-section">
          <h3 className="shop-h3">Productos Seleccionados</h3>
          <ul className="selected-products-list">
            {selectedProductsList.map(item => (
              <li key={item.id} className="selected-product-item">
                <span className="selected-product-info">{item.name} (x{item.quantity})</span>
                <div className="selected-product-actions">
                  <button onClick={() => handleDecreaseQuantity(item.id)} className="action-button">-</button>
                  <button onClick={() => handleIncreaseQuantity(item.id)} className="action-button">+</button>
                  <button onClick={() => handleRemoveProduct(item.id)} className="action-button">x</button>
                  <span className="selected-product-details">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total de productos seleccionados: ${totalPrice.toFixed(2)}</p>
          <button type="button" className="shop-button" onClick={() => alert('Procediendo a la compra con los productos seleccionados.')}>Proceder a la Compra</button>
        </div>
      )}

      <p className="shop-p">Completa tus datos para finalizar la compra.</p>

      <form onSubmit={handleSubmit} className="shop-form">
        <h3 className="shop-h3">Información de Envío</h3>
        <input type="text" name="fullName" placeholder="Nombre Completo" value={formData.fullName} onChange={handleChange} required className="shop-input" />
        <input type="text" name="address" placeholder="Dirección de Envío" value={formData.address} onChange={handleChange} required className="shop-input" />
        <input type="text" name="city" placeholder="Ciudad" value={formData.city} onChange={handleChange} required className="shop-input" />
        <input type="text" name="postalCode" placeholder="Código Postal" value={formData.postalCode} onChange={handleChange} required className="shop-input" />
        
        <h3 className="shop-h3">Información de Pago (Simulación)</h3>
        {renderPaymentFields()}

        {selectedPaymentMethod && <p className="shop-p">Método seleccionado: {selectedPaymentMethod}</p>}
        
        <button type="submit" className="shop-button">Realizar Pedido</button>
      </form>
      
      <div className="payment-methods-container">
        <h3 className="shop-h3">Métodos de Pago Aceptados</h3>
        <div className="payment-logos-grid">
          {paymentMethods.map((method, index) => (
            <div key={method.name} className="payment-logo-card" onClick={() => {
              if (method.type === 'external') {
                window.open(method.url, '_blank');
              } else {
                handlePaymentMethodSelect(method.name);
              }
            }}>
              <img src={method.logo} alt={method.name} className="payment-logo-img" />
              <p className="payment-logo-name">
                {method.name.split(' ').map((word, i) => (
                  <span key={i} className={`emoji-animated delay-${(index * 2 + i) % 5}`}>{word} </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
