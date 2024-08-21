import React, { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category.jsx";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);
  
  return (
    <div className="container mx-auto">
      <div className="bg-white py-4">
        <div className="container mx-auto">
          <h3 className="font-semibold text-sm mb-3">Kategoriler</h3>
        </div>
        <div className="grid lg:grid-cols-10">
        {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>
    </div>
  );
}
