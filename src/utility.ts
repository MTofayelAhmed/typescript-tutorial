type Product = {
    id: number,
    name: string,
    price: string,
    stock: number,
    color?: string

}

type ProductSummary= Pick<Product, "id"| "name"|"price">

type ProductWithoutStock = Omit<Product, "stock">

// if we want to make every things should be required 


type ProductWithEverything = Required<Product>

type OptionalProduct = Partial <Product>

// if we need to declare empty object we can use Record to determine the key type 


const emptyObj : Record<string, unknown> = {
    
}




 
