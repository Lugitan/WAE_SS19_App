"use strict";

import React from 'react';

import { Search } from '../components/Search';

import TeamService from '../services/TeamService'


export class SearchView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let team_name = this.props.match.params.team_name;

        TeamService.getTeams(team_name).then((data) => {
            this.setState({
                team: data,
                loading: false
                });
        }).catch((e) => {
                console.error(e);
        });

    }

    deleteMovie(id) {
        /*MovieService.deleteMovie(id).then((message) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.log(e);
        });*/
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Search team={this.state.team}/>
        );
    }
}
