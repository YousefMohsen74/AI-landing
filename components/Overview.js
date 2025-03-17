import Product from '@/public/assets/product-image.png'
import Image from 'next/image'
function Overview() {
    return (
        <div className=" w-full ">
            <div className='w-full border border-white/15 p-3 rounded-lg'>
                <div className='w-full border border-white/15 rounded-lg'>
                <Image src={Product} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Overview
