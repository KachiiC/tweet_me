import React from 'react'
// CSS
import './index.css'
import {Row, Col} from 'react-bootstrap'
// Components
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PictureOutlined, GifOutlined, AlignLeftOutlined, 
        SmileOutlined,CalendarOutlined } from '@ant-design/icons';
import TextField from '@material-ui/core/TextField';

function refreshPage() {
  window.location.reload(false);
}

function Tweet (props) {

  const {register, handleSubmit} = useForm();

  const onSubmit = data => {

    fetch('http://127.0.0.1:8000/post_tweet/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      window.location.reload(false)
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })

  }
    
    return (

      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={2}>
            <Avatar size={75} icon={<UserOutlined />} className="profile-icon"/>
          </Col>
          <Col xs={10}>
              <TextField ref={register} name="tweet" type="text" id="outlined-multiline-static" inputRef={register}
              className="input-tweet" placeholder="What's Happening?" multiline rows={4} />
          </Col>
        </Row>
        <Row className="tweet-buttons-container">
        <Col xs={9}>
          <PictureOutlined className="tweet-icon" style={{fontSize: '20px'}} />
          <GifOutlined className="tweet-icon" style={{fontSize: '20px'}} />
          <AlignLeftOutlined className="tweet-icon" style={{fontSize: '20px'}} />
          <SmileOutlined className="tweet-icon" style={{fontSize: '20px'}} />
          <CalendarOutlined className="tweet-icon" style={{fontSize: '20px'}} />
        </Col>
          <Col xs={3}>
            <Button variant="contained" size="medium" color="primary" type="submit" onClick={refreshPage}>
              Tweet
            </Button>
          </Col>
        </Row>
      </form>
    )
}

export default Tweet