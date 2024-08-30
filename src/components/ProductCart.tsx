
import Image from "next/image";
import { FaRegEye, FaStar } from "react-icons/fa6";
import AddToCartButton from "./AddToCartButton";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { ProductType } from "../../type";
import Link from "next/link";


interface Props{
    product:ProductType
}

const ProductSideBar =({id}:{id:number})=>{
    return(
        <div className=" absolute right-2 bottom-16 flex flex-col border border-borderColor text-2xl rounded-md 
        overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 bg-themeWhite ">
            <button className="p-2 hover:bg-skyColor hover:text-white duration-300">
            <LuShoppingCart />
            </button>
            <Link 
            href={`/product/${id}`} 
            // href={{
            //     pathname:`/product/${id}`,
            //     query:{
            //         id:id,
            //     },
            // }}
            className="p-2 hover:bg-skyColor hover:text-white duration-300 border-y border-y-borderColor">
            <FaRegEye />
            </Link>
            <button className="p-2 hover:bg-skyColor hover:text-white duration-300">
            <MdFavoriteBorder />
            </button>
        </div>
    )
}





const ProductCart = ({product}:Props) => {
  return (
    <div className=" border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-200 
       rounded-md  group ">
         <div className=" overflow-hidden relative ">
            <Image src={product?.images[0]} alt="product-images" width={500} height={500} 
            className="w-full h-64  object-contain group-hover:scale-110 duration-300" />
            {product?.rating &&(
           <p className=" absolute top-2 right-2  bg-lightOrange text-white text-xs font-medium flex items-center
               py-1 px-2 rounded-lg gap-1"
              >{product?.rating} <FaStar/></p>
            )}
            <ProductSideBar id={product?.id}/>
        </div>
        <div className="p-4 border-t border-t-borderColor flex flex-col gap-1">
            <p className="text-sm font-medium capitalize text-lightText">
               {product?.category}
            </p>
             <h2 className="font-semibold line-clamp-2">{product?.title} </h2>
             <p className="font-semibold mt-1">${product?.price}</p>
             <AddToCartButton/>
        </div>
    </div>
  )
}

export default ProductCart