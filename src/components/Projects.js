import React, { Component } from 'react';
import PROJECTS from '../data/projects';

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

class Project extends Component {
    render() {
        const { title, image, description, link } = this.props.project;
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <a href={link} target="_blank">
                    <h3>{title}</h3>
                    <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
                    <p>{description}</p>
                </a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;