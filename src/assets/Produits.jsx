import React from "react";

function Produits({ produits, onShowProduitDetails }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Liste des Produits</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {produits.length > 0 ? (
          produits.map((produit) => (
            <div key={produit.id} className="col">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column">
                <img
                  src={`http://127.0.0.1:8000/uploads/produits/${produit.image}`}
                  alt={produit.nom}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title">{produit.nom}</h5>
                  <div className="mt-auto">
                    <button
                      className="btn btn-primary rounded-pill"
                      onClick={() => onShowProduitDetails(produit)}
                    >
                      Voir les détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">Aucun produit disponible</p>
        )}
      </div>
    </div>
  );
}

export default Produits;