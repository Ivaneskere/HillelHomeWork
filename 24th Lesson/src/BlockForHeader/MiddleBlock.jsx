import React from 'react'

function MiddleBlock() {
    return (
        <div className=' w-3/3 h-40 flex gap-10 justify-center'>
            <div className='grid mt-2 mb-2'>
                <button className='w-5/1 bg-gradient-to-r from-amber-900 to-amber-700 rounded-xl hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    1
                </button>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl mt-2 mb-2  hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    2
                </button>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl  hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    3
                </button>
            </div>
            <div className='grid mt-2 mb-2'>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    4
                </button>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl mt-2 mb-2  hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    5
                </button>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl  hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    6
                </button>
            </div>
            <div className='grid mt-2 mb-2'>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    7
                </button>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl mt-2 mb-2  hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    8
                </button>
                <button className='w-5/1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl  hover:from-amber-600 hover:to-amber-900 hover:scale-105 transition-transform duration-700'>
                    9
                </button>
            </div>
        </div>
    )
}

export default MiddleBlock