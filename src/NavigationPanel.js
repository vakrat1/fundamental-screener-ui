// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { AppBar, Toolbar, Typography } from '@mui/material';

// import { Layout } from 'react-admin';



// import GridPage from './GridPage';
// import BarChart from './AppBarChart';
// import Main from './main';

// // // Import the components you want to render
// // import Home from './Home';
// // import About from './About';
// // import Services from './Services';
// // import Contact from './Contact';

// const NavigationPanel = () => {
//   const [open, setOpen] = React.useState(true);

//   const menuItems = [
//     { text: 'Main', path: '/' },
//     { text: 'GridPage', path: '/grid' },
//     { text: 'BarChart', path: '/barchart' },
//   ];

//   return (
//     <Router>
//         <div style={{ display: 'flex' }}>
//             {/* Left-hand side Drawer */}
//             <Drawer variant="persistent" anchor="left" open={open}>
//             <List>
//                 {menuItems.map((item, index) => (
//                 <ListItem button key={index} component={Link} to={item.path}>
//                     <ListItemText primary={item.text} />
//                 </ListItem>
//                 ))}
//             </List>
//             </Drawer>

//             {/* Main content pane */}
//             <main style={{ marginLeft: 240, padding: 20, width: '100%' }}>
//             <Routes>
//                 <Route path="/" element={<Main />} />
//                 <Route path="/grid" element={<GridPage />} />
//                 <Route path="/barchart" element={<BarChart />} />
//             </Routes>
//             </main>
//         </div>
//     </Router>
//   );
// };

// export default NavigationPanel;
