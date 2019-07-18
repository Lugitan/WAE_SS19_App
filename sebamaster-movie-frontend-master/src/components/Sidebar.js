"use strict";
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Grid } from 'semantic-ui-react'
import './../styles/ui-style.css';

export default class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true }
    }

    handleHideClick() {() => this.setState({ visible: false })}
    handleShowClick() {() => this.setState({ visible: !this.state.visible })}
    handleSidebarHide() {() => this.setState({ visible: false })}

    render() {
        const { visible } = this.state

        return (
        <div>
            {/* <button onClick={this.handleShowClick}>Show SideBar</button> */}
            {/* <Sidebar.Pushable as={Segment}> */}
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                // inverted
                // onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
                className="ui sidebar custom"
            >
                <Menu.Item as='a'>
                <Icon name='trophy' />
                Home
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
                </Menu.Item>
            </Sidebar>

            {/* <div class="ui vertical labeled icon menu custom">
                <a class="item">
                    <i class="gamepad icon"></i>
                    Games
                </a>
                <a class="item">
                    <i class="video camera icon"></i>
                    Channels
                </a>
                <a class="item">
                    <i class="video play icon"></i>
                    Videos
                </a>
            </div> */}

            {/* <Sidebar.Pusher>
                <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='/images/wireframe/paragraph.png' />
                </Segment>
            </Sidebar.Pusher> */}
            {/* </Sidebar.Pushable> */}
        </div>
        )
    }
}