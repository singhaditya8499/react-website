import '../styles/App.css';
import ReactRoundedImage from 'react-rounded-image';
import ProfileImage from '../Images/profile.jpg';
import Routes from './Routes';
import Links from './Links';
import SocialMediaConnect from './SocialMediaConnect';

function App() {
  return (
    <div className="App">
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
        <Routes/>
        <SocialMediaConnect/>
      </header>
    </div>
  );
}

export default App;
