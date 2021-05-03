import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check Out These EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-1.jpg"
                            text="It is the kingdom of Royal Bengal tiger and you will find
                            various kinds of species of birds, animals"
                            label="Sunderbans"
                            path="/services"
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Experience the wonderful sunrise and sunset in the only coral
                            paradise of Bangladesh'
                            label='St. Martin Island'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-2.jpg"
                            text="Undoubtedly it is a great sign of natural beauty surrounded by
                            hills and stones."
                            label="Bisanakandi"
                            path="/services"
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Enjoy the peace and tranquility of th swamp forest'
                            label='Ratargul Swamp Forest'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='discover yourself in the amazing green view of this
                            adventurous hill tracks'
                            label='Chittagong Hill Tracks'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-8.jpg'
                            text='It represents the incomplete dream of the Mughal prince.
                            The fort remained incomplete after the death of Prince Azam.  '
                            label='Lalbag Fort'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='If you want to see the land of the cloud in Bangladesh then
                            you have to visit the queen of hills'
                            label='Sajek Valley'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;