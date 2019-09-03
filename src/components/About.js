import React, { Component } from 'react';
import ABOUT from '../data/about'

class AboutSubSection extends Component {
    render() {
        const pointsdetails = (
            <ul>
                {
                    this.props.points.map((point) =>
                        <li key={point.id}>
                            {point.details}
                        </li>
                    )
                }
            </ul>
        );
        return (
            <div className='items'>
                {pointsdetails}
            </div>
        );
    }
}

class AboutSection extends Component {

    render() {
        const { title, points } = this.props.aboutsection;
        console.log('About Section', this.props.aboutsection)
        return (
            <div >
                <h4>{title}</h4>
                <AboutSubSection points={points} />
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <h3>About</h3>
                <div className='containerforabout'>
                    {
                        ABOUT.map(ABOUTSECTION => {
                            return (
                                <AboutSection key={ABOUTSECTION.id} aboutsection={ABOUTSECTION} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default About;