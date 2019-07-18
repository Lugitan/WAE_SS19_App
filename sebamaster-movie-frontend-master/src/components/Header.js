"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon, Image, Menu, Segment, Sidebar, Grid } from 'semantic-ui-react'

import KebabMenu from './KebabMenu';
import SideBarMenu from './Sidebar';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'ow'
        }

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(name) {(e, {name}) =>
        this.setState({ activeItem: name })
        console.log(name)
    }

    render() {
        const { activeItem }= this.state;

        return (
            <Menu tabular>
                <Menu.Item name='ow' active={activeItem === 'ow'} onClick={this.handleItemClick} />
                <Menu.Item name='csgo' active={activeItem === 'csgo'} onClick={this.handleItemClick} />
                <Menu.Item name='lol' active={activeItem === 'lol'} onClick={this.handleItemClick} />
            </Menu>
            // <Toolbar
            //     colored
            //     nav={<Button onClick={() => this.props.history.push('/')} icon>menu</Button>}
            //     title={this.props.title}
            //     actions={<KebabMenu id="toolbar-colored-kebab-menu" />}>
            // </Toolbar>

        );
    }
};

export default withRouter(Header);