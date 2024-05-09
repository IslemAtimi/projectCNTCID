export interface ProductsDto{
    id:number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[]
  }
  
  export interface postDto{
    userId:number,
    id:number,
    title:string,
    body:string
  }
  