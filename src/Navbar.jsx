import React from 'react';

function Navbar(){
    return (
        <>
            <nav className="navbar navbar-inverse" style={{minHeight:"0"}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><img src="./favicon.ico" alt="logo" width="25" height="25" /></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#netflix">NETFLIX</a></li>
                        <li><a href="#games">GAMES</a></li>
                        <li><a href="#todolist">TO DO LIST</a></li>
                    </ul>
                    <form className="navbar-form navbar-right" action="/action_page.php">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;