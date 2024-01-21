import React, { useState, useEffect } from "react";
import { Layout, Space, Col, Row, Card, Button, List, Skeleton, Avatar, Collapse, Divider , Modal,Result} from "antd";
import AppHeader from "../../header/header";
import AppFooter from "../../footer/footer";
import { Link } from 'react-router-dom';

import { EditOutlined, SearchOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, GithubOutlined, LinkedinOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Meta } = Card;

const additionalInformation = [
    { label: "Address", value: "Itahari-20 Tarahara Sunsari" },
    { label: "Phone", value: "123-456-7890" },
    // Add more information as needed
];


const UserProfile = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const [blogData, setBlogData] = useState([]);
    const [blogList, setBlogList] = useState([]);
    
    const [currentUser, setCurrentUser] = useState(null);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);


    

  const showModal = () => {
    setIsDeleteModalVisible(true);
  };
  const handleDeleteOk = async () => {
    // Get user id from localStorage
    const userId = localStorage.getItem('user_id');
  
    try {
      // Make a DELETE request to delete the user account
      const response = await fetch(`http://127.0.0.1:8000/account/api/user/delete/${userId}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
  
      if (response.ok) {
        // Successful deletion
        console.log('User account deleted successfully');
  
        // Redirect to the specified path after successful deletion
        window.location.href = '/';
      } else {
        // Handle error
        console.error('Error deleting user account');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setIsDeleteModalVisible(false);
  };
  

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };




useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/blog/api/user-blog-list/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
  
        const data = await response.json();
        setInitLoading(false);
        setBlogList(data);
  
        if (data.length > 0) {
          // console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchBlogData(); // Call the async function when the component mounts
  
    // cleanup function if needed
    return () => {
      // cleanup logic
    };
  }, []);
  




    return (
        <>
            <AppHeader />

            <Layout style={{ padding: "0 10%" }}>
                <br />

                <Row>
                    <Col md={10} style = {{ margin: "1%"}}>
                        <Card hoverable style={{}} cover={<img alt="example" src="https://unsplash.it/1090" style={{ padding: "15px" }} />}>
                            <Meta
                                title={`${localStorage.getItem("user_name")}` || "username: "}
                                description={
                                    <>
                                        <p> <strong> Email:</strong> {`${localStorage.getItem("user_email")}`} </p>
                                        {additionalInformation.map((info, index) => (
                                            <p key={index}>
                                                <strong>{info.label}:</strong> {info.value}
                                            </p>
                                        ))}
                                    </>
                                }
                                // avatar={<img src="" alt="Avatar" />}
                                style={{ color: "blue" }}
                                onClick={() => console.log("Card Clicked")}
                                // ... other properties
                            />
                            <Button icon={<EditOutlined />}>edit</Button>
                            &nbsp; &nbsp;
                            <Button icon={<SaveOutlined />}>Save</Button>
                            &nbsp; &nbsp;
                            {/* <Button danger icon={<DeleteOutlined />}>
                                Delete Account{" "}
                            </Button> */}


<Button danger icon={<DeleteOutlined />} onClick={showModal}>
        Delete Account
      </Button>
      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete your account?</p>
        <p>This action cannot be undone.</p>
      </Modal>
                        </Card>
                    </Col>

                    <Col md={13} style={{ background: "#fff", margin: "1%", borderRadius: "8px" }}>
                        <Col md={24}>
                            <Row style={{ padding: "0 3%" }}>
                                <Col md={24}>

                                  
                                    <h2> About: </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse nobis corrupti cum numquam libero inventore et, rerum id sed consequatur aperiam laboriosam a blanditiis. Quis, suscipit!
                                        Consectetur perferendis tenetur aspernatur incidunt blanditiis esse obcaecati facilis, harum perspiciatis est odit quibusdam in illo dolores eligendi sed ullam officia reiciendis fugiat.
                                    </p>
                                    <p> Joined On 2020 | Total Blogs Published: 5</p>
                                    <Button icon={<EditOutlined />}>edit</Button>
                                    &nbsp; &nbsp;
                                    <Button icon={<SaveOutlined />}>Save</Button>
                        
                                </Col>
                        
                            </Row>
                            
                        </Col>
                   
                        <Row style={{ padding: "0 4%", marginTop: 0 }}>
                       
  <br />
  <h2> Blogs {blogList.length === 0 ? 0 : blogList.length}</h2>
  <Col md={24} style={{ padding: "0 0 3% 0" }}>
    {blogList.length === 0 ? (
      <Result status="404" title="No Blogs Found" subTitle="You haven't published any blogs yet." />
    ) : (
      <Row gutter={24}>
        {blogList.slice(0, 4).map((item) => (
          // Import the Link component from react-router-dom

// ... (other imports and code)

<Col key={item.id} md={11} style={{ height: "150px", overflow: "hidden", border:"1px solid #d9d9d9", borderRadius: "5px", margin: "1%",padding: "2%", boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02);" }}>
  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" , }}>
    <div style={{ textAlign: "left" , }}>
      {/* Use Link to create a link to the Details page with the item.id in the URL */}
      {/* <Link to={`/details/${item.id}`}> */}
        <img src="https://unsplash.it/3224" alt="Blog" style={{ width: "50px", height: "auto", borderRadius: "50%", marginBottom: 8 }} />
      {/* </Link> */}
    </div>
    <div style={{ textAlign: "center" }}>
      &nbsp;
      {/* Use Link to create a link to the Details page with the item.id in the URL */}
      <Link to={`/details/${item.id}`} style={{ fontWeight: "normal", alignItems: "start", color: "#000" }}>
        {item.title}
      </Link>
    </div>
  </div>
  <div style={{ color: "#888", marginTop: 4 }}>{item.description}</div>
  <div style={{ marginTop: 8 }}>
    {/* Use Link to create a link to the Details page with the item.id in the URL */}
    <Link to={`/blogs`}>View Blogs</Link>
  </div>
</Col>

        ))}
      </Row>
    )}

    {blogList.length > 0 && (
      <div style={{ textAlign: "center", marginTop: "1%" }}>
        <hr/>
        <Button onClick={() => (window.location.href = "/blogs")}>View More</Button>
      </div>
    )}
  </Col>
</Row>


                    </Col>
                </Row>
            </Layout>

            <AppFooter />
        </>
    );
};

export default UserProfile;
