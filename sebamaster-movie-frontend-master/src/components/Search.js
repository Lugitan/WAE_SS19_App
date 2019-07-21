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

                    <CardTitle title={this.props.team[0].team_name} subtitle={'Hier könnte ihr Subtitle stehen'} />

                    <CardText>
                        <p>
                            {'Hier könnte ihre Beschreibung stehen.'}
                        </p>
                        <p>
                            {'Hier könnte eine erweiterte Beschreibung stehen.'}
                        </p>
                    </CardText>
                </Card>
            </Page>

        );
    }
}