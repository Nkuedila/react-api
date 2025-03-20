import React from "react";

function Categories({ categories, onCategorySelect }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">NOTRE CATÉGORIES</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {categories.length > 0 ? (
          categories
            .filter((category) => category.parent == null) // Show only main categories
            .map((category) => (
              <div key={category.id} className="col">
                <div className="card shadow-lg border-0 h-100 d-flex flex-column">
                  <div className="image-container overflow-hidden text-center p-5">
                   {  <img src={`https://127.0.0.1:8000/uploads/categories/${category.image}`} alt={category.nom}className="card-img-top img-fluid" 
                    style={{ maxHeight: "170px", objectFit: "contain" }}/> }
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{category.nom}</h5>
                    <div class="mt-auto">
                    <button className="btn btn-primary rounded-pill" onClick={() => onCategorySelect(category)}> Voir sous-catégories
                    </button>
                  </div>
                </div>
              </div>
              </div>
            ))
        ) : (
          <p className="text-center text-muted">Aucune catégorie disponible</p>
        )}
      </div>
    </div>
  );
}

export default Categories;