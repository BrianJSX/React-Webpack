import React from 'react'
import Slider from '../../components/Slider'
import Banner from '../../features/Banner'
import Menu from '../../features/Menu';
import ProductPopular from '../../features/ProductPopular';

function Home() {
    return (
        <div className="homePage">
            <Slider></Slider>
            <Menu></Menu>
            <Banner></Banner>
            <ProductPopular></ProductPopular>
        </div>
    )
}

export default Home
