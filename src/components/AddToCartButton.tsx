"use client"

const AddToCartButton = () => {
  return (
    <button
    onClick={()=>window.alert("hello")}
    className="w-full bg-transparent border border-skyColor hover:bg-skyColor 
          text-black tracking-wide text-sm rounded-full py-1.5 mt-1 hover:text-white duration-300">
        Add to cart
    </button>
  )
}

export default AddToCartButton