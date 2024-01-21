import React, { useState, useEffect } from 'react';
import { Layout, Space, Col, Row, Card, Button, Input, Typography } from 'antd';
// import AppHeader from '../../header/header';
// import AppFooter from '../../footer/footer';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Meta } = Card;
const { Text } = Typography;

const additionalInformation = [
  { label: "Address", key: "address" },
  { label: "Phone", key: "phone" },
  // Add more information as needed
];

const Test = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState({
    name: localStorage.getItem("user_name") || "",
    email: localStorage.getItem("user_email") || "",
    // Add more information as needed
    address: "",
    phone: "",
  });

  const handleInputChange = (key, value) => {
    setEditedUserInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // TODO: Implement save logic here, e.g., make an API call to update the user information
    console.log("Saving edited user information:", editedUserInfo);

    // After saving, switch back to non-edit mode
    setIsEditing(false);
  };

  return (
    <>
      {/* <AppHeader /> */}

      <Layout style={{ padding: "0 10%" }}>
        <br />

        <Row>
          <Col md={10} style={{ margin: "1%" }}>
            <Card
              hoverable
              style={{ padding: isEditing ? "15px" : "0" }}
              cover={isEditing ? null : <img alt="example" src="https://unsplash.it/1090" style={{ padding: "15px" }} />}
            >
              <Meta
                title={
                  isEditing ? (
                    <Input value={editedUserInfo.name} onChange={(e) => handleInputChange("name", e.target.value)} />
                  ) : (
                    `${editedUserInfo.name} || "username: "`
                  )
                }
                description={
                  isEditing ? (
                    additionalInformation.map((info, index) => (
                      <div key={index}>
                        <strong>{info.label}:</strong>{" "}
                        <Input value={editedUserInfo[info.key]} onChange={(e) => handleInputChange(info.key, e.target.value)} />
                      </div>
                    ))
                  ) : (
                    <>
                      <p>
                        <strong>Email:</strong> {editedUserInfo.email}
                      </p>
                      {additionalInformation.map((info, index) => (
                        <p key={index}>
                          <strong>{info.label}:</strong> {editedUserInfo[info.key]}
                        </p>
                      ))}
                    </>
                  )
                }
                // ... other properties
              />
              {isEditing && (
                <>
                  <Button icon={<SaveOutlined />} onClick={handleSave}>
                    Save
                  </Button>
                </>
              )}
              {!isEditing && (
                <>
                  <Button icon={<EditOutlined />} onClick={handleEdit}>
                    Edit
                  </Button>
                  &nbsp; &nbsp;
                </>
              )}
            </Card>
          </Col>

          {/* ... Other content ... */}
        </Row>
      </Layout>

      {/* <AppFooter /> */}
    </>
  );
};

export default Test;
