import Image from 'next/image'


const SplashScreen = () => {
    return (
        <section className='container mx-auto lg:p-12'>
            <div className='md:hidden absolute top-10 flex-1 mx-auto flex justify-center'>
                <Image className='' src={'/left-arrows.svg'} width={250} height={250} />
            </div>
            <div className='md:flex flex-col md:flex-row justify-center'>
                <div className='flex flex-col flex-1 mx-auto'>
                    <h1 className='text-acqua font-mono text-4xl m-12'>Many reasons to get up and start to get back in the business </h1>
                    <p className='text-gray text-2xl font-roboto ml-12'>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <div className=' lg:p-4'>
                        <button className='w-32 bg-orange-light hover:bg-transparent border-2 border-orange-light hover:border-orange-light text-white font-mono py-2 rounded m-6 focus:outline-none'>Learn more</button>
                        <button className='w-32 border-2 border-orange-light text-white font-mono py-2 rounded m-6 lg:m-12 focus:outline-none'>Demo</button>
                    </div>
                </div>
                <div className='flex-1 mx-auto flex justify-center'>
                    <Image src={'/human.svg'} width={550} height={550} />
                </div>

            </div>

            <div className='hidden md:flex flex-col p-12 ml-8 justify-center'>
                <h1 className='text-center text-2xl text-orange-light font-mono mb-12'>
                    When we said we serve the best we really meant that!
                </h1>
                <Image src='/testimonials.png' height={30} width={1000} />
            </div>

        </section>
    )
}

export default SplashScreen;