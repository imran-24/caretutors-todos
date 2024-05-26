'use client'

import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='h-12 max-w-5xl w-full mx-auto px-4 border-b fixed top-0 left-0 right-0'>
        <div className='flex flex-col h-full justify-center  gap-x-2'>
            <h2 className=''>Todo</h2>
        </div>
    </nav>
  )
}

export default Navbar