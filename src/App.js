import React, { Component } from 'react';
import Projects from './components/Projects'
import SocialProfiles from './components/SocialProfiles';
import About from './components/About'
import profile from './assets/profile.jpeg';
import Tabs from "./components/Tabs";
import glamorous from "glamorous";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const TabComponent = () => (
    <div style={styles}>
        <Tabs
            activeTab={{
                id: "tab1"
            }}
        >
            <Tabs.Tab id="tab1" title="About">
                <glamorous.Div padding={20}><About /></glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Highlighted Projects">
                <glamorous.Div padding={20}><Projects /></glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Achivements">
                <glamorous.Div padding={20}><h2>Achivements section coming soon</h2></glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab id="tab4" title="Honors & Awards">
                <glamorous.Div padding={20}><h2>Honors & Awards section coming soon</h2></glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab id="tab5" title="Published Papers">
                <glamorous.Div padding={20}><h2>Published Papers section coming soon</h2></glamorous.Div>
            </Tabs.Tab>
        </Tabs>
    </div>
);

class App extends Component {

    state = { displayBio: false };

    // toggleDisplayBio = () => {
    //     this.setState({ displayBio: !this.state.displayBio });
    // }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Amardeep Singh</h1>
                <p>I am a Software Engineer at Amazon Web Services</p>
                <p>I am trying to learn react & this is my first react project</p>
                <TabComponent />
                {/* This is the old implimentation to hide and show About section on button click */}
                {/* 
                
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
                <Projects /> */}
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
