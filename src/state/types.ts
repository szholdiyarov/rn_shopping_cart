export type ShopItem = {
  id: string;
  title: string;
  price: number;
  image: any; // store image require
};

export type CartItem = {
  shopItem: ShopItem;
  quantity: number;
};
