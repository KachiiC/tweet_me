import React from 'react'
// CSS
import './LeftMenuBar.css'
import {Col} from 'react-bootstrap'
// Components
import { Menu, Button } from 'antd';
import {Link} from 'react-router-dom'
import { TwitterOutlined, AppstoreOutlined, MessageOutlined, ThunderboltOutlined, 
        SelectOutlined, BarChartOutlined, QuestionCircleOutlined, FormOutlined} from '@ant-design/icons';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LeftMenuList from './LeftMenuList'


function LeftMenuBar () {

    const { SubMenu } = Menu;

    const renderMainMenu = LeftMenuList.map((menu) => {

      return (
              <Menu.Item key={menu.key} icon={menu.icon}>
                <Link to={`/${menu.Name}`} className="twitter-menu-left-text">{menu.Name}</Link>
              </Menu.Item>
      )

    })

    return (

      <Col xs={3} className="twitter-menu-left">
        <Menu style={{ width: 280 }} defaultOpenKeys={['sub1']} mode="inline">
          <Menu.Item key="0" icon={<TwitterOutlined style={{fontSize: '30px'}}/>}/>
            <Menu.ItemGroup key="g1" >
              {renderMainMenu}
            </Menu.ItemGroup>

            <SubMenu key="sub2" icon={<AppstoreOutlined style={{fontSize: '30px'}}/>} 
              title="More" className="twitter-menu-left-text">
              <Menu.Item key="8" icon={<MessageOutlined style={{fontSize: '20px'}}/>}>Topics</Menu.Item>
              <Menu.Item key="9" icon={<ThunderboltOutlined style={{fontSize: '20px'}}/>}>Moments</Menu.Item>
              <Menu.Item key="10" icon={<SelectOutlined style={{fontSize: '20px'}}/>}>Twitter Ads</Menu.Item>
              <Menu.Item key="11" icon={<BarChartOutlined style={{fontSize: '20px'}}/>}>Analytics</Menu.Item>
              <hr/>
              <Menu.Item key="12" icon={<SettingsOutlinedIcon style={{fontSize: '25px'}}/>}> Settings and privacy</Menu.Item>
              <Menu.Item key="13" icon={<QuestionCircleOutlined style={{fontSize: '20px'}}/>}>Help Center</Menu.Item>
              <Menu.Item key="14" icon={<FormOutlined style={{fontSize: '20px'}}/>}>Display</Menu.Item>
            </SubMenu>
            <Button type="primary" shape="round" className="lg-tweet-button">Tweet</Button>
        </Menu>    
      </Col>
    );
}

export default LeftMenuBar