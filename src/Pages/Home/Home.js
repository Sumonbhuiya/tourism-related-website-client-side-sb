import React from 'react';
import Banner from '../../Components/HomePage/Banner/Banner';
import ChooseUs from '../../Components/HomePage/ChooseUs/ChooseUs';
import Exparts from '../../Components/HomePage/Exparts/Exparts';
import Services from '../../Components/HomePage/Services/Services';
import SlideShow from '../../Components/HomePage/SlideShow/SlideShow';

const Home = () => {
    return (
        <div>
            {/* call route from component  */}
            <Banner></Banner>
            <SlideShow></SlideShow>
            <Services></Services>
            <Exparts></Exparts>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;