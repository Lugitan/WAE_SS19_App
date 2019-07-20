"use strict";

import React from 'react';

import Header from './Header';
import { Footer } from './Footer';
import SideBarMenu from './SidebarMenu';
import Grid from './Grid';

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            sideBarActive: false
        }

        this.handler = this.handler.bind(this);
    }

    componentDidMount(){
       this.setState({
           title: document.title
       });
    }

    handler(bool) {

        this.setState({
            sideBarActive: bool
        })
    }

    render() {
        return (
            <section>
                <Header title={this.state.title} toggleSideBar={this.handler} />
                <SideBarMenu display={this.state.sideBarActive} icons={this.state.labelStatus} />
                {/* {this.props.children} */}
                <Grid />
                <Footer />
            </section>
        );
    }
}