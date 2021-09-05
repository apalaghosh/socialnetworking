import React from 'react'
import Navbar from "../../components/navbar/Navigationbar"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/newsfeed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

export default function Home() {
    

    return (
        <div>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    )
}
