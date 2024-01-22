import React, { useState, useEffect } from "react";
import { Layout, Space, Col, Row, Card, Button, List, Skeleton, Avatar, Collapse, Divider, Modal, Result, Input } from "antd";
import AppHeader from "../../header/header";
import AppFooter from "../../footer/footer";
import { Link } from "react-router-dom";

import { EditOutlined, CloseOutlined, SearchOutlined, FacebookOutlined,
     TwitterOutlined, InstagramOutlined, GithubOutlined, LinkedinOutlined, 
     SaveOutlined, DeleteOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Meta } = Card;

const UserProfile = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const [blogData, setBlogData] = useState([]);
    const [blogList, setBlogList] = useState([]);
    const [editImage, setEditImage] = useState(null);

    const [currentUser, setCurrentUser] = useState(null);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const [userFullDetails, setUserFullDetails] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [editUsername, setEditUsername] = useState(localStorage.getItem("user_name") || "username");
    const [firstUserImg, setFirstUserImg] = useState({ image: "" }); // Initial value with an empty string

    const showModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleDeleteOk = async () => {
        // Get user id from localStorage
        const userId = localStorage.getItem("user_id");

        try {
            // Make a DELETE request to delete the user account
            const response = await fetch(`http://127.0.0.1:8000/account/api/user/delete/${userId}/`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (response.ok) {
                // Successful deletion
                console.log("User account deleted successfully");

                // Redirect to the specified path after successful deletion
                window.location.href = "/";
            } else {
                // Handle error
                console.error("Error deleting user account");
            }
        } catch (error) {
            console.error("Error:", error);
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
        fetchImageData();
        fetchBlogData(); // Call the async function when the component mounts

        // cleanup function if needed
        return () => {
            // cleanup logic
        };
    }, []);

    const handleUserDetailEdit = () => {
        setIsEdit(true);
    };

    const handleUserDetailCancel = () => {
        setIsEdit(false);
        setEditUsername(localStorage.getItem("user_name") || "username");
     
        setEditImage(null); // Reset image
    };

    const fetchImageData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/account/api/userdetails/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            const data = await response.json();
            console.log(data);
            console.log(data.image);
            setFirstUserImg({ image: data.image });

            if (data.length > 0) {
                localStorage.setItem("user_image", data.image);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateUsername = async () => {
        try {
            // Get user id from localStorage
            const userId = localStorage.getItem("user_id");

            // Make a PUT request to update the username
            const response = await fetch(`http://127.0.0.1:8000/account/api/user/update/${userId}/`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: editUsername,
                }),
            });

            if (response.ok) {
                // Successful update
                console.log("Username updated successfully");

                // Save the updated username in localStorage
                localStorage.setItem("user_name", editUsername);
            } else {
                // Handle error
                console.error("Error updating username");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const updateImage = async () => {
        try {
            // Get user id from localStorage
            const userId = localStorage.getItem("user_id");

            // Create a FormData object to handle the image upload
            const formData = new FormData();
            formData.append("image", editImage);

            // Make a PATCH request to update user details with the image
            const imageResponse = await fetch(`http://127.0.0.1:8000/account/api/userdetails/`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: formData,
            });

            if (imageResponse.ok) {
                // Successful image update
                console.log("User details updated successfully with image");

                // Assuming the server responds with the new image URL or identifier
                const responseData = await imageResponse.json();

                // Store the image URL or identifier in localStorage
                localStorage.setItem("user_image", responseData.image);
            } else {
                // Handle image update error
                console.error("Error updating user details with image");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleUserDetailSave = async () => {
        // Check if there are changes in the username
        if (editUsername !== localStorage.getItem("user_name")) {
            await updateUsername();
        }

        // Check if there is an image to upload
        if (editImage) {
            await updateImage();
        }

        // Set isEdit to false after saving
        setIsEdit(false);
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        setEditImage(file);
    };

    return (
        <>
            <AppHeader />

            <Layout style={{ padding: "0 10%" }}>
                <br />

                <Row>
                    <Col md={10} style={{ margin: "1%" }}>
                        <Card hoverable style={{}} cover={<img alt="example" src={firstUserImg?.image || ""} style={{ padding: "15px" }} />}>
                            
                            {isEdit ? (
                                <>
                                
                                    <label>
                                        <b>Username</b>
                                    </label>
                                    <Input value={editUsername} onChange={(e) => setEditUsername(e.target.value)} style={{ border: "1px solid #000", minHeight: "35px", background: "none" }} placeholder="Write your blog content here." />
                                    <label>
                                        <b>Profile Image</b>
                                    </label>
                                    <Input type="file" onChange={(e) => handleProfileImageChange(e)} style={{ border: "1px solid #000", minHeight: "35px", background: "none" }} />
                                    <div>
                                        <br />
                                    </div>
                                    <Button icon={<CloseOutlined />} onClick={handleUserDetailCancel}>
                                        Cancel
                                    </Button>
                                    &nbsp; &nbsp;
                                    <Button icon={<SaveOutlined />} onClick={handleUserDetailSave}>
                                        Save
                                    </Button>
                                  
                                    <br />
                                </>
                            ) : (
                                <Meta
                                    title={localStorage.getItem("user_name") || "username"}
                                    description={
                                        <>
                                            <p>
                                                <strong>Email:</strong> {localStorage.getItem("user_email")}
                                            </p>
        
                                        </>
                                    }
                                />
                            )}
                            <br />
                            <Button icon={<EditOutlined />} onClick={handleUserDetailEdit}>
                                Edit
                            </Button>
                            &nbsp; &nbsp;
                            <Button danger icon={<DeleteOutlined />} onClick={showModal}>
                                Delete Account
                            </Button>
                            {isEdit ? <div></div> : <div></div>}
                            <Modal title="Confirm Delete" visible={isDeleteModalVisible} onOk={handleDeleteOk} onCancel={handleDeleteCancel} okText="Delete" cancelText="Cancel" okButtonProps={{ danger: true }}>
                                <p>Are you sure you want to delete your account?</p>
                                <p>This action cannot be undone.</p>
                            </Modal>
                        </Card>
                    </Col>

                    <Col md={13} style={{ background: "#fff", margin: "1%", borderRadius: "8px" }}>
                    

                        <Row style={{ padding: "0 4%", marginTop: 0 }}>
                            <br />

                            <Col md={24} style={{ padding: "0 0 3% 0" }}>
                                <h2> Blogs {blogList.length === 0 ? 0 : blogList.length}</h2>
                                {blogList.length === 0 ? (
                                    <Result status="404" title="No Blogs Found" subTitle="You haven't published any blogs yet." />
                                ) : (
                                    <Row gutter={24}>
                                       
                                    </Row>
                                )}

                                {blogList.length > 0 && (
                                    <div style={{ textAlign: "center", marginTop: "1%" }}>
                                        <hr />
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
