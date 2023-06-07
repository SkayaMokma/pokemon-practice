import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div >
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pokemon'>About Us</Link>
              </li>
            </ul>
        </div>
    )
}

export default Navbar