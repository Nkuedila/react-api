import React from "react";

function SousCategories({ subCategories, onSubCategorySelect }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Sous-catégories</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {subCategories.length > 0 ? (
          subCategories.map((subCategory) => (
            <div key={subCategory.id} className="col">
              <div 
                className="card shadow-lg border-0 h-100 text-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => onSubCategorySelect(subCategory)}
              >
                <img
                  src={`http://127.0.0.1:8000/uploads/categories/sous/${subCategory.image}`} 
                  alt={subCategory.nom} 
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
               
                
                <h5 className="mt-3">{subCategory.nom}</h5>
               
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">Aucune sous-catégorie disponible</p>
        )}
      </div>
    </div>
  );
}

export default SousCategories;