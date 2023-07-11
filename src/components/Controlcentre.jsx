import React, { useState,useRef,useEffect } from 'react';
import './controlcentre.css';
import airdrop from './icon/Untitled_Artwork.png';
import focus from './icon/moonk.png';
import bluetooth from './icon/Untitled_Artwork 2.png';
import stage from './icon/stage.png';
import screen from './icon/screen.png';

export default function Controlcentre() {
  const [bw, setBw] = useState('rgb(111, 111, 111)');
  const [bb, setBb] = useState('rgb(111, 111, 111)');
  const [ba, setBa] = useState('rgb(111, 111, 111)');
  const [bf, setBf] = useState('rgb(111, 111, 111)');
  const [showIconW, setShowIconW] = useState(false);
  const [showIconB, setShowIconB] = useState(false);
  const [showIconA, setShowIconA] = useState(false);
  const [showIconF, setShowIconF] = useState(false);

  const brightRef = useRef(null);
  const volRef = useRef(null);
  useEffect(() => {
    const handleBrightnessChange = () => {
      const brightnessValue = brightRef.current.value;
      document.body.style.filter = `brightness(${brightnessValue}%)`;
    };

    brightRef.current.addEventListener('input', handleBrightnessChange);
  }, []);
  const handleBrightChange = () => {
    const x = brightRef.current.value;
    const color1 = `linear-gradient(90deg, rgb(242,242,242) ${x}%, rgb(91, 75, 94) ${x}%)`;
    brightRef.current.style.background = color1;
  };
  const handleVolumeChange = () => {
    const y = volRef.current.value;
    const color2 = `linear-gradient(90deg, rgb(242,242,242) ${y}%, rgb(91, 75, 94) ${y}%)`;
    volRef.current.style.background = color2;
  };


  function click() {
    if (bw === 'rgb(111, 111, 111)') {
      setBw('rgb(191, 0, 234)');
    } else {
      setBw('rgb(111, 111, 111)');
    }
  }

  function click2() {
    if (bb === 'rgb(111, 111, 111)') {
      setBb('rgb(191, 0, 234)');
    } else {
      setBb('rgb(111, 111, 111)');
    }
  }

  function click3() {
    if (ba === 'rgb(111, 111, 111)') {
      setBa('rgb(191, 0, 234)');
    } else {
      setBa('rgb(111, 111, 111)');
    }
  }

  function click4() {
    if (bf === 'rgb(111, 111, 111)') {
      setBf('rgb(191, 0, 234)');
    } else {
      setBf('rgb(111, 111, 111)');
    }
  }

  return (
    <div>
      <div className='dropcontrolcentre'>
        <div className='l'>
          <a
            onMouseEnter={() => setShowIconW(true)}
            onMouseLeave={() => setShowIconW(false)}
          >
            <p
              className='wf'
              style={{ background: bw }}
              onClick={click}
            >
              <i className='fa fa-wifi'></i>
            </p>
            Wi-Fi
            {showIconW && <i id='fa' className='fa fa-angle-right'></i>}
          </a>
          <a
            onMouseEnter={() => setShowIconB(true)}
            onMouseLeave={() => setShowIconB(false)}
          >
            <img
              src={bluetooth}
              style={{ background: bb }}
              onClick={click2}
              className='blue'
            />
            Bluetooth
            {showIconB && <i id='fa' className='fa fa-angle-right'></i>}
          </a>
          <a
            onMouseEnter={() => setShowIconA(true)}
            onMouseLeave={() => setShowIconA(false)}
          >
            <img
              src={airdrop}
              style={{ background: ba }}
              onClick={click3}
              alt=''
              className='air'
            />
            Airdrop
            {showIconA && <i id='fa' className='fa fa-angle-right'></i>}
          </a>
        </div>
        <div className='r'>
          <a
            onMouseEnter={() => setShowIconF(true)}
            onMouseLeave={() => setShowIconF(false)}
          >
            <img
              style={{ background: bf }}
              onClick={click4}
              className='focus'
              src={focus}
              alt=''
            />
            Focus
            {showIconF && <i id='fa' className='fa fa-angle-right'></i>}
          </a>
        </div>
        <div className='x'>
          <a className='stage'>
            <img src={stage} alt='' />
            Stage Manager
          </a>
        </div>
        <div className='y'>
          <a className='screen'>
            <img src={screen} alt='' />
            Screen Mirroring
          </a>
        </div>
        <div className='bright'>
          <a>Display</a>
          <input
           ref={brightRef}
           onMouseMove={handleBrightChange}
            defaultValue="100"
             type='range' min='1' max="100" id='D' />
        </div>
        <div className='volume'>
          <a>Sound</a>
          <input ref={volRef} onMouseMove={handleVolumeChange} type='range'min='1'defaultValue='100' max="100" id='V' />
        </div>
      </div>
    </div>
  );
}
