import React, {useState, useEffect} from 'react'
//CSS
import "./TweetsList.css"
import {Row, Col} from 'react-bootstrap'
// Component
import { Avatar } from 'antd';
import { UserOutlined, CommentOutlined, RetweetOutlined, 
    HeartOutlined, UploadOutlined } from '@ant-design/icons';
import Favourite from '../TweetButtons/Favourite';

function Tweet () {

    const [isFetching, setIsFetching] = useState(true)
    const [tweets, setTweets] = useState([]) 
    const [isDisplayable, setIsDisplayable] = useState(false) 

    useEffect(() => {
        fetch("http://localhost:8000/tweets")
        .then((response) => { 
            return response.json() 
        })
        .then((tweetsDataFromServer) => { 

            setTweets(tweetsDataFromServer)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, [])


    const sortedTweets = tweets.sort((a, b) => b.pk - a.pk)

    const renderListOfTweets = sortedTweets.map((tweetData, index) => {

        return (
            <>
                <Row key={index} className="tweet-feed-container">
                    <Col xs={2}>
                        <Avatar size={55} icon={<UserOutlined />} className="tweet-feed-icon"/>
                    </Col>
                    <Col xs={10}>
                        <Row className="tweet-top-row">
                            <h6 className="tweet-feed-display-name">Display name</h6>
                            <span className="tweet-feed-user-tag"> @TestUser</span>
                            <span className="tweet-date">date</span>
                        </Row>
                        <Row>
                            <p className="tweet-feed-text">{tweetData.content}</p>
                        </Row>
                        <Row className="tweet-detail-icons">
                            <Col>
                                <CommentOutlined className="tweet-comments" style={{fontSize: '20px'}} />
                            </Col>
                            <Col>
                                <RetweetOutlined className="tweet-retweet" style={{fontSize: '20px'}} />
                            </Col>
                            <Col>
                                <Favourite />
                            </Col>
                            <Col>
                                <UploadOutlined className="tweet-share" style={{fontSize: '20px'}}/>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
                <hr />
            </>
        )
    })

    const renderLogic = (isFetching)?(
        <h1>Loading</h1>
    ):((isDisplayable)?(renderListOfTweets):(<h1>Not Loaded</h1>))


    return (
        <>
            {renderLogic}
        </>
    )
}

export default Tweet