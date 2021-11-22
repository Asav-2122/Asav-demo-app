import './App.css';
import Allpost from './Components/Allpost';
import Addpost from './Components/Addpost';
import Error from './Components/Error';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  appbar: {
    position: 'static',
    color: 'secondary',
  },
  nav: {
    marginLeft: '0px',
    width: '200px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500px'
  }

})

function App() {
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <nav className={classes.nav}>
            <Link to='/' className={classes.link}>All Post</Link>
            <Link to='/about' className={classes.link}>Add Post</Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Routes>

        <Route path='/' element={<Allpost />} />
        <Route path='/about' element={<Addpost />} />
        <Route path='*' element={<Error />} />

      </Routes>

    </>
  );
}

export default App;
