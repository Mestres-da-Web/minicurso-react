export interface IProduct {
  _id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  pastPrice: number;
  category: string;
  brand: string;
  store: string;
}

export interface IDeleteProduct {
  getConfirmation: boolean;
  showFeedback: boolean;
  itemId?: string;
}
