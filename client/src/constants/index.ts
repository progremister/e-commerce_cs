export interface IState {
  products: IProduct[];
  // mode: "light" | "dark";
  //more can be added ...
}


export interface IProduct {
    id?: number;
    product_name: string;
    description?: string;
    price: number;
    stock: number;
    category_id?: number;
    href: string;
    image_url: string;
  }