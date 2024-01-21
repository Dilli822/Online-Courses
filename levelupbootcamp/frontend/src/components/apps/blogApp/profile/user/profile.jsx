import React, { useState, useEffect } from "react";
import { Layout, Space, Col, Row, Card, Button, List, Skeleton, Avatar, Collapse, Divider, Modal, Result, Input } from "antd";
import AppHeader from "../../header/header";
import AppFooter from "../../footer/footer";
import { Link } from "react-router-dom";

import { EditOutlined, CloseOutlined, SearchOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, GithubOutlined, LinkedinOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";

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
    const [editDescription, setEditDescription] = useState(localStorage.getItem("user_email"));
    const [editPhoneNumber, setEditPhoneNumber] = useState();
    const [editUserAddress, setEditUserAddress] = useState();
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
        setEditPhoneNumber(""); // Reset phone number
        setEditUserAddress(""); // Reset user address
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
                            {/* <Meta
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
                            &nbsp; &nbsp; */}
                            {/* <Button danger icon={<DeleteOutlined />}>
                                Delete Account{" "}
                            </Button> */}
                            {isEdit ? (
                                <>
                                    {/* <label> <b>phoneno: </b> </label> 

<Input
            value={
              editPhoneNumber
            }
            onChange={(e) => setEditPhoneNumber(e.target.value)}
            style={{  border: "none", minHeight: "35px", background: "none" }}

            
     
            placeholder="phone number"
          />
         <label> <b>address:</b> </label> 
<Input
            value={
              editUserAddress
            }
            onChange={(e) => setEditUserAddress(e.target.value)}
            style={{  border: "none", minHeight: "35px", background: "none" }}
     
        
            placeholder="address"
          />

         <div>
      
            */}
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
                                    {/* </div> */}
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
                                            {/* // Conditional rendering of user details */}
                                            {/* {userFullDetails && userFullDetails.length > 0 ? (
  userFullDetails.map((info) => (
    <p>
      <strong>Address:</strong> {info.address}, <strong>Phone Number:</strong> {info.phone_number}
    </p>
  ))
) : (
  <p>No user details available.</p>
)} */}
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
                        <Col md={24}>
                            <Row style={{ padding: "0 3%" }}>
                                <Col md={24}>
                                    {/* <h2> About: </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse nobis corrupti cum numquam libero inventore et, rerum id sed consequatur aperiam laboriosam a blanditiis. Quis, suscipit!
                                        Consectetur perferendis tenetur aspernatur incidunt blanditiis esse obcaecati facilis, harum perspiciatis est odit quibusdam in illo dolores eligendi sed ullam officia reiciendis fugiat.
                                    </p> */}
                                    {/* <p> Joined On 2020 </p> */}
                                    {/* <Button icon={<EditOutlined />}>edit</Button>
                                    &nbsp; &nbsp;
                                    <Button icon={<SaveOutlined />}>Save</Button> */}
                                </Col>
                            </Row>
                        </Col>

                        <Row style={{ padding: "0 4%", marginTop: 0 }}>
                            <br />

                            <Col md={24} style={{ padding: "0 0 3% 0" }}>
                                <h2> Blogs {blogList.length === 0 ? 0 : blogList.length}</h2>
                                {blogList.length === 0 ? (
                                    <Result status="404" title="No Blogs Found" subTitle="You haven't published any blogs yet." />
                                ) : (
                                    <Row gutter={24}>
                                        {blogList.slice(0, 4).map((item) => (
                                            // Import the Link component from react-router-dom

                                            // ... (other imports and code)

                                            <Col
                                                key={item.id}
                                                md={11}
                                                style={{ height: "150px", overflow: "hidden", border: "1px solid #d9d9d9", borderRadius: "5px", margin: "1%", padding: "2%", boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02);" }}
                                            >
                                                {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center" , }}> */}
                                                <div style={{}}>
                                                    <div style={{ textAlign: "left" }}>
                                                        {/* Use Link to create a link to the Details page with the item.id in the URL */}
                                                        {/* <Link to={`/details/${item.id}`}> */}
                                                        <img src={item.image} alt="Blog" style={{ width: "50px", height: "auto", marginBottom: 8 }} />
                                                        {/* </Link> */}
                                                    </div>
                                                    <div style={{ textAlign: "left" }}>
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
