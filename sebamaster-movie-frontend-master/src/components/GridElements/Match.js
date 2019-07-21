"use strict";

import React from 'react';

export default class MatchElement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            team1: "",
            team2: "",
            logo_t1: "",
            logo_t2: "",
            score_t1: 0,
            score_t2: 0,
        }
    }

    componentWillMount() {
        this.setState({
            team1: "Clockwork Vendetta",
            team2: "Team Gigantti",
            logo_t1: "https://liquipedia.net/commons/images/thumb/9/99/Clockwork_Vendetta_logo.png/945px-Clockwork_Vendetta_logo.png",
            logo_t2: "https://liquipedia.net/commons/images/e/e3/Team_Gigantti_logo.png",
            score_t1: 4,
            score_t2: 3
        })
    }

    render() {
        return (
            <div className="match">
                <img src={this.state.logo_t1} alt={this.state.team1} className="match_logo" />
                <span className="match_teamName">{this.state.team1}</span>
                <span className="match_score">{this.state.score_t1}</span>
            </div>
        );
    }
}