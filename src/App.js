import React, {Component} from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpeg';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio:!this.state.displayBio});
    }

    render(){
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Amardeep Singh</h1>
                <p>I am a Software Engineer at Amazon AWS</p>
                <p>I am trying to learn react</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>
                                Experience:
                                <div style={{textAlign:'left'}}>
                                    <ul>
                                        <li>Programming: Core Java (Collections, Multithreading, IO, etc.), Python, Ruby on Rails, Data Structure, Algorithm, Docker.</li>
                                        <li>Experience working on Amazon Web Services</li>
                                        <li>Database: DB2, MySQL,AWS DynamoDB, AWS Aurora</li>
                                        <li>Tools/IDE: Eclipse, SVN, GitHub, Maven, JUnit, Para Soft SOA Test, XML Spy, HPQC.</li>
                                        <li>Expertise in using Java/J2EE design patterns.</li>
                                        <li>Experienced in analysis, design, development, testing and delivery of applications.</li>
                                        <li>Experienced on the JUnit framework for testing the applications.</li>
                                        <li>Experienced using databases like DB2, MySQL, etc.</li>
                                    </ul>
                                </div>
                                Skills: 
                                <div style={{textAlign:'left'}}>
                                    <ul>
                                        <li>Consistently Seeking and Learning New Technology</li>
                                        <li>Lead and Deliver Complex Software Systems</li>
                                        <li>Participate in Source Code and Design Reviews</li>
                                        <li>Passion for Developing Engaging Consumer Experiences</li>
                                        <li>Previous Experience Working Within an Agile Scrum Team</li>
                                        <li>Strong Oral and Written Communication </li>
                                        <li>Strong Problem Solver</li>
                                        <li>Thrive in Dynamic, Fast-Paced Environments</li>
                                        <li>Work Well Independently and Within a Team Setting</li>
                                        <li>Write Clear and Detailed Technical Specifications and Documentation</li>
                                    </ul>
                                </div>
                            </p>
                            <div>
                                <button onClick={this.toggleDisplayBio}>Show less</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                    <Projects/>
                <hr />
                    <SocialProfiles/>
            </div>
        )
    }
}

export default App;
