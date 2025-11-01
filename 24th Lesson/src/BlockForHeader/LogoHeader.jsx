import React from 'react'

function LogoHeader() {
    return (
        <div className=' w-3/3 h-40 flex gap-4'>
            <div className='w-1/2 h-1/1.5'>
                <img src='/public/Logo.png' className='w-30 h-30 rounded-full mt-2 ml-2 border-1 border-black' />
            </div>

            <div className='grid gap-4 mt-2 mb-2 w-1/2 mr-2'>
                <button type="button" className="bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold px-5 py-2 rounded-xl border border-amber-900 shadow-md hover:from-amber-700 hover:to-amber-900 hover:scale-105 transition-transform duration-700"> Components Gallery </button>
                <button type='button' className='bg-gradient-to-r from-amber-600 to-amber-900 text-white font-semibold px-5 py-2 rounded-xl border border-amber-900 shadow-md hover:from-amber-700 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>Docs</button>
            </div>
        </div>
    )
}

export default LogoHeader