class Food_Order_Card {
  constructor(name, price, calories, image_url, original) {
    this.favorite = false;
    this.order_button = false;
    this.quantity_of_items = 1;
    this.name = name;
    this.price = price;
    this.calories = calories;
    this.image_url = image_url;
    this.original = original;
    this.copy_of_price = price;
  }
  increase_number() {
    this.quantity_of_items++;
    this.copy_of_price = this.price * this.quantity_of_items;
  }
  decrease_number() {
    if (this.quantity_of_items > 0)
      this.quantity_of_items--;
    this.copy_of_price = this.price * this.quantity_of_items;
    if (this.quantity_of_items == 0)
      this.copy_of_price = this.price;
  }
  add_to_portion() {
    if (!this.order_button) {
      this.order_button = true;
      Menu.add_to_choices(this);
    } else {
      this.order_button = false;
      Menu.remove_from_choices();
    }
  }
  add_to_favorite() {
    if (!this.favorite) {
      this.favorite = true;
      Like.add_to_likes(this);
    } else {
      this.favorite = false;
      Like.remove_from_likes();
    }
  }
  print() {
    console.log(`
Name: ${this.name} 
 ${this.original} 
Price: ${this.copy_of_price}
Calories: ${this.calories[0]} - ${this.calories[1]}
Quantity of items: ${this.quantity_of_items}
Favorite: ${this.favorite}
`);
  }
}
const _Menu = class {
  static add_to_choices(food) {
    _Menu.choice.push(food);
  }
  static remove_from_choices() {
    _Menu.choice.pop();
  }
};
let Menu = _Menu;
Menu.choice = new Array();
const _Like = class {
  static add_to_likes(food) {
    _Like.likes.push(food);
  }
  static remove_from_likes() {
    _Like.likes.pop();
  }
};
let Like = _Like;
Like.likes = new Array();
let burger = new Food_Order_Card("Double Cheese Potato Burger", 5.99, [220, 280], "url", "Burger");
burger.print();
burger.increase_number();
burger.increase_number();
burger.increase_number();
burger.add_to_favorite();
burger.print();
burger.decrease_number();
burger.decrease_number();
burger.decrease_number();
burger.print();
//# sourceMappingURL=index.js.map
