import React from 'react'
import applestore from './icon/applestore.png'
import setting from './icon/setting.png'
import contact from './icon/contact.png'
import imsg from './icon/imessage.png'
import facetime from './icon/facetime.png'
import applemusic from './icon/applemusic.png'
import pinterest from './icon/pinterest.png'
import books from './icon/_Apple Apps on the App Store.jpeg'
import safari from './icon/safari.png'
import photos from './icon/photos.jpeg'
import twitter from './icon/Humanities Salon Conversations _ Carolina Public Humanities.png'
import imovie from './icon/iCons - Apple App Icons (1).png'
import pages from './icon/iCons - Apple App Icons (2).png'
import clock from './icon/iCons - Apple App Icons.png'
import podcast from './icon/_.jpeg'
import shortcut from './icon/Siri personaliseren met Opdrachten (Shortcuts) voor iPhone en iPad.png'
import insta from './icon/professionally manage and promote your instagram.jpeg'
import whatsapp from './icon/Whatsapp Icon Logo PNG Vector (AI) Free Download.png'
import procreate from './icon/Watercolor Florals in Procreate.png'
import prime from './icon/prime.jpeg'
import findmy from './icon/findmy.png'
import garageband from './icon/GarageBand User Guide for iPhone.png'
import linkedin from './icon/linked'
import calculator from './icon/Calculator.jpeg'
import github from './icon/GitHub Logo PNG Vector (AI) Free Download.png'
import lightroom from './icon/Lightroom Presets Free - AmmanPatro_in, Free Video Luts, Moody Green Presets, Summer Free Presets, Wedding Lightroom Presets.jpeg'
import notes from './icon/Notes Icon iOS 7.png'
import appleTv from './icon/appletv.jpeg'
import game from './icon/game.jpeg'
import stock from './icon/Stocks iOS icon.jpeg'
import soptify from './icon/spotify.png'
import figma from './icon/Figma’s new icon _ Figma Blog.png'
import discord from './icon/dicord.jpeg'
import vscode from './icon/Multimedia Android _Visual System _Sign In Boihasbullah 9.jpeg'
import disney from './icon/disney'
import './Launchpad.css'


export default function Launchpad({ className }) {
  return (
    <>
     <div className={`launchpad ${className}`}>
    <div className="app">
    <input type="search" name="" id="" placeholder='Search' />
       <div className="column">
        <a><img src={applestore} className='applestore' alt="" /><p>App Store</p></a>
        <a> <img src={setting} className='setting' alt="" /><p>Settings</p></a>
        <a><img src={applemusic} className='music' alt="" /><p>Music</p></a>
        <a><img src={imsg} className='msg' alt="" /><p>Message</p></a>
        <a><img src={facetime} className='face' alt="" /><p>Facetime</p></a>
        <a><img src={contact} className='con' alt="" /><p>Contacts</p></a>
        <a><img src={pinterest} className='pin' alt="" /><p>Pinterest</p></a>
       </div>
       <div className="column">
        <a><img src={imovie} className='imovie' alt="" /><p>Imovie</p></a>
        <a><img src={pages} className='pages' alt="" /><p>Pages</p></a>
        <a><img src={clock} className='clock' alt="" /><p>Clock</p></a>
        <a><img src={safari} className='safari' alt="" /><p>Safari</p></a>
        <a><img src={photos} className='photos' alt="" /><p>Photos</p></a>
        <a><img src={twitter} className='twitter' alt="" /><p>Twitter</p></a>
        <a><img src={books} className='books' alt="" /><p>Books</p></a>
       </div>
       <div className="column">
        <a><img src={podcast} className='podcast' alt="" /><p>Podcast</p></a>
        <a><img src={findmy} className='findmy' alt="" /><p>FindMy</p></a>
        <a><img src={procreate} className='procreate' alt="" /><p>Procreate</p></a>
        <a><img src={whatsapp} className='whatsapp' alt="" /><p>WhatsApp</p></a>
        <a><img src={insta} className='insta' alt="" /><p>Instagram</p></a>
        <a><img src={shortcut} className='shortcut' alt="" /><p>Shortcut</p></a>
        <a><img src={prime} className='prime' alt="" /><p>Prime Video</p></a>
       </div>
       <div className="column">
        <a><img src={notes} className='notes' alt="" /><p>Notes</p></a>
        <a><img src={garageband} className='band' alt="" /><p>GarageBand</p></a>
        <a><img src={appleTv} className='appletv' alt="" /><p>TV</p></a>
        <a><img src={github} className='github' alt="" /><p>GitHub</p></a>
        <a><img src={linkedin} className='linkedin' alt="" /><p>LinkedIn</p></a>
        <a><img src={calculator} className='calculator' alt="" /><p>Calcultor</p></a>
        <a><img src={lightroom} className='lightroom' alt="" /><p>Lightroom</p></a>
       </div>
       <div className="column">
        <a><img src={game} className='game' alt="" /><p>Asphalt</p></a>
        <a><img src={figma} className='figma' alt="" /><p>Figma</p></a>
        <a><img src={vscode} className='vscode' alt="" /><p>VSCode</p></a>
        <a><img src={soptify} className='spotify' alt="" /><p>Spotify</p></a>
        <a><img src={discord} className='discord' alt="" /><p>Dicord</p></a>
        <a><img src={stock} className='stock' alt="" /><p>Stocks</p></a>
        <a><img src={disney} className='disney' alt="" /><p>Disney+</p></a>
       </div>
    </div>
    </div>
    </>
  )
}
