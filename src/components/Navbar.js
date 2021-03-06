import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

//import { generateSitePath } from '../SitePath';

class Navbar extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            navbarCollapsed: true
        };
    }

    generateLinkComponent(link) {
        var { path, title, isExternal } = link;
        console.log(link);
        if (isExternal) {
            return <a href={path} target="_blank">{title}</a>;
        } else {
            return <NavLink exact to={path}>{title}</NavLink>;
        }
    }

    generateNavMenuComponent(menu) {
        console.log(menu);
        if (menu) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                {menu.map((menuItem, i) => (
                                    <li key={i} className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" exact to={menuItem.path}>{menuItem.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

            );
        } else {
            return null;
        }
    }

    toggleNavbarCollapsed() {
        this.setState({
            navbarCollapsed: !this.state.navbarCollapsed
        });
    }

    render() {
        //var headingItems = this.props.links.filter((item) => item.isHeading);
        //var nonHeadingItems = this.props.links.filter((item) => (!item.isHeading));

        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <NavLink className="nav-link js-scroll-trigger" exact to={'/'}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
                         width="30" height="30" alt=""></img>
                </NavLink>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            {this.props.links.map((item, i) => {
                                var { menu, isLink, isRight } = item;
                                var linkComponent = this.generateLinkComponent(item);
                                var navMenuComponent = this.generateNavMenuComponent(menu);
                                return (
                                    <li key={i} className={"nav-item pt-2 pl-3 pr-3"
                                        + (navMenuComponent ? " navmenu" : "")
                                        + (isLink ? " navlink" : "")
                                        + (isRight ? " right" : "")}>

                                        {linkComponent}
                                        {navMenuComponent}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;