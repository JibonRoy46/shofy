import Banner from "@/components/pages/Banner";
import ProductLIst from "@/components/ProductList"


export const getData = async ()=>{
  const response = await fetch('https://dummyjson.com/products',{
    method: "GET",
    headers:{
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}


export default async function Home() {
  const products = await getData()
  console.log(products)
  return (
    <main >
      <Banner/>
      <ProductLIst productsData={products}/>
    </main>
  );
}
