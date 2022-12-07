import React from 'react'

function Overview({ title, amount }) {
    return (
        <div className='bg-white text-dark rounded-lg shadow-lg mb-2 '>
            <div className='px-5 py-5 h-22'>
                <h2 className='text-2xl text-gray-500 pb-3'>{title}</h2>
                <h2 className='text-xl'>${amount}</h2>
            </div>
        </div>
    )
}

export default Overview


