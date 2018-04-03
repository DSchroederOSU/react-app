import React, { Component } from 'react';
class HomePage extends Component {

    generateCurrentCoursesComponent() {
        return (
            <section className="teaching">
                <h2>Teaching</h2>

            </section>
        );
    }
    render() {
        return (
            <div>
                <div className="digits">
                    <h1>Daniel Schroeder</h1>
                    <p className="title">Student</p>
                </div>
                <p>
                    Lorem Ipsum.
                </p>
            </div>
        );
    }
}
export default HomePage;