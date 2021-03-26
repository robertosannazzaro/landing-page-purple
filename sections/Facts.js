import Image from 'next/image'


const Facts = () => {
    return (
        <section className='container flex flex-row max-w-full  md:pb-12 md:pt-12'>
            <div className='hidden lg:flex-1 lg:mx-auto lg:flex justify-left'>
                <Image className='opacity-20' src={'/arrows-left.svg'} width={250} height={250} />
            </div>
            <div>
                <h1 className='text-acqua text-center font-roboto text-4xl'>Your choice</h1>


                <p className='text-gray text-center font-roboto text-base m-12'>There are many reasons to get down and start to get depressed about your situation. </p>
                <div className='md:flex mx-auto flex-row p-8 justify-center'>

                    <div className='max-w-sm'>
                        <div className='flex flex-row'>
                            <Image className='object-contain' src='/facts/flip-horizontal.png' height={24} width={24} />
                            <h1 className='text-acqua font-mono m-6'>Ecstatic elegance</h1>

                        </div>
                        <p className='text-gray font-roboto m-6'>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                    </div>

                    <div className='max-w-sm'>
                        <div className='flex flex-row'>
                            <Image className='object-contain' src='/facts/airpods.png' height={24} width={24} />
                            <h1 className='text-acqua  font-mono m-6'>Possible procured trifling</h1>
                        </div>
                        <p className='text-gray font-roboto m-6'>Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.</p>

                    </div>

                    <div className='max-w-sm'>
                        <div className='flex flex-row'>
                            <Image className='object-contain' src='/facts/lte.png' height={24} width={24} />
                            <h1 className='text-acqua font-mono m-6'>Folly words widow</h1>
                        </div>
                        <p className='text-gray font-roboto m-6'>We me rent been part what. An concluded sportsman offending so provision mr education.</p>
                    </div>

                </div>

                <div className='md:hidden absolute mx-auto flex justify-center'>
                    <Image className='' src={'/left-arrows.svg'} width={250} height={250} />
                </div>

                <div className='md:flex mx-auto flex-row p-8 justify-center'>
                    <div className='max-w-sm'>
                        <div className='flex flex-row'>
                            <Image className='object-contain' src='/facts/thunder.png' height={24} width={24} />
                            <h1 className='text-acqua font-mono m-6'>Open Game</h1>

                        </div>
                        <p className='text-gray font-roboto m-6'>Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.</p>
                    </div>

                    <div className='max-w-sm'>
                        <div className='flex flex-row'>
                            <Image className='object-contain' src='/facts/chain.png' height={24} width={24} />
                            <h1 className='text-acqua font-mono m-6'>Endeavor</h1>

                        </div>
                        <p className='text-gray font-roboto m-6'>Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. </p>
                    </div>


                    <div className='max-w-sm'>
                        <div className='flex flex-row'>
                            <Image className='object-contain' src='/facts/bulb.png' height={24} width={24} />
                            <h1 className='text-acqua font-mono m-6'>Comfort pursuit</h1>

                        </div>
                        <p className='text-gray font-roboto m-6'>Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.</p>
                    </div>



                </div>
            </div>

            <div className='hidden lg:flex-1 lg:mx-auto lg:flex  justify-right'>
                <Image className='opacity-20' src={'/arrows-right.svg'} width={250} height={250} />
            </div>
        </section>
    )
}

export default Facts;