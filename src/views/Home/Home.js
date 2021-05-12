import React from 'react';

export default function Home(props) {
    return (
        <div style={{height:'100vh', width:'100%', backgroundColor:'white'}}>
            <h1>home screen</h1>
            <button
                onClick={() => {
                    localStorage.removeItem('alkemyToken');
                    props.history.push('/');
                }}
            >LogOut</button>
        </div>
    )
}