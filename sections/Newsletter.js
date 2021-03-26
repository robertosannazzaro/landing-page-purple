import { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState()
    return (
        <section className='lg:mx-auto lg:flex lg:flex-row max-w-full lg:pb-20 lg:pt-20 bg-newsletter'>
            <div className='mx-auto lg:flex flex-col pt-6 pb-6  pl-12 pr-12 rounded-lg justify-center bg-newsLetterBackground'>
                <h1 className='text-center text-3xl text-orange-light font-mono mb-4'> There are many reasons to get down</h1>
                <p className='text-gray text-center'>There are many reasons to get down and start to get depressed about your situation. </p>

                <div className='mx-auto flex flex-row pt-3 pb-3 pl-6 pr-6 justify-center'>
                    <input onChange={(e) => setEmail(e.target.value)} className='rounded-l-lg rounded-r-none p-4 bg-inputGrey focus:outline-none text-white placeholder-white mr-0 text-gray-800 border-gray-200 bg-white' placeholder='Your Email' />
                    <button onClick={() => console.log(email)} className='rounded-r-lg bg-orange-light  text-white font-bold  px-8 p-4 uppercase border-orange-light border focus:outline-none hover:bg-inputGrey'>Send</button>
                </div>
                <p className='text-gray text-center text-xs'>No spam. Only releases, updates and discounts</p>

            </div>
        </section>
    )
}

export default Newsletter;