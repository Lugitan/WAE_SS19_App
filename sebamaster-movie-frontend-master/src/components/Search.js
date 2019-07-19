"use strict";

import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardTitle, CardText, Media, MediaOverlay, Grid, Cell, Button, FontIcon } from 'react-md';

//test
import { Image, Item } from 'semantic-ui-react'

import Page from './Page';

import UserService from '../services/UserService';

const style = { maxWidth: 500 };

export class Search extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        console.log(this.props.team[0].team_name);
        console.log(this.props.team);

        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <Grid className="grid-example" >
                        <Cell size={3}>
                            <Media aspectRatio="1-1">
                                <img src={this.props.team[0].logo}  />
                            </Media>
                        </Cell>
                    </Grid>

                    <CardTitle title={this.props.team[0].team_name} subtitle={'test'} />

                    <CardText>
                        <p>
                            {'test'}
                        </p>
                        <p>
                            {'test'}
                        </p>
                    </CardText>
                </Card>
            </Page>

        );
    }
}