"use strict";

import React from 'react';
import { withRouter , Link, Redirect} from 'react-router-dom';
import { Menu, MenuItem, Icon, Input, Button} from 'semantic-ui-react';
import SearchBar from './SearchBar';
import styles from './../styles/demo.css';

import KebabMenu from './KebabMenu';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchUrl: '',
            activeItem: 'ow',
            suggestions: [],
            sideBar: false,
            url : '',
            history
        }

        this.handleUrl = this.handleUrl.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleTeamSearch = this.handleTeamSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSideBar = this.handleSideBar.bind(this);
    }

    //test
    handleUrl(event) {
        this.setState({url: event.target.value});
        console.log(this.state.url);
    }

    handleClear() {
    this.setState({
        suggestions: []
    });
    }

    handleSelection(value) {
    if (value) {
        console.info(`Selected "${value}"`);
    }
    }

    handleSearch(value) {
    if (value) {
        console.info(`Searching "${value}"`);
    }
    }

    handleItemClick(e, name) {this.setState(state => ({
         activeItem: name.name
        }));
        this.props.history.push('/')
    }

    handleTeamSearch(e) {
        window.location.reload();
    }

    handleSideBar() {
        var b = this.state.sideBar;
        this.setState({
            sideBar: !b
        })

        this.props.toggleSideBar(!b)
    }

    suggestionRenderer(suggestion, searchTerm) {
        return (
            <span>
            <span>{searchTerm}</span>
            <strong>{suggestion.substr(searchTerm.length)}</strong>
            </span>
        );
    }

      _handleKeyDown(e) {
        if (e.key === 'Enter' && event.target.value === "Team Liquid") {
          window.location.href = "/#/search/" + event.target.value;
          window.location.reload();
        } 
        // TODO This should be changed to a context error message for more teams
        else if(e.key === 'Enter' && event.target.value !== "Team Liquid") {
            alert("No Team could be found!");
        }
    }

    render() {
        const { activeItem, searchUrl } = this.state;

        return (
            <Menu borderless size="huge">
                <MenuItem onClick={this.handleSideBar}> <Icon name='bars' style={{fontSize: 1.5 + "em"}}/></MenuItem>
                <Menu.Item name='ow' className="gameMenuItem" active={activeItem === 'ow'} onClick={this.handleItemClick}>
                    <img src="https://www.freepnglogos.com/uploads/overwatch-logo-emblem-11.png" alt="Overwatch" className="gameLogo"/>
                </Menu.Item>
                <Menu.Item name='csgo' className="gameMenuItem" active={activeItem === 'csgo'} onClick={this.handleItemClick}>
                    <img src="https://logodownload.org/wp-content/uploads/2014/09/counter-strike-global-offensive-cs-go-logo.png" alt="CSGO" className="gameLogo"/>
                </Menu.Item>
                <Menu.Item name='lol' className="gameMenuItem" active={activeItem === 'lol'} onClick={this.handleItemClick}>
                    <img src="https://www.macupdate.com/images/icons256/47210.png" alt="League of Legends" className="gameLogo"/>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item onClick={this.handleTeamSearch}><Link to={`/search/${this.state.url}`}>Search</Link></Menu.Item>
                    <Menu.Item>
                        <Input
                            className="icon"
                            icon='search'
                            placeholder='Search Team...'
                            id="searchbar"
                            type="text"
                            value={this.state.url}
                            onChange={this.handleUrl}
                            onKeyDown={this._handleKeyDown}
                        />
                    </Menu.Item>
                </Menu.Menu>
                <MenuItem>
                    <KebabMenu id="toolbar-colored-kebab-menu" />
                </MenuItem>
            </Menu>
        );
    }
};

export default withRouter(Header);