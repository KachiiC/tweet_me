import React from 'react'
// CSS
import './index.css'
import HomeNav from './Components/HomeNav'
// Components
import TweetForm from '../../Components/TweetForm'
import TweetList from '../../Components/TweetFeed/TweetsList'


function Home () {

    return (
        <>
            <HomeNav />
            <div className='home-tweet-form'>
                <TweetForm/>
                <hr/>
                <TweetList />
            </div>
        </>
    )
}

export default Home