import '../styles/App.css';
import ReactRoundedImage from 'react-rounded-image';
import { Route, Router, Switch } from 'react-router-dom';
import ProfileImage from '../Images/profile.jpg';
import Links from './Links';
import SocialMediaConnect from './SocialMediaConnect';
import About from './About';
import History from './History';
import NavBar from './NavBar'
import Blogs from './Blogs'

function App() {
  return (
    <div className="App">
      {
        window.location.pathname === "/react-website" ?
        <header className="App-header">
          <ReactRoundedImage
                image={ProfileImage}
                imageWidth="200"
                imageHeight="200"
                hoverColor="#01494d"
                roundedColor="#0d0f14"
                roundedSize="8"
          />
          <h3 className="name">Aditya Singh</h3>
          <h6 className="description">Technology Pantomath</h6>
          <a className="keybase" href="https://keybase.io/singhaditya" target="_blank">9760 A7F9 636D 15F9</a>
          <Links/>
          <SocialMediaConnect/>
        </header> :
        <>
          <NavBar/>
          <Router history={History}>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/resume" exact component={() =>{
                    window.location.href = "https://bit.ly/08adi04";
                    return null;
                }} />
                <Route path="/about" exact component={About}/>
                <Route path="/blogs" exact component={Blogs}/>
            </Switch>
          </Router>
        </>
      }
    </div>
  );
}

export default App;
