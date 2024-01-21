import React, { useState, useEffect } from "react";
import AppHeader from "../header/header";
import AppFooter from "../footer/footer";
import { Card, Timeline } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { Col, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Header, Sider, Content } = Layout;

const formatDate = (rawDate) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(rawDate).toLocaleDateString(undefined, options);
    return formattedDate;
};

const NewsFeed = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [visibleCards, setVisibleCards] = useState(4);
    const [isAdditionalVisible, setIsAdditionalVisible] = useState(false);

    const currentDate = new Date().toLocaleDateString();
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(currentDate).toLocaleDateString(undefined, options);

    // const currentDate = formatDate();

    const cardData = Array.from({ length: 24 }, (_, index) => ({
        key: index + 1,
        user: `user useruseruseruser${index + 1}`,
        title: `Card ${index + 1}`,
        description: `Description for Card sdfdssdfsdfsdfsdfsdfsdsfsdfsfsdfss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, reprehenderit${
            index + 1
        }`,
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
            children: "Create account",
        },
        {
            children: "Prepare your blog or articles",
        },
        {
            children: "Post Your Article or blog",
        },
        {
            children: "Done!",
        },
    ];

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/blog/api/blog-details/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });

                const data = await response.json();
                console.log("Fetched Data:", data); // Log the fetched data
                setBlogData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogData();

        // Cleanup function if needed
        return () => {
            // Cleanup logic
        };
    }, []);

    const visibleRecentsCards = 4;

    const recentBlogs = blogData
        .filter((blogItem) => {
            // Calculate the time difference in hours
            const timeDifference = (new Date() - new Date(blogItem.created_at)) / (1000 * 60 * 60);
            return timeDifference <= 24;
        })
        .slice(0, visibleRecentsCards);
    return (
        <>
            <AppHeader></AppHeader>

            <Layout style={{ padding: "0 10%" }}>
                <>
                    <br />

                    <h1 style={{ textAlign: "left" }}> Blog & Articles </h1>

                    <Row gutter={24} style={{}}>
                        <Col md={17} style={{}}>
                            {blogData.slice(0, visibleCards).map((blogItem) => (
                                <Col xs={24} md={24} key={blogItem.id} style={{ display: "flex", alignItems: "center", margin: "1%", padding: "2% 0", background: "#fff", borderRadius: "8px" }}>
                                    <Col xs={4} md={3}>
                                        <Link to={`/details/${blogItem.id}`} style={{ fontWeight: "normal", alignItems: "start", color: "#000" }}>
                                            <img alt="no-image" src={blogItem.image} style={{ width: "100%", borderRadius: "3px" }} />
                                        </Link>
                                    </Col>

                                    <Col xs={19} md={19} >
                                        <Link to={`/details/${blogItem.id}`} style={{ fontWeight: "normal", alignItems: "start", color: "#000" }}>
                                            <h2>{blogItem.title}</h2>

                                            <p style={{ height: "80px", overflow: "hidden" }}>{blogItem.description}</p>
                                        </Link>
                                        <p>
                                            <span>
                                                {" "}
                                                <b>user_id: #{blogItem.user_id}, </b>{" "}
                                            </span>
                                            🗓️ {formatDate(blogItem.date)}
                                        </p>
                                    </Col>
                                </Col>
                            ))}
                        </Col>

                        <Col md={7} style={{ background: "#fff", borderRadius: "8px", position: "sticky", top: "50px", margin: "10px 0", height: "calc(100vh - 300px)", overflow: "auto" }}>
                            <h2> Recent </h2>
                            <hr />

                            {recentBlogs.map((blogItem, index) => (
                                <Col key={index} xs={24} md={24}>
                                    <Col xs={24}>
                                        <Link to={`/details/${blogItem.id}`} style={{ fontWeight: "normal", alignItems: "start", color: "#000" }}>
                                            <img src={blogItem.image} style={{ width: "200px" }} />
                                            <h3>{blogItem.title}</h3>
                                            <p style={{ height: "100px", overflow: "hidden" }}>{blogItem.description} </p>
                                        </Link>
                                        {/* <p>🗓️ {blogItem.created_at.toLocaleString()} </p> */}
                                    </Col>
                                </Col>
                            ))}
                        </Col>
                    </Row>

                    <div style={{ textAlign: "left", marginTop: "20px" }}>
                        <Button icon={isAdditionalVisible ? <ArrowLeftOutlined /> : <ArrowRightOutlined />} onClick={handleToggleVisibility}>
                            {isAdditionalVisible ? "Hide" : "View More"}
                        </Button>
                    </div>
                </>
                <br />
                <br />
            </Layout>
            <AppFooter />
        </>
    );
};
export default NewsFeed;
