import React from "react";

function ProduitDetails({ produit, onBack }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">{produit.nom}</h2>
      <div className="row mt-4">
        <div className="col-md-6 text-center">
          <img 
            src={`http://127.0.0.1:8000/uploads/Produits/${produit.image}`} 
            alt={produit.nom} 
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h4>Description</h4>
          <p>{produit.description}</p>
          <h4 className="mt-3">Prix</h4>
          <p className="fw-bold text-danger">{(produit.prix / 100).toFixed(2)} €</p>
          <button className="btn btn-secondary" onClick={onBack}>Retour aux produits</button>
        </div>
      </div>
    </div>
  );
}

export default ProduitDetails;