import { Product } from "./models/Product.js";
import { getProduct } from "./services/apiService.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";

const getData = async () => {
  try {
    const data = await getProduct();
    const products = data.map(
      (p: any) =>
        new Product(
          p.id,
          p.title,
          p.description,
          p.category,
          p.discountPercentage,
          p.rating,
          p.stock,
          p.price,
        ),
    );

    console.log("products", products);
    products.map((element) => {
      element.displayDetails();
      calculateDiscount(element.price, element.discountPercentage);
      calculateTax(element.price, element.category);
    });

    products.map((element) => {
      console.log(element.displayDetails());
      console.log(calculateDiscount(element.price, element.discountPercentage));
      console.log(calculateTax(element.price, element.category));
    }); // To see the result
  } catch (error) {
    console.error(error);
  }
};

getData();
