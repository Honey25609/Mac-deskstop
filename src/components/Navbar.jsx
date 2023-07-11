import React, { useState,useEffect } from 'react'
import "./navbar.css";
import './Dock.css';
import controlcentre from './icon/control-center.png'
import siri from './icon/siri.png'
import Clock from './Clock';
import Controlcentre from './Controlcentre';
import applestore from './icon/applestore.png'
import setting from './icon/setting.png'
import contact from './icon/contact.png'
import imsg from './icon/imessage.png'
import facetime from './icon/facetime.png'
import applemusic from './icon/applemusic.png'
import pinterest from './icon/pinterest.png'
import launchpad from './icon/launchedpad.png'
import finder from './icon/finder.png.jpeg'
import bin from './icon/bin.png'
import Launchpad from './Launchpad';
import './Launchpad.css'
import { motion } from 'framer-motion';







export default function Navbar() {
  const [dropdownApple, setDropdownApple] = useState(false);
  const [dropdownFinder, setDropdownFinder] = useState(false);
  const [dropdownFile, setDropdownFile] = useState(false);
  const [dropdownEdit, setDropdownEdit] = useState(false);
  const [dropdownView, setDropdownView] = useState(false);
  const [dropdownGo,setDropdownGo] = useState(false);
  const [dropdownWindow, setDropdownWindow] = useState(false);
  const [dropdownHelp, setDropdownHelp] = useState(false);
  const [dropdownWifi, setDropdownWifi] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState(false);
  const [dropdownControlCentre, setDropdownControlCentre] = useState(false);
  const [isLaunchpadVisible, setIsLaunchpadVisible] = useState(false);
  
 
  
  
  
  const toggleApple= () => {
    setDropdownApple(!dropdownApple);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const toggleFinder= () => {
    setDropdownFinder(!dropdownFinder);
    setDropdownApple(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const toggleFile= () => {
    setDropdownFile(!dropdownFile);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
  };
  const toggleEdit= () => {
    setDropdownEdit(!dropdownEdit);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownView(false);
    setDropdownFile(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const toggleView= () => {
    setDropdownView(!dropdownView);
    setDropdownApple(false)
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const toggleGo = () => {
    setDropdownGo(!dropdownGo);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const toggleWindow= () => {
    setDropdownWindow(!dropdownWindow);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const toggleHelp= () => {
    setDropdownHelp(!dropdownHelp);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isCharging, setIsCharging] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const togglebattery = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownHelp(false);
    setDropdownWindow(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };

  const toggleWifi = () => {
    setDropdownWifi(!dropdownWifi);
    setIsDropdownOpen(false);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownHelp(false);
    setDropdownWindow(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  }

  const toggleSearch = () => {
    setDropdownControlCentre(false);
    setDropdownSearch(!dropdownSearch);
    setDropdownWifi(false);
    setIsDropdownOpen(false);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownHelp(false);
    setDropdownWindow(false);
  }

  const toggleControlCentre = () => {
    setDropdownControlCentre(!dropdownControlCentre);
    setDropdownSearch(false);
    setDropdownWifi(false);
    setIsDropdownOpen(false);
    setDropdownApple(false);
    setDropdownFinder(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownHelp(false);
    setDropdownWindow(false);
  }

  
  

  

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(function (battery) {
        updateBatteryStatus(battery);

        battery.addEventListener('levelchange', () => {
          updateBatteryStatus(battery);
        });

        battery.addEventListener('chargingchange', () => {
          updateBatteryStatus(battery);
        });
      });

      const intervalId = setInterval(() => {
        navigator.getBattery().then(function (battery) {
          updateBatteryStatus(battery);
        });
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    } else {
      console.log('Battery API not supported in this browser.');
    }
  }, []);
  const [checkValue ,setCheckValue] =useState(false);
  const [wifiInfo,setWifiInfo] = useState(false);
  const WifiOn = ()=>{
    if(checkValue==false) {
      setCheckValue(true);
      setWifiInfo(!wifiInfo)
  }
  else{
    setCheckValue(false);
    setWifiInfo(false);
  }
  }
  const updateBatteryStatus = (battery) => {
    const level = Math.round(battery.level*100);
    setBatteryLevel(level);

    const charging = battery.charging;
    setIsCharging(charging);
  };

  const renderBatteryLogo = () => {
    const batteryWidth = `${batteryLevel}%`;
    const batteryColor = 'white';
    const chargingSymbol = isCharging ? (
      <i className="fa fa-bolt" style={{ fontSize: '18px', WebkitTextStroke: '0.8px black', color: 'white', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
    ) : null;
  

    return (
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(112, 110, 130)',
          WebkitTextStroke: '1px black',
          width: '22px',
          height: '10px',
          borderRadius: '0.2rem',
        }}
      >
        <div
          style={{
            height: '70%',
            width: batteryWidth,
            backgroundColor: batteryColor,
            padding: '1px',
            borderRadius: '0.1rem',
          }}
        />
      </div>
      {chargingSymbol}
    </div>
    );
  };
const [name,setName]= useState('in')

const launch = () => {
  if(isLaunchpadVisible==true) {
    setIsLaunchpadVisible(false)
    setName('out')
    setDropdownFinder(false);
    setDropdownApple(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
    setShowDropdown(false);
  }
  else if(isLaunchpadVisible==false){
    setIsLaunchpadVisible(true)
    setName('in')
  }

};

const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowDropdown(true);
    setDropdownPosition({ x: e.clientX, y: e.clientY });
    setDropdownFinder(false);
    setDropdownApple(false);
    setDropdownFile(false);
    setDropdownEdit(false);
    setDropdownView(false);
    setDropdownGo(false);
    setDropdownWindow(false);
    setDropdownHelp(false);
    setIsDropdownOpen(false);
    setDropdownWifi(false);
    setDropdownSearch(false);
    setDropdownControlCentre(false);
  };

  const handleOptionClick = (option) => {

    console.log(`Clicked option: ${option}`);
    setShowDropdown(false);
  };

  const handleOutsideClick = () => {
    setShowDropdown(false);
  };
  
    
  
  return (
    
     
 <body onContextMenu={handleContextMenu} onClick={handleOutsideClick}>
   {showDropdown && (
        <div
          className="dropdown"
          style={{ position: 'fixed', top: dropdownPosition.y, left: dropdownPosition.x }}
        >
          <div className="option" onClick={() => handleOptionClick('Option 1')}>
            <a className='ATM'>New Folder</a>
          </div>
          <div className="option" onClick={() => handleOptionClick('Option 2')}>
            <a>Get Info</a>
          </div>
          <div className="option" onClick={() => handleOptionClick('Option 3')}>
            <a className='ATM'>change Wallpaper</a>
          </div>
          <div className="option" onClick={() => handleOptionClick('Option 4')}>
            <a>Group Stack By</a>
          </div>
          <div className="option" onClick={() => handleOptionClick('Option 5')}>
            <a className='ATM'>Show View Opions</a>
          </div>
          <div className="option" onClick={() => handleOptionClick('Option 5')}>
            <a>Import from iPhone or iPad</a>
          </div>
        </div>
      )}

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
 <link rel='stylesheet' href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
 
    <div className='nav'>
      <div className="left">
      <a onClick={toggleApple}><i className="fa fa-apple"></i></a>
      <a onClick={toggleFinder}><strong>Finder</strong></a>
      <a onClick={toggleFile}>File</a>
      <a onClick={toggleEdit}>Edit</a>
      <a onClick={toggleView}>View</a>
      <a onClick={toggleGo}>Go</a>
      <a  onClick={toggleWindow}>Window</a>
      <a onClick={toggleHelp}>Help</a>
      </div>
      <div className="right">
        <a onClick={togglebattery} >{renderBatteryLogo()}</a>
      <a className='wifi'onClick={toggleWifi} ><i className='fa fa-wifi'></i></a>
      <a onClick={toggleSearch}><i className='fa fa-search'></i></a>
      <a><img className='controlcentre' onClick={toggleControlCentre} src={controlcentre}/></a>
      <a><img className='siri' src={siri}/></a>
      <a><strong><Clock/></strong></a>
      </div>
    </div>
    
  {dropdownApple && (
            <div className="dropdown-content-Apple">
              <a className='ATM'>About This Mac</a>
              <a>System Settings</a>
              <a className='ATM'>App Store</a>
              <a className='ATM' >Recent Items</a>
              <a className='ATM'>Force Quit...</a>
              <a>Sleep</a>
              <a>Restart...</a>
              <a className='ATM'>Shut Down...</a>
              <a>Lock Screen</a>
              <a className='ATM'>Log Out User...</a>
            </div>
          )}
  {dropdownFinder && (
          <div className="dropdown-content-Finder">
            <a className='ATM'>About Finder</a>
            <a className='ATM'>Settings...</a>
            <a className='ATM'>Empty Bin...</a>
            <a className='ATM'>Services</a>
            <a>Hide Finder</a>
            <a>Hide Others</a>
            <a className="show">Show All</a>
          </div>
          )}
  {dropdownFile&& (
          <div className="dropdown-content-File">
              <a>New Finder Window</a>
              <a>New Folder</a>
              <a className="show">New Folder with Selection</a>
              <a>New Smart Folder</a>
              <a>New Tab</a>
              <a className="show">Open</a>
              <a className="show">Open With</a>
              <a className='ATM'>Close Window</a>
              <a>Get Info</a>
              <a className="show">Rename</a>
              <a className="show">Compress</a>
              <a className="show">Duplicate</a>
              <a className="show">Make Alias</a>
              <a className="show">Quick Look</a>
              <a href="" className="showatm">Print</a>
              <a href="" className="showatm">Sahre...</a>
              <a href="" className="show">Show Original</a>
              <a href="" className="showatm">Add to Sidebar</a>
              <a href="" className="show">Move to Bin</a>
              <a href="" className="showatm">Eject</a>
              <div className="color">
                <a className='red'><i className='fa fa-circle'></i></a>
                <a className='orange'><i className='fa fa-circle'></i></a>
                <a className='yellow'><i className='fa fa-circle'></i></a>
                <a className='green'><i className='fa fa-circle'></i></a>
                <a className='blue'><i className='fa fa-circle'></i></a>
                <a className='purple'><i className='fa fa-circle'></i></a>
                <a className='grey'><i className='fa fa-circle'></i></a>
              </div>
              <a href="" className="showatm">Tags...</a>
              <a>Find</a>
          </div>
          )}    
  {dropdownEdit && (
          <div className="DropEdit">
             <a  className="show">Undo</a>
             <a  className="showatm">Redo</a>
             <a  className="show">Cut</a>
             <a  className="show">Copy</a>
             <a  className="show">Paste</a>
             <a  className="showatm">Select All</a>
             <a  className="ATM">Show Clipboard</a>
             <a>Start Dictation</a>
             <a>Emoji & Symbols</a>
          </div> 
          )}  
          {dropdownView && (
          <div className="DropView">
             <a className="show">as Icons</a>
             <a className="show">as Lists</a>
             <a className="show">as Columns</a>
             <a className="showatm">as Gallery</a>
             <a><i className='fa fa-check'> Use Stacks</i></a>
          </div> 
          )}
            {dropdownGo && (
          <div className="DropGo">
             <a className="show">Back</a>
             <a className="show">Forward</a>
             <a className="ATM">Enclosing Folder</a>
             <a>Recents</a>
             <a>Documents</a>
             <a>Deckstop</a>
             <a>Download</a>
             <a>Home</a>
             <a>Computer</a>
             <a>Airdrop</a>
             <a>Network</a>
             <a>iCloud Drive</a>
             <a>Shared</a>
             <a>Application</a>
             <a className="ATM">Utilities</a>
             <a className="ATM">Recent Folders</a>
             <a>Go to Folder...</a>
             <a>Connect to Sever...</a>
          </div> 
          )}
    {dropdownWindow && (
          <div className="DropWindow">
             <a className="show">Minimise</a>
             <a className="show">Zoom</a>
             <a className="show">Move Window to Left Side of Screen</a>
             <a className="show">Move Window to Right Side of Screen</a>
             <a className="showatml">Replace Tiled Window</a>
             <a className="show">Remove Window from Set</a>
             <a>Cycle through Windows</a>
             <a className="showatml">Show Progress Window</a>
             <a className="show">Show Previous Tab</a>
             <a className="show">Show Next Tab</a>
             <a className="show">Move Tab to New Window</a>
             <a className="showatml">Merage All Windows</a>
             <a>Bring All to Front</a>
          </div> 
          )}

{dropdownHelp && (
          <div className="DropHelp">
             <input type="search" placeholder='Search' />
             <a>Tips For Your Mac</a>
             <a>macOS Help</a>
          </div> 
          )}

{dropdownWifi && (
          <div className="DropWifi">
           <a>  <div className="bbc">
            <a className='bl'>Wi-fi</a>
            <a className='bl'><label className="switch">
                <input type="checkbox" onClick={WifiOn} checked={checkValue}/>
                <span className="slider"></span>
              </label></a>
          </div></a>
          {wifiInfo && (
            <div className='knownwifi'>
              <a className='wifiatm'>Known Netwokrs</a>
              
              </div>
          )}
          <a>Wi-Fi Settings...</a>
          </div> 
          )}

{isDropdownOpen && (
        <div className='dropbattery'>
          <div className="bb">
            <a className='bl'>Battery</a>
            <a className='bl'>{batteryLevel}%</a>
          </div>
          {isCharging !== null && (
            <p>Power Source: {isCharging ? 'Power Adapter' : 'Battery'}</p>
          )}
          <a>Battery Settings...</a>
        </div>
      )}
  {dropdownSearch && (
        <div className='dropSearch'>
          <a><i className='fa fa-search'></i></a>
          <input type="search" placeholder='Spotlight Search'/>
        </div>
      )}
      {dropdownControlCentre && (
        <Controlcentre/>
      )}
  


   <div whileHover={{ scale: 1.2 }} className="dock">
   <a><motion.img
        whileHover={{ scale: 1.5,translateY:-10,translateY:-10 }}
        src={finder}
        className="finder"
      /></a>
      <a>
      <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={launchpad}
        className="launchpa"
        onClick={launch}
      />
      </a>
      <a>
      <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={facetime}
        className="facetime"
      />
      </a>
      <a>
      <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={contact}
        className="contact"
      />
      </a>
       <a>
       <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={imsg}
        className="imsg"
      />
       </a>
       <a>
       <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={pinterest}
        className="pinterest"
      />
       </a>
       <a>
       <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={applemusic}
        className="applemusic"
      />
       </a>
      <a>
      <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={applestore}
        className="store"
      />
      </a>
       <a>
       <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={setting}
        className="sett"
      />
       </a>
       <a>
       <motion.img
        whileHover={{ scale: 1.5,translateY:-10 }}
        src={bin}
        className="bin"
      />
       </a>
  </div>







        

   {isLaunchpadVisible && <Launchpad className="launchpad"/>}
 </body>
  
  )
}
