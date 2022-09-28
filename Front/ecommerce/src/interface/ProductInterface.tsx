export interface Product {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    price: number,
    image: string,
    stock: number,
    stock_minimum: number,
    id_subcategory: {
      id: number,
      title: string,
      id_category: {
        id: number,
        title: string,
        subtitle: string,
        image: string
    }
  }
}