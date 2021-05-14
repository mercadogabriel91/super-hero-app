import React from 'react';
import img from '../../assets/Into-the-Spider-Verse.jpg'

export default function WrongPath() {
    return (
        <div style={{
            height: '100vh',
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }} >
            <p style={{fontSize:35, fontWeight:'bolder', color:'white'}}>Error 404</p>
        </div>
    )
}