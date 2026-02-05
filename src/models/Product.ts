interface Dimension {
  width: number;
  height: number;
  depth: number;
}

interface Reviews {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

export class Product {
  private id: number;
  public title: string;
  public description: string;
  public category: string;
  public price: number;
  public discountPercentage: number;
  public rating: number;
  public stock: number;
  public tags: string[];
  public brand: string;
  public sku: string;
  public weight: number;
  public dimensions: Dimension;
  protected warrantyInformation: string;
  public shippingInformation: string;
  public availabilityStatus: string;
  public reviews: Reviews[];
  public returnPolicy: string;
  public minimumOrderQuantity: number;
  public thumbnail: string;
  public images: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[] = [],
    brand: string = "",
    sku: string = "",
    weight: number = 0,
    dimensions: Dimension = { width: 0, height: 0, depth: 0 },
    warrantyInformation: string = "",
    shippingInformation: string = "",
    availabilityStatus: string = "",
    reviews: Reviews[] = [
      {
        rating: 0,
        comment: "",
        date: new Date(),
        reviewerName: "",
        reviewerEmail: "",
      },
    ],
    returnPolicy: string = "",
    minimumOrderQuantity: number = 0,
    thumbnail: string = "",
    images: string[] = [""],
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.tags = tags;
    this.brand = brand;
    this.sku = sku;
    this.weight = weight;
    this.dimensions = dimensions;
    this.warrantyInformation = warrantyInformation;
    this.shippingInformation = shippingInformation;
    this.availabilityStatus = availabilityStatus;
    this.reviews = reviews;
    this.returnPolicy = returnPolicy;
    this.minimumOrderQuantity = minimumOrderQuantity;
    this.thumbnail = thumbnail;
    this.images = images;
  }

  displayDetails(): string {
    return `
        Product: ${this.title}
        Category: ${this.category}
        Price: $${this.price.toFixed(2)}
        Discount: ${this.discountPercentage}%
        Price After Discount: $${this.getPriceWithDiscount().toFixed(2)}
        Rating: ${this.rating} 
        In Stock: ${this.stock}
        Description: ${this.description}
    `;
  }

  getPriceWithDiscount(): number {
    const discountAmount = (this.price * this.discountPercentage) / 100;
    return parseFloat((this.price - discountAmount).toFixed(2));
  }
}
