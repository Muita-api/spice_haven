// import { useState, useEffect } from "react";
// const CategoriesList = () => {
//     const [categories, setCategories] = useState([]);
  
//     useEffect(() => {
//       fetch("http://localhost:5000/api/categories")
//         .then((res) => res.json())
//         .then((data) => setCategories(data))
//         .catch((error) => console.error("Error fetching categories:", error));
//     }, []);
  
//     return (
//       <div>
//         <h2>Product Categories</h2>
//         <ul>
//           {categories.map((category) => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default CategoriesList;