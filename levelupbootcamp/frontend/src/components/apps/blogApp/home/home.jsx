import React, { useState, useEffect } from 'react';
import AppHeader from '../header/header';
import AppFooter from '../footer/footer';
import { Card, Timeline } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { Col, Row } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Header, Sider, Content } = Layout;

const formatDate = (rawDate) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Date(rawDate).toLocaleDateString(undefined, options);
  return formattedDate;
};

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isAdditionalVisible, setIsAdditionalVisible] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Date(currentDate).toLocaleDateString(undefined, options);

  // const currentDate = formatDate();
  
  const cardData = Array.from({ length: 14 }, (_, index) => ({
    key: index + 1,
    user: `user useruseruseruser${index + 1}`,
    title: `Card ${index + 1}`,
    description: `Description for Card sdfdssdfsdfsdfsdfsdfsdsfsdfsfsdfss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit${index + 1}`,
    date: `${formattedDate}`,
    imageUrl: `https://unsplash.it/500?random=${index + 1}`,
  }));

  const handleToggleVisibility = () => {
    if (isAdditionalVisible) {
      setVisibleCards(4);
    } else {
      setVisibleCards(cardData.length);
    }
    setIsAdditionalVisible(!isAdditionalVisible);
  };


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();



  const timelineItems = [
    {
      children: 'Create account',
    },
    {
      children: 'Prepare your blog or articles',
    },
    {
      children: 'Post Your Article or blog',
    },
    {
      children: 'Done!',
    },

    ]


 
    
  return (
    <>
          <AppHeader></AppHeader>
       
<Layout style={{ padding: "0 10%"}}>

<h1 style={{ textAlign: "left" }}> Today's Blog & Articles </h1>
<Row gutter={24} style={{ display: 'flex', alignItems: 'center' }}>

      <Col  xs={24} md={12}>
        <img alt="" src="https://unsplash.it/700" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px'}} />
      </Col>

      <Col xs={24} md={12} >
        <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem4adipisicing e   </h1>
    
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, impedit. consectetur adipisicing elit. Totam, impedit. </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit. Est ipsum nostrum dolorem repudiandae? Asperiores iure possimus ea omnis ab nihil! Laudantium dolore nam impedit dolores eveniet dolor recusandae architecto, vero optio quidem? </p>
        <span>🗓️ {formatDate(currentDate)}</span>
        <br/> <br/>
        <span> <b>Read More.. </b> </span>
      </Col>
    </Row>

  <>
<br/>

  <h1 style={{ textAlign: "left" }}> Blog & Articles   </h1>
  <Row gutter={24} style={{ }}>
<Col md={17} style={{ }} >

{cardData.slice(0, visibleCards).map((card) => (
         
 
         <Col xs={24} md={24} key={card.key} style={{ display: "flex", alignItems: "center", margin: "1% 0" , padding: "2% 0", background: "#fff", borderRadius: '8px'}} >
           <Col xs={4} md={3} >          
           <img alt="" src={card.imageUrl} style={{ width: '100%',borderRadius: '3px'}} />

           </Col>

           <Col xs={19} md={19} >
           <h2>{card.title } </h2>
        
           <p> {card.description} </p>
          
         <p>
         <span> <b> {card.user}, </b> </span>
          🗓️ {card.date}

          </p>
               </Col>
          
          
               </Col>
             
                    
             
       ))}
</Col>
  

            <Col md={7} style={{  background: "#fff", borderRadius: '8px', margin: "10px 0", height: "calc(100vh - 300px)", overflow: "hidden"}}>
            
            <h2>Recent </h2>
            <hr/>
 
         <Col xs={24} md={24}   >

           <Col xs={24}  >
           <h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit! </h3>
           <p>🗓️ sdsdsds </p>
               </Col>
          
          
               </Col>
             
                    
               <Col xs={24} md={24}   >

<Col xs={24}  >
<h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit! </h3>
<p>🗓️ sdsdsds </p>
    </Col>


    </Col>
  
         
  
    <Col xs={24} md={24} >

<Col xs={24}  >
<h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit! </h3>
<p>🗓️ sdsdsds </p>

    </Col>


    </Col>
    <Col xs={24} md={24} >

<Col xs={24}  >
<h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit! </h3>
<p>🗓️ sdsdsds </p>

    </Col>


    </Col>
  
         
  

       
            </Col>    
 

      </Row>
   

      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <Button icon={isAdditionalVisible ? <ArrowLeftOutlined /> : <ArrowRightOutlined />} onClick={handleToggleVisibility}>
          {isAdditionalVisible ? 'Hide' : 'View More'}
        </Button>
      </div>


    </>
    <br/>
    <br/>
    <Row gutter={24} style={{ background: "#fff", padding: "2%", alignItems: "center"}}>



    <Col xs={24} md={13} style={{ }}>
    <h1> How do I Publish Blog? </h1>
       <Timeline mode="left">
      {timelineItems.map((item, index) => (
        <Timeline.Item key={index} style={{ fontSize: '1rem'}}>
          {item.children}
        </Timeline.Item>
      ))}
    </Timeline>
   
  </Col>


  <Col xs={24} md={11} >
    <h1 style={{ fontSize: "40px"}}> Total Blog or Articles Published:   <span style={{ fontSize: "52px"}}> 150 <span style={{ fontSize: "64px",margin: 0, padding: 0}}> + </span> </span></h1>
  
    </Col>

</Row>

</Layout>
    <AppFooter/>
    </>
  );
};
export default Home;


