import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'

createRoot(document.getElementById('root')).render(
    <>
        <header>
            <Header />
        </header>
        
    </>
)
