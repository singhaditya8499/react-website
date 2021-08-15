import ReactRoundedImage from 'react-rounded-image';
import ProfileImage from '../Images/profile.jpg';
import '../styles/Header.css'
export default function NavBar() {
    return( 
        <div class="navbar">
            {/* <a className="navigation-image" href="/react-website">
                <ReactRoundedImage
                    image={ProfileImage}
                    roundedColor="#66A5CC"
                    imageWidth="66"
                    imageHeight="66"
                    roundedSize="0"
                    borderRadius="8"
                />
            </a> */}
            <a className="navigation-text" href="/react-website">
                Aditya Singh
            </a>
            <a href="/react-website">Home</a>
            <a href="/about">About</a>
            <a href="/blogs">Blogs</a>
        </div>
    );
}