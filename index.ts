interface Methods_Food_Card
{
  add_to_favorite(): void
  add_to_portion(): void
  increase_number(): void
  decrease_number(): void
}
interface Printable 
{ print(): void }
class Food_Order_Card implements Methods_Food_Card, Printable
{
  readonly name: string;
  price: number;
  copy_of_price: number;
  readonly image_url: string;
  readonly calories: number[];
  readonly original: string;
  category!: string;
  favorite: boolean = false;
  order_button: boolean = false;
  quantity_of_items: number = 1;
  increase_number()
  {
    this.quantity_of_items++; 
    this.copy_of_price = this.price * this.quantity_of_items;
  }
  decrease_number()
  {
    if(this.quantity_of_items > 0)
      this.quantity_of_items--; 
    this.copy_of_price=this.price * 
      this.quantity_of_items;
    if(this.quantity_of_items == 0)
      this.copy_of_price=this.price;
  }
  add_to_portion()
  {
    if(!this.order_button)
    {
      this.order_button = true;
      Menu.add_to_choices(this)
    }
    else
    {
      this.order_button = false;
      Menu.remove_from_choices();
    }
  }
  add_to_favorite()
  {
if(!this.favorite)
{
      this.favorite = true;
      Like.add_to_likes(this)
    }
    else
{
      this.favorite = false;
      Like.remove_from_likes();
    }
  }
  print()
  {
        console.log(
`\nName: ${this.name} \n ${this.original} 
Price: ${this.copy_of_price}
Calories: ${this.calories[0]} - ${this.calories[1]}
Quantity of items: ${this.quantity_of_items}
Favorite: ${this.favorite}
`);
    }
    constructor(name: string, price: number, calories: number[], image_url: string, original: string)
  {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.image_url = image_url;
        this.original = original;
        this.copy_of_price = price;
    }
}
class Menu
{
  static choice: Array<Food_Order_Card> = new Array<Food_Order_Card>();
  static add_to_choices(food: Food_Order_Card)
  {
    Menu.choice.push(food);
  }
  static remove_from_choices()
  {
    Menu.choice.pop();
  }
}
class Like
{
  static likes: Array<Food_Order_Card> = new Array<Food_Order_Card> ();
  static add_to_likes(food: Food_Order_Card)
  {
    Like.likes.push(food);
  }
  static remove_from_likes()
  {
    Like.likes.pop();
  }
}
let burger = new Food_Order_Card ("Double Cheese Potato Burger", 5.99, [220, 280], "url", "Burger");
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