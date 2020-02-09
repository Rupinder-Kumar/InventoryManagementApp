import React from "react";

const AppHeader = (props) => {
    return (
        <header className="bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark bg-primary">
                    <span className="navbar-brand">Inventory Management App</span>                
                        <ul className="navbar-nav navbar-right">
                            <li className="nav-item"> 
                                <button onClick={() => props.logout()} className="btn btn-link nav-link my-2 my-sm-0" type="submit">Logout</button>
                            </li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;