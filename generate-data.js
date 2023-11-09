const { fakerEN: faker } = require("@faker-js/faker");
const fs = require("fs");
const data = require("./data.json");

// const newHotels = {
//   ...data,
//   hotels: data.hotels.map((hotel) => {
//     return {
//       ...hotel,
//       numberOfRoom: faker.number.int({ max: 40, min: 5 }),
//       rating: Number((Math.random() * 3 + 2).toFixed(1)),
//       stars: faker.number.int({ max: 5, min: 1 }),
//     };
//   }),
// };

// const categoriesArr = [
//   "electronics",
//   "jewelry",
//   "men's clothing",
//   "women's clothing",
// ];

// const randomCategoriesList = (n) => {
//   if (n <= 0) return [];
//   const categoriesList = [];
//   for (let i = 0; i < n; i++) {
//     const category = {
//       id: faker.string.numeric(),
//     };
//     categoriesList.push(category);
//   }
//   return categoriesList;
// };

// const randomBlogsList = (n) => {
//   if (n <= 0) return [];
//   const blogsList = [];
//   for (let i = 0; i < n; i++) {
//     const blog = {
//       id: faker.string.uuid(),
//       title: faker.commerce.productAdjective,
//       description: faker.commerce.productDescription,
//     };
//     blogsList.push(blog);
//   }
//   return blogsList;
// };

// const randomProductsList = (categoriesList, n) => {
//   if (n <= 0) return [];
//   const productList = [];
//   for (const category of categoriesList) {
//     for (let i = 0; i < n; i++) {
//       const product = {
//         categoryID: category.id,
//         id: faker.string.uuid(),
//         name: faker.commerce.productName(),
//         color: faker.commerce.productMaterial(),
//         price: Number.parseFloat(faker.commerce.price({ max: 500, min: 50 })),
//         description: faker.commerce.productDescription(),
//         createAt: Date.now(),
//         updateAt: Date.now(),
//         image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
//         company: faker.company.name(),
//       };
//       productList.push(product);
//     }
//   }
//   return productList;
// };

// IIFE

(() => {
  // Random data
  // const categoriesList = randomCategoriesList(12);
  // const productsList = randomProductsList(categoriesList, 20);
  // const blogsList = randomBlogsList(4);
  // const wishList = randomProductsList(categoriesList, 20);

  // Prepare db obj
  // const db = {
  //   categories: categoriesList,
  //   // products: productsList,
  //   // blogs: blogsList,
  //   // favorite: favoriteList,
  // };

  const db = data;

  // Write db obj to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generated data successfully");
  });
})();
