import './App.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import { withStyles } from '@mui/styles';
// import {useEffect} from 'react';
import CompleteInterface from './components/CompleteInterface';

const styles = {
  toolbar: {
    justifyContent: 'space-between',
  },
  chatInterface: {
    marginTop: '150px',
    overflow: 'auto',
  }
}

const App = withStyles(styles)(({classes}) => {

  // <AppBar position='fixed'>
  //       <Toolbar variant='dense' className={classes.toolbar} >
  //         {/* <Button variant="text" color='inherit' disableRipple>About</Button> */}
  //         <Link to="/about">About</Link>
  //         {/* <Typography variant='title' gutterBottom={true} >About</Typography> */}
  //         <Typography variant='button' align='right'>
  //           <Link to="/login">Login</Link>
  //         </Typography>
  //         {/* <Menu open={true} variant='menu'>Profile</Menu> */}
  //       </Toolbar>
  //     </AppBar>

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/about' element={<p>About</p>} />
        <Route path='/' element={<p>Home</p>} />
        <Route path='/login' element={<p>Login</p>} />
        <Route path='/channels/@me' element={<CompleteInterface/>} />
        <Route path='/channels/:serverId/' element={<CompleteInterface/>} />
        <Route path='/channels/:serverId/:channelId' element={<CompleteInterface/>} />
      </Routes>
    </div>
    </Router>
  );
})

export default App;
