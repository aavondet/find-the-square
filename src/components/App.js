import React from 'react';
import useSound from 'use-sound';
import clink from '../../public/clink.mp3';

const Main = () => {
    const [play, { stop }] = useSound(
        clink,
        { volume: 0.5 }
    );
    
    const [isPlaying, setIsPlaying] = React.useState(
        false
      );
    
    var maxW = window.innerWidth;
    var maxH = window.innerHeight;

    const x = Math.random() * (maxW);
    const y = Math.random() * (maxH);

    if (isPlaying) {
        const mystyle = {
            left: x + 'px',
            top: y + 'px'
        };
        return (
            <>
                <button
                    className='goal'
                    onMouseEnter={() => {
                        setTimeout(play, 3000)
                    }}
                    onClick={() => {
                        alert('you win!')
                    }}
                    style={mystyle}
                />
            </>
        );
    } else {
        return (
            <>
                <button
                    className='play'
                    onClick={() =>{
                        setIsPlaying(true);
                    }} 
                >Play</button>
            </>
        );
    }
};

export default Main;
