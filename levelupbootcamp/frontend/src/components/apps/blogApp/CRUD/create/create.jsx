// import React, { useState } from 'react';
// import { Layout, Typography, Input, Button, Col, message, Upload } from 'antd';
// import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
// import AppHeader from '../../header/header';
// import AppFooter from '../../footer/footer';

// const { Title } = Typography;
// const { TextArea } = Input;

// const validImageTypes = [
//   'image/jpeg',
//   'image/png',
//   'image/gif',
//   'image/bmp',
//   'image/webp',
//   'image/tiff',
//   'image/svg+xml',
//   'image/x-icon',
//   'image/vnd.microsoft.icon',
//   'image/vnd.wap.wbmp',
//   'image/heif',
//   'image/heic',
//   'image/jxr',
//   'image/avif',
// ];

// const Create = () => {
//   const [header, setHeader] = useState('');
//   const [paragraph, setParagraph] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleHeaderChange = (e) => {
//     setHeader(e.target.value);
//   };

//   const handleParagraphChange = (e) => {
//     setParagraph(e.target.value);
//   };

//   const handlePostBlog = () => {
//     const blogData = {
//       title: header,
//       description: paragraph,
//       user: "1", // You might want to replace this with the actual user ID
//     };

//     setLoading(true);

//     fetch('http://127.0.0.1:8000/blog/api/blog-details/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
//       },
//       body: JSON.stringify(blogData),
//     })
//     .then(response => response.json())
//     .then(data => {
//       setLoading(false);
//       message.success('Blog posted successfully!');
//       console.log(data);
//     })
//     .catch(error => {
//       setLoading(false);
//       console.error('Error posting blog:', error);
//       message.error('Failed to post blog. Please try again.');
//     });
//   };

//   const props = {
//     name: 'file',
//     action: 'http://127.0.0.1:8000/blog/api/blog-details/',
//     headers: {
//       authorization: 'authorization-text',
//     },
//     beforeUpload: (file) => {
//       const isImage = validImageTypes.includes(file.type);

//       if (!isImage) {
//         message.error('You can only upload JPG/PNG/GIF/BMP/WebP files!');
//       }

//       return isImage;
//     },
//     onChange(info) {
//       if (info.file.status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (info.file.status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//   };

//   return (
//     <>
//       <AppHeader />
//       <Layout style={{ padding: '0 10%' }}>
//         <Col>
//           <Title> Publish/Write Blog</Title>
//           <h2>Title: </h2>
//           <Input
//             placeholder="Enter Blog Title"
//             value={header}
//             onChange={handleHeaderChange}
//             style={{ marginBottom: '16px', border: 'none', minHeight: "35px", background: "none" }}
//           />
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <h3>Upload Picture/Image for your Blog</h3>
//             &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
//             <Upload {...props} >
//               <Button icon={<UploadOutlined />}>Click to Upload</Button>
//             </Upload>
//           </div>
//           <h3> Description: </h3>
//           <TextArea
//             showCount
//             minHeight={500}
//             onChange={handleParagraphChange}
//             placeholder="Write your blog content here."
//             rows={15}
//           />
//         </Col>

//         <Col>
//           <br />
//           <Button icon={<SaveOutlined />} onClick={handlePostBlog}>
//             Discard Changes
//           </Button>
//           &nbsp;
//           <Button icon={<SaveOutlined />} onClick={handlePostBlog} loading={loading}>
//             Post/Publish Blog
//           </Button>
//         </Col>
//       </Layout>

//       <AppFooter />
//     </>
//   );
// };

// export default Create;


import React, { useState } from 'react';
import { Layout, Typography, Input, Button, Col, message, Upload } from 'antd';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
import AppHeader from '../../header/header';
import AppFooter from '../../footer/footer';

const { Title } = Typography;
const { TextArea } = Input;

const validImageTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/bmp',
  'image/webp',
  'image/tiff',
  'image/svg+xml',
  'image/x-icon',
  'image/vnd.microsoft.icon',
  'image/vnd.wap.wbmp',
  'image/heif',
  'image/heic',
  'image/jxr',
  'image/avif',
];

const Create = () => {
  const [header, setHeader] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const handlePostBlog = () => {
    setLoading(true);

    fetch('http://127.0.0.1:8000/blog/api/blog-details/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({
        title: header,
        description: paragraph,
        user: localStorage.getItem('user_id'), // Use the user ID from localStorage
      }),
    })
    .then(response => response.json())
    .then(data => {
      const blogId = data.id;
      if (imageFile) {
        uploadImage(blogId);
      } else {
        handleSubmissionSuccess();
      }
    })
    .catch(error => {
      setLoading(false);
      console.error('Error posting blog:', error);
      message.error('Failed to post blog. Please try again.');
    });
  };

  const uploadImage = (blogId) => {
    const formData = new FormData();
    formData.append('file', imageFile);

    fetch(`http://127.0.0.1:8000/blog/api/blog-details/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      handleSubmissionSuccess();
    })
    .catch(error => {
      setLoading(false);
      console.error('Error uploading image:', error);
      message.error('Failed to upload image. Please try again.');
    });
  };



  const props = {
    name: 'file',
    action: 'http://127.0.0.1:8000/blog/api/blog-details/',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
    beforeUpload: (file) => {
      const isImage = validImageTypes.includes(file.type);

      if (!isImage) {
        message.error('You can only upload JPG/PNG/GIF/BMP/WebP files!');
      }

      setImageFile(file);
      return false;
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleSubmissionSuccess = () => {
    setLoading(false);
    setSubmissionSuccess(true);
    setHeader('');
    setParagraph('');
    setImageFile(null);
    message.success('Blog and image posted successfully!');
    setTimeout(() => {
      window.location.pathname = '/profile';

    }, 2000);
  };

  return (
    <>
      <AppHeader />
      <Layout style={{ padding: '0 10%' }}>
        <Col>
          <Title> Publish/Write Blog</Title>
          <h2>Title: </h2>
          <Input
            placeholder="Enter Blog Title"
            value={header}
            onChange={handleHeaderChange}
            style={{ marginBottom: '16px', border: 'none', minHeight: "35px", background: "none" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Upload Picture/Image for your Blog</h3>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <Upload {...props} >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          <h3> Description: </h3>
          <TextArea
            showCount
            minHeight={500}
            onChange={handleParagraphChange}
            placeholder="Write your blog content here."
            rows={15}
            value={paragraph} 
          />
        </Col>

        <Col>
          <br />
          <Button icon={<SaveOutlined />} onClick={handlePostBlog}>
            Discard Changes
          </Button>
          &nbsp;
          <Button icon={<SaveOutlined />} onClick={handlePostBlog} loading={loading}>
            Post/Publish Blog
          </Button>
        </Col>
      </Layout>



      

      <AppFooter />
    </>
  );
};

export default Create;

