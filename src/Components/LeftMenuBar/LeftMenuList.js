import React from 'react'
import {HomeOutlined, BorderlessTableOutlined, BellOutlined, MailOutlined, 
        BookOutlined, BarsOutlined, UserOutlined,} from '@ant-design/icons'

const LeftMenuList = [

    {
        key: 1,
        Name: "Home",
        icon: <HomeOutlined style={{fontSize: '30px'}} />
    },
    {
        key: 2,
        Name: "Explore",
        icon: <BorderlessTableOutlined style={{fontSize: '30px'}}/>
    },
    {
        key: 3,
        Name: "Notifications",
        icon: <BellOutlined style={{fontSize: '30px'}}/>
    },
    {
        key: 4,
        Name: "Messages",
        icon: <MailOutlined style={{fontSize: '30px'}}/>
    },
    {
        key: 5,
        Name: "Bookmarks",
        icon: <BookOutlined style={{fontSize: '30px'}}/>
    },
    {
        key: 6,
        Name: "Lists",
        icon: <BarsOutlined style={{fontSize: '30px'}}/>
    },
    {
        key: 7,
        Name: "Profile",
        icon: <UserOutlined style={{fontSize: '30px'}}/>
    },

]

export default LeftMenuList;