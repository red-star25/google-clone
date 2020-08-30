import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core'
import Search from '../components/Search'

function Home() {
    return (
        <div className="home">
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>
            </div>
            <div className="home__headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
                <AppsIcon/>
                <Avatar/>
            </div>
        </div>            
        <div className="home__body">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
            <div className="home__inputContainer">
                <Search hideButtons/>
            </div>
        </div>
        <div className="home__bottomFirst">
            <p>India</p>
        </div>
        
        <div className="home__bottomSecond">
            <div className="bottomFirst__span">
            <span>Advertising</span>
            <span>Business</span>
            <span>About</span>
            <span>How Search works</span>
            </div>
            
            <div className="bottomFirst__span bottomSecond__span">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Settings</span>
            </div>
            
        </div>

        </div>
    )
}

export default Home
