"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem, Icon, Input, Button} from 'semantic-ui-react';
import TeamService from './../services/TeamService';

import KebabMenu from './KebabMenu';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'overwatch'
        }

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleSearch= this.handleSearch.bind(this);
    }

    handleItemClick() {(e, name) => {
        this.setState({ activeItem: name })
        console.log(name)
    }}

    handleSearch(e) {
        const searchbar = document.getElementById("searchbar");
        if (searchbar.value !== "") {
            TeamService.getTeams().then((data)=>{
                console.log(data);
            });
        }
    }

    render() {
        const { activeItem }= this.state;

        return (
            <Menu tabular size='huge'>
                <MenuItem name="" width="150px"> <Icon name='gamepad' /></MenuItem>
                <Menu.Item name='overwatch' active={activeItem === 'overwatch'} onClick={this.handleItemClick} />
                <Menu.Item name='csgo' active={activeItem === 'csgo'} onClick={this.handleItemClick} />
                <Menu.Item name='lol' active={activeItem === 'lol'} onClick={this.handleItemClick} />
                <Menu.Menu position="right">
                    <Menu.Item onClick={this.handleSearch}>Search</Menu.Item>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' id="searchbar"/>
                    </Menu.Item>
                </Menu.Menu>
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