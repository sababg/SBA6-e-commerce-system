import { Product } from "./models/Product.js";
import { getProduct } from "./services/apiService.js";
// import { calculateDiscount } from "./utils/discountCalculator.js";
// import { calculateTax } from "./utils/taxCalculator.js";

const getData = async () => {
  try {
    const data = await getProduct();

    const products = data.map(
      (p: any) =>
        new Product(
          p.id,
          p.title,
          p.category,
          p.discountPercentage,
          p.rating,
          p.stock,
          p.description,
          p.price,
        ),
    );
    products.map((element) => element.displayDetails());
    console.log(
      "first",
      products.map((element) => element),
    );
  } catch (error) {
    console.error(error);
  }
};

getData();
