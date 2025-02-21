import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='flex h-screen justify-around items-center'>
                <div className='bg-gray-500 rounded-4xl h-96 w-1/3 p-8' >
                    Photo of me
                </div>

                <div className='w-1/3 flex flex-col gap-4'>
                    <h1>frontend-developer</h1>
                    <h1 className='text-4xl font-bold'>Banti Kumar</h1>
                    <h1>Quisque lorem eros, ultrices commodo tortor ut, cursus venenatis elit. Morbi aliquam aliquam malesuada. Pellentesque id mauris porttitor, cursus libero sit.
                    </h1>
                    <button className='text-start border-2 w-32 px-2 py-4 rounded-2xl cursor-pointer'>Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Hero