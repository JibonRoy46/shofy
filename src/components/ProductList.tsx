
import { ProductType } from "../../type";
import  Container  from "./Container"
import Title from "./Title";
import ProductCart from "./ProductCart";


interface Props{
    productsData:{
       products: ProductType[]
    };
}




const ProductList=({productsData}:Props )=>{
    const {products} =productsData;
    return(
        <Container className="py-10">
            <Title>Trending Prokucts</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
                {products?.map((item:ProductType)=>(
                
                    <ProductCart key={item?.id} product={item}/>
                    )
                )}
            </div>
        </Container>
    )
}


export default ProductList;