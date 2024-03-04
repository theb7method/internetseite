// Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-root">
      <Drawer
        variant="permanent"
        className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}
        open={isOpen}
      >
        <IconButton onClick={toggleSidebar} className="toggle-button">
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <List>
          {/* Example Menu Items */}
          <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          {/* Add more items here */}
        </List>
      </Drawer>
      <main className={`content ${isOpen ? 'content-shift' : ''}`}>
        {/* Your page content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
