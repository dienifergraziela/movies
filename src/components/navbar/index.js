import logo from "../../assets/images/logo_netflix.png";
import "./style.css";
export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" width="100" height="36"/>
                    

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}