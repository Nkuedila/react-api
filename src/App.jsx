import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get('https://127.0.0.1:8000/api/categories');
         const produitResponse = await axios.get('https://127.0.0.1:8000/api/produits');
 
        setCategories(categoryResponse.data);
        setProduits(produitResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div style={styles.container}>
      <hr style={styles.horizontalLine} />
      <h1 style={styles.title}>Les Catégories</h1>
      <hr style={styles.horizontalLine} />

      {loading ? <p style={styles.loading}>Chargement...</p> : (
        <div style={styles.grid}>
          {categories.map((item, index) => (
            item.image && (
              <div key={index} style={{ 
                ...styles.card, 
                borderRight: (index + 1) % 3 !== 0 ? '2px solid #ddd' : 'none' // Vertical Line
              }}>
                <img src={`/category/${item.image}`} alt={item.nom} style={styles.image} />
                <p style={styles.categoryName}>{item.nom}</p>
              </div>
            )
          ))}
        </div>
      )}

      <hr style={styles.horizontalLine} />
      <h1 style={styles.title}>Les Produits</h1>
      <hr style={styles.horizontalLine} />

      {loading ? <p style={styles.loading}>Chargement...</p> : (
        <div style={styles.grid}>
          {produits.map((item, index) => (
            item.image && (
              <div key={index} style={{ 
                ...styles.card, 
                borderRight: (index + 1) % 3 !== 0 ? '2px solid #ddd' : 'none' // Vertical Line
              }}>
                <img src={`/produits/${item.image}`} alt={item.nom} style={styles.image} />
                <div style={styles.cardContent}>
                  <p style={styles.productName}>{item.nom}</p>
                  <p style={styles.description}>{item.description}</p>
                  <p style={styles.price}>{(item.prix / 100).toFixed(2)} €</p>
                </div>
              </div>
            )
          ))}
        </div>
      )}
      <hr style={styles.horizontalLine} />
    </div>
  );
}

const styles = {
  container: {
    width: '380%',
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'Poppins, Arial, sans-serif',
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '15px',
  },
  horizontalLine: {
    width: '80%',
    margin: '20px auto',
    border: '1px solid #ddd',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    padding: '10px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  cardContent: {
    padding: '10px',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'contain',
    borderRadius: '8px',
    display: 'block',
    transition: 'opacity 0.3s ease',
  },
  categoryName: {
    marginTop: '12px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#007bff',
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#007bff',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginTop: '5px',
  },
  price: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#e63946',
  },
  loading: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#777',
  },
};


export default App
