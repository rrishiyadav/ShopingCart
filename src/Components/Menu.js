import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="#">WebSiteName</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                     </ul>
                    {/* <ul className="nav navbar-nav navbar-right">
                        <li><Link to="#"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul> */} 


                </div>
            </nav>
        </div>
    )
}