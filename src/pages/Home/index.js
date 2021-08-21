import React from 'react'
import Slider from '../../components/Slider'
import Banner from '../../features/Banner'
import Menu from '../../features/Menu';

function Home() {
    return (
        <div className="homePage">
            <Slider></Slider>
            <Menu></Menu>
            <Banner></Banner>
        </div>
    )
}

export default Home
