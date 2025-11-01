import React from 'react'
import LogoHeader from './BlockForHeader/LogoHeader'
import MiddleBlock from './BlockForHeader/MiddleBlock'
import AcountBlock from './BlockForHeader/AcountBlock'

function Header() {
    return (
        <div className='bg-gradient-to-r from-amber-400 via-amber-600 to-amber-900 grid grid-cols-3 gap-3'>
            <LogoHeader />
            <MiddleBlock />
            <AcountBlock />
        </div>
    )
}

export default Header