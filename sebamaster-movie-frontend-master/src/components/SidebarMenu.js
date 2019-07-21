"use strict";
import PropTypes from 'prop-types'
import React from 'react'
import {Icon, Menu, Sidebar} from 'semantic-ui-react'
import './../styles/ui-style.css';

export default class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
        }
    }

    render() {
        return (
        <div>
            <Sidebar
                as={Menu}
                animation='overlay'
                vertical
                visible={this.props.display}
                width='thin'
                className="ui sidebar custom"
            >
                // TODO Insert page reference links to the Lists of Tournaments, Teams, etc.
                <Menu.Item as='a' onClick={this.handleTournaments}>
                    <Icon name='trophy' />
                    Tournaments
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='group' />
                    Teams
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='user' />
                    Players
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='calendar' />
                    Events
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='setting' />
                    Settings
                </Menu.Item>
            </Sidebar>
        </div>
        )
    }
}