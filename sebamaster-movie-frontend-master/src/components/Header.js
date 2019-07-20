"use strict";

import React from 'react';
import { withRouter , Link, Redirect} from 'react-router-dom';
import { Menu, MenuItem, Icon, Input, Button} from 'semantic-ui-react';
import TeamService from './../services/TeamService';
import SearchBar from './SearchBar';
import styles from './../styles/demo.css';
import words from './words.json';


import KebabMenu from './KebabMenu';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchUrl: '',
            activeItem: 'ow',
            suggestions: [],
            sideBar: false,
            searchUrl: ""
        }

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleTeamSearch = this.handleTeamSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSideBar = this.handleSideBar.bind(this);
    }

    handleClear() {
    this.setState({
        suggestions: []
    });
    }

    handleChange(input) {
    this.setState({
        suggestions: words.filter(word => word.startsWith(input))
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
    }

    handleTeamSearch(e) {
        const searchbar = document.getElementById("searchbar");

        if (searchbar.value !== "") {
        console.log(searchbar.value);
            this.setState({searchUrl: searchbar.value}, function () {
                console.log('test: '+this.state.searchUrl);
            });
            //console.log(this.state.searchUrl);
            //console.log(searchbar.value);
        }
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
                    <Menu.Item onClick={this.handleTeamSearch}>
                        {/* <Link to={`/search/${searchUrl}`}>Search</Link> */}
                        Search
                    </Menu.Item>
                    <Menu.Item>
                        <Input className="icon" icon='search' placeholder='Search Team...' id="searchbar"/>
                        {/* <SearchBar
                            autoFocus
                            renderClearButton
                            renderSearchButton
                            placeholder="select a team"
                            onChange={this.handleChange}
                            onClear={this.handleClear}
                            onSelection={this.handleSelection}
                            onSearch={this.handleSearch}
                            suggestions={this.state.suggestions}
                            suggestionRenderer={this.suggestionRenderer}
                            styles={styles}
                        /> */}
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