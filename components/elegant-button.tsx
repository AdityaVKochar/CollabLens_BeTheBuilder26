'use client'

import Link from "next/link"

export default function ElegantButton() {
  return (
    <Link 
      href="/dashboard"
      className="block w-full h-full flex items-center justify-center cursor-pointer transition-all duration-400 outline-none overflow-hidden font-bold relative"
      style={{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 'clamp(18px, 3vw, 28px)',
        padding: '15px 30px',
        border: '2px solid #56A13E',
        backgroundColor: 'rgba(230, 250, 160, 0.9)',
        color: '#56A13E',
        borderRadius: '30px',
        transition: 'all 0.4s ease',
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 'bold'
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = '#2c5a1d';
        target.style.backgroundColor = 'rgba(210, 240, 140, 0.95)';
        const glow = target.querySelector('span:first-child') as HTMLElement;
        if (glow) {
          glow.style.transform = 'scale(4)';
        }
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = '#56A13E';
        target.style.backgroundColor = 'rgba(230, 250, 160, 0.9)';
        const glow = target.querySelector('span:first-child') as HTMLElement;
        if (glow) {
          glow.style.transform = 'scale(0)';
        }
      }}
    >
      <span 
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(86, 161, 62, 0.25) 0%, rgba(86, 161, 62, 0) 70%)',
          transform: 'scale(0)',
          transition: 'transform 0.5s ease'
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>Enter Dashboard</span>
    </Link>
  )
}
