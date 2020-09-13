import React from 'react'
//CSS
import './RightMenuBar.css'
import {Col, ListGroup} from 'react-bootstrap'
// Components
import {Link} from 'react-router-dom'
import Trending from './TrendingData'
import { Input } from 'antd';



function RightMenuBar () {

    const { Search } = Input;

    const TrendingList = Trending.map((trend) => {
        return (
            <ListGroup.Item variant="light" className="trend-block">
                <span className="trends-span-text">Trending in {trend.country}</span>
                <h5 className="trends-subject-title">{trend.title}</h5>
                <span className="trends-span-text">{trend.number_of_tweets} tweets</span>
            </ListGroup.Item>
        )
    } )

    return (
        <Col xs={3}>
            <div className="search-nav-border">
                <Search placeholder="Search Tweets" onSearch={value => console.log(value)}
                style={{ height: 40, width: 300 }}/>
            </div>
            <ListGroup className="main-right-menu">
                <ListGroup.Item variant="light">
                <h5 className="trending-heading">What's Happening</h5>
                </ListGroup.Item>
                    {TrendingList}
                <ListGroup.Item variant="light">
                    <Link to="/explore" className="show-more-explore">Show more</Link>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    )
}

export default RightMenuBar