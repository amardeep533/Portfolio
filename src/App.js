import React, { Component } from 'react';
import Projects from './components/Projects'
import SocialProfiles from './components/SocialProfiles';
import About from './components/About'
import profile from './assets/profile.jpeg';

class App extends Component {

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Amardeep Singh</h1>
                <p>I am a Software Engineer at Amazon Web Services</p>
                <p>I am trying to learn react & this is my first react project</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <About/>
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
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
