# e-commerce system

## Reflection
1: I added Typescript by defining interfaces and types to ensure type safety. The Product class demonstrates core OOP principles through encapsulation, utilizing access modifiers strategically—private for the id field to prevent 
external modification, protected for warrantyInformation to allow potential inheritance, and public for commonly accessed properties. I created structured interfaces like Data, Dimension, and Reviews to define a clear structure for data
shapes. I added a default value for some properties in the class constructor.

2: In  ```JavaScript      products.map((element) => {
      element.displayDetails();
      calculateDiscount(element.price, element.discountPercentage);
      calculateTax(element.price, element.category);
    }); ``` 
    I could not see the result ( The console.log) of the discountPercentage in the output, so I added this part of the code :
    ```JavaScript  products.map((element) => {
      console.log(element.displayDetails());
      console.log(calculateDiscount(element.price, element.discountPercentage));
      console.log(calculateTax(element.price, element.category));
    }); ```
    to check  the result.

3: I used async/await syntax in the getProduct() service function, which fetches data from an external API. I created custom error classes—NetworkError and DataError—extending the base Error class. This inheritance-based approach 
allows for precise error handling through instanceof checks in try-catch blocks. I implemented a cascading error handling strategy that distinguishes between network errors, data errors, and generic errors, logging appropriate
messages for each scenario. 

##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
