import  Container  from '../Container'
import Image from "next/image";
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa6'
import { bannerImageOne } from '@/assets';


const getData = async () => {
 
    const response = await fetch(`${process.env.API_URL}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"  // Fixed typo here
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  }


const Banner = async () => {
  const {banner} = await  getData();
  return (
    <div className="bg-[#115061] py-20 text-themeWhite">
        <Container className="flex items-center justify-between">
           <div className="flex flex-col gap-4">
            <p className='text-base font-semibold'>{banner?.priceText}</p>
            <h1 className=" text-5xl font-bold max-w-[500px]">{banner?.title}</h1>
            <p className="text-lg font-bold">{banner?.textOne} <span className="text-[#ffd43a]">{banner?.offerPrice}</span> {banner?.textTwo}</p>
            <Button href={banner?.buttonLink} className='flex items-center gap-1 text-black bg-themeWhite  justify-center
             w-32 px-0  rounded-md text-sm font-semibold hover:bg-transparent hover:text-white
              py-3 border border-transparent hover:border-white/40 duration-200'>Shop Now <FaArrowRight /></Button>
           </div>
           <div>
            <Image src={banner?.image} alt=" bannerIamgeOne"/>
           </div>
        </Container> 
    </div>
  )
}

export default Banner