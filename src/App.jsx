import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./assets/Categories";
import SousCategories from "./assets/SousCategories";
import Produits from "./assets/Produits";
import ProduitDetails from "./assets/ProduitDetails";
import Navbar from "./assets/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [showProduits, setShowProduits] = useState(false);
  const [selectedProduit, setSelectedProduit] = useState(null);

  // Fetch categories and products from Symfony API
  useEffect(() => {
    axios
      .get("https://127.0.0.1:8000/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));

    axios
      .get("https://127.0.0.1:8000/api/produits")
      .then((response) => setProduits(response.data ["hydra:member"] || response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Show selected category and its subcategories
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowProduits(false); // Hide product list
    setSelectedSubCategory(null);
    setSubCategories(categories.filter(sub => sub.parent && sub.parent.id === category.id));
  };

  const handleSubCategorySelect = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setShowProduits(true);
  };

  // Show all products when "Produits" is clicked
  const handleShowProduits = () => {
    setSelectedCategory(null); // Reset category selection
    setSelectedSubCategory(null);
    setShowProduits(true);
    setSelectedProduit(null);
  };

  // Show categories when "Catalogue" is clicked
  const handleShowCategories = () => { 
  setSelectedCategory(null); 
  setSelectedSubCategory(null);
  setShowProduits(true); 
  setSelectedProduit(null);
};

  const handleShowSubCategories = () => { 
    setSelectedCategory(null); 
    setSelectedSubCategory(null);
    setShowProduits(true); };

    const handleShowProduitDetails = (produit) => {
      setSelectedProduit(produit);
    };

  return (
    <div>
      {/* Pass both functions to Navbar */}
      <Navbar
        onShowProduits={handleShowProduits}
        onShowCategories={handleShowCategories}
        onShowSubCategories={handleShowSubCategories}

      />

      <div className="container mt-4">
        <h1 className="text-center text-primary">
          Bienvenue sur site de village green
        </h1>

        
        {selectedProduit ? (
          <ProduitDetails produit={selectedProduit} onBack={handleShowProduits} />
        ) : showProduits ? (
          <Produits 
            produits={selectedSubCategory 
              ? produits.filter(produit => produit.categories?.id === selectedSubCategory.id) 
              : produits
            } 
            onShowProduitDetails={handleShowProduitDetails}
          />
        ) : selectedCategory ? (
          <SousCategories subCategories={subCategories} onSubCategorySelect={handleSubCategorySelect} />
        ) : (
          <Categories categories={categories} onCategorySelect={handleCategorySelect} />
        )}
      </div>
    </div>
  );
}

export default App;