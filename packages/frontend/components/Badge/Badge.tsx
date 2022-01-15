import React from 'react'

interface BadgeProps {
    text:string;
}

const Badge = ({text}: BadgeProps) => {
    const colors = ['bg-gray-200', 'bg-yellow-200', 'bg-pink-200', 'bg-orange-200', 'bg-blue-200', 'bg-green-200', 'bg-purple-200', 'bg-indigo-200'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
        <>
          <div style={{paddingTop: '0.1em', paddingBottom: '0.1rem'}} className={`text-sm px-3 text-gray-800 rounded-full ${color}`}>{text}</div>
        </>
    )
}

export default Badge
