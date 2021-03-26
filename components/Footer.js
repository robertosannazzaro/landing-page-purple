import Image from 'next/image'

const Footer = () => {

    return (
        <footer className='font-mono flex flex-col md:pl-24 md:pr-24 md:pb-8 md:pt-12 mt-12 text-gray bg-footer'>
            <div className='w-9/12 m-auto flex flex-col'>
                <div className='lg:w-full mx-auto flex flex-col lg:flex-row'>
                    <div className='mr-auto'>
                        <h1 className='lg:text-3xl text-orange-light font-mono mb-4'>DeepLabs</h1>
                    </div>

                    <div className='ml-auto'>
                        <Image src='/social.png' width={152} height={40} />
                    </div>
                </div>

                <div className='w-full flex p-12 mb-4'>

                    <div className='mr-auto'>
                        <h1 className='text-xl text-orange-light font-mono mb-4'>Col 1</h1>
                        <ul>

                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>

                        </ul>

                    </div>
                    <div className='mr-auto m-auto'>
                        <h1 className='text-xl text-orange-light font-mono mb-4'>Col 1</h1>
                        <ul>

                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>

                        </ul>
                    </div>
                    <div className='mr-auto m-auto'>
                        <h1 className='text-xl text-orange-light font-mono mb-4'>Col 1</h1>
                        <ul>

                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>

                        </ul>
                    </div>
                    <div className='mr-auto m-auto'>
                        <h1 className='text-xl text-orange-light font-mono mb-4'>Col 1</h1>
                        <ul>

                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>
                            <li>imte 1</li>

                        </ul>
                    </div>
                </div>

                <div className='m-auto flex text-xs	 space-x-16'>
                    <p className='text-gray'>© Copyrights 2021</p>
                    <p className='text-gray'>Privacy policy</p>
                    <p className='text-gray'>Terms of service</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer;