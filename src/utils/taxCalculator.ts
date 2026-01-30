const DEFAULT_TAX_RATE = 4.75;
const GROCERIES_TAX_RATE = 3;

export const calculateTax = (
  productPrice: number,
  category: string,
): string => {
  let taxRate: number =
    category.toLowerCase() === "groceries"
      ? GROCERIES_TAX_RATE
      : DEFAULT_TAX_RATE;

  console.log("first", taxRate);
  const taxedAmount = (productPrice * taxRate) / 100;

  return `$${taxedAmount.toFixed(2)}`;
};
