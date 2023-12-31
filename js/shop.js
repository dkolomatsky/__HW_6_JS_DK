// Мета завдання:
// Створити програму для супермаркету, що дозволяє генерувати продукти та формувати чеки покупок за допомогою прототипів та конструкторів в JavaScript.

// #### Вимоги:
// 1. Створення конструктора для продуктів:
//    - Створіть конструктор, що дозволяє створювати об'єкти продуктів. Кожен продукт має мати наступні властивості: назва, ціна, кількість одиниць.

// 2. Прототип для обчислення вартості продуктів:
//    - Додайте метод до прототипу продукту, який розраховує загальну вартість продукту в залежності від кількості одиниць.

// 3. Створення об'єктів продуктів:
//    - Створіть кілька об'єктів продуктів за допомогою конструктора.

// 4. Функція для друку чеку:
//    - Розробіть функцію, яка приймає на вхід список продуктів і виводить у консоль чек покупок. Чек повинен містити інформацію про кожен продукт (назва, ціна за одиницю, кількість, загальна вартість за цей продукт) та загальну суму покупки.

// Не забувайте експериментувати та тестувати програму з різними вхідними даними для перевірки правильності роботи коду.

const ProductBuilder = function (name,price,quantity){
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      ProductBuilder.productsList = [];
}
ProductBuilder.prototype.calculatePrice = function (){
  return this.price * this.quantity;
}

function printBill (productsList) {
  let totalCost = 0;
  for (const product of productsList) {
    const totalPrice = product.calculatePrice();
    totalCost += totalPrice;
    console.log(`
    Продукт: ${product.name}
    Ціна за 1шт: ${product.price}
    Кільксть: ${product.quantity}
    Вартість замовленого продукту: ${totalPrice.toFixed(2)}
    `);
  }
  console.log(`Всього до сплати: ${totalCost.toFixed(2)}`)
}

const product1 = new ProductBuilder('pear', 30.5, 100);
const product2 = new ProductBuilder('pine-apple', 15, 10);
const product3 = new ProductBuilder('banana', 35.7,4);
ProductBuilder.productsList.push(product1, product2, product3);

printBill(ProductBuilder.productsList);





