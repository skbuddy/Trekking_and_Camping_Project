import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import '../App.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out these EPIC Destinations!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper_1">
                    <ul className="cards__items">
                        <CardItem
                        src='https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="Trekking:-Multi-day hiking in the mountainous regions of uttrakhand." 
                        label='Trekking'
                        path='/services'
                        />
    
                        <CardItem
                        src='https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        text="Away from home in a shelter, such as a tent or a recreational vehicle."
                        label='Camping'
                        path='/services'
                        />

                        
                       <CardItem
                        src='https://images.pexels.com/photos/1834404/pexels-photo-1834404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="Explore the hidden waterfall deep inside the Mountains and Jungle."
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
                <div className="cards__wrapper_2">
                    <ul className="cards__items">
                        <CardItem
                        src='https://images.pexels.com/photos/3702806/pexels-photo-3702806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="Recreational & competitive adventure sport of flying paragliders."
                        label='Paragliding'
                        path='/services'
                        />
    
                        <CardItem
                        src='https://images.unsplash.com/photo-1572290795774-0e4ccb195043?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
                        text="Adventure activity with the help of rope & other equipment tools."
                        label='Rappelling'
                        path='/services'
                        />

                        <CardItem
                        src='https://images.pexels.com/photos/1732278/pexels-photo-1732278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="Recreational activities which use an inflatable raft to explore a river."
                        label='River Rafting'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
