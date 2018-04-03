import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { generateSitePath } from '../SitePath';

class HomePage extends Component {

    generateCurrentCoursesComponent() {
        return (
            <section className="teaching">
                <h2>Teaching</h2>

            </section>
        );
    }
    render() {
        return ( <div>
                <div className="digits">
                    <h1>Rob Hess</h1>
                    <p className="title">Instructor</p>
                    <p className="school"><a href="http://eecs.oregonstate.edu">School of EECS</a></p>
                    <p className="university"><a href="http://oregonstate.edu">Oregon State University</a></p>
                    <p className="town">Corvallis, OR 97331</p>
                    <p className="email">Email: <a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a></p>
                    <p className="office">Office: <a href="https://goo.gl/maps/DoQVXpSxZrQ2" target="_blank">KEC 1109</a></p>
                </div>

                <p>
                    Through it all, I've been and remain an avid brewer of beer, baker of
                    bread, taker of photos, player of games, and lover of cats.
                </p>
            </div>
        );
    }
}
export default HomePage;