"use strict";

import React from 'react';

import { MovieDetail } from '../components/MovieDetail';

import { Search } from '../components/Search';

import MovieService from '../services/MovieService';

import TeamService from '../services/TeamService'


export class SearchView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        /*let id = this.props.match.params.id;

        MovieService.getMovie(id).then((data) => {
            this.setState({
                movie: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });*/
        TeamService.getTeams().then((data) => {
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
        console.log('searching');
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            //<MovieDetail movie={this.state.movie} onDelete={(id) => this.deleteMovie(id)}/>
            <Search team={this.state.team}/>
        );
    }
}
