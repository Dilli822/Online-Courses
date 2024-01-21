import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  const [userBasicData, setUserBasicData] = useState([]);
  const [userBasicInfo, setUserBasicInfo] = useState({});
  const [username, setUserName] = useState(null);
  const [user, setUser] = useState("");

  const [authorId, setAuthorId] = useState("");
  const [userId, setUserId] = useState("");

  const currentDate = new Date().toLocaleDateString();
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = new Date(currentDate).toLocaleDateString(undefined, options);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  // console.log(`Bearer ${localStorage.getItem("accessToken")}`);
  // console.log("acess ", accessToken);


  const isLoggedIn = [
    '/profile',
    '/feed',
    '/create',
    `/update/\\d+`,   // Matches /update/:id where :id is a number
    '/blogs',
    '/details/\\d+',  // Matches /details/:id where :id is a number
  ].some(pattern => new RegExp(pattern).test(window.location.pathname));
  
  const [menuLoggedItems, setMenuLoggedItems] = useState([
    { key: 'home', label: 'Home', path: '/feed' },
    { key: 'blog post', label: 'Post Blog', path: '/create' },
    { key: 'profile', label: 'Profile', path: '/profile' },
    { key: 'logout', label: 'Logout' },
  ]);

  const menuNotLoggedItems = [
    { key: 'home', label: 'Home', path: '/' },
    { key: 'login', label: 'Login', path: '/login' },
    { key: 'signup', label: 'Signup', path: '/signup' },
    { key: 'about', label: 'About Us', path: '/about' },
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/account/api/usersList/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const data = await response.json();
        // console.log(data);

        if (data.length > 0) {
          setUserName(data[0].username);
          localStorage.setItem('user_id', data[0].id);
          localStorage.setItem('user_name', data[0].username);
          localStorage.setItem('user_email', data[0].email);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function when the component mounts

    // cleanup function if needed
    return () => {
      // cleanup logic
    };
  }, []); // empty dependency array means this effect runs once on mount


  const onMenuItemClick = (label, path) => {
    if (label === 'Logout') {
      // Display confirmation using window.confirm
      const confirmed = window.confirm('Are you sure you want to logout?');
      if (confirmed) {
        // Handle logout action

        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        // Remove the 'path' property from the 'menuLoggedItems' array
        const updatedMenuLoggedItems = menuLoggedItems.map(item => {
          const { path, ...rest } = item;
          return rest;
        });
        setMenuLoggedItems(updatedMenuLoggedItems);
        // Redirect to '/'
        window.location.href = '/';
      }
    } else {
      // Handle other menu item clicks (e.g., navigation)
      console.log(`Clicked on menu item ${label}`);
      // Redirect to the specified path
      window.location.href = window.location;
    }
  };


  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '2% 10%',
      }}
    >
      {/* Your Logo Component Here */}
      <div className="demo-logo" style={{ width: '50%' }}>

        {/* Add your logo component or image here */}
        <img src="" alt="Logo" style={{ width: '50px', verticalAlign: 'middle' }} />
      </div>

      {/* Menu component */}
      {isLoggedIn ? (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['nav2']}
        style={{
          width: '50%',
          justifyContent: 'end',
        }}
        onClick={({ key }) => onMenuItemClick(menuLoggedItems.find(item => item.key === key)?.label, menuLoggedItems.find(item => item.key === key)?.path)}
      >
        {menuLoggedItems.map(({ key, label }) => (
          <Menu.Item key={key}>
            <Link to={menuLoggedItems.find(item => item.key === key)?.path}>{label}</Link>
          </Menu.Item>
        ))}
      </Menu>
      ):(
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['nav2']}
        style={{
          width: '50%',
          justifyContent: 'end',
        }}
        onClick={({ key }) => onMenuItemClick(menuNotLoggedItems.find(item => item.key === key)?.path)}
      >
        {menuNotLoggedItems.map(({ key, label }) => (
          <Menu.Item key={key}>
            <Link to={menuNotLoggedItems.find(item => item.key === key)?.path}>{label}</Link>
          </Menu.Item>
        ))}
      </Menu>
      )}
    </Header>
  );
};

export default AppHeader;
