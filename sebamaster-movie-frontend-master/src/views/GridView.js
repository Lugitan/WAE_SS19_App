"use strict";

import React from 'react';
import GridItemsService from '../services/GridItemsService';
import Grid from '../components/Grid'
import UserService from './../services/UserService';


export class GridView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            userLoggedIn: false,
            activeLayout: {},
            loading: true
        }
    }

    componentWillMount(){
        //console.log(UserService.getCurrentUser().lg[0].y);

        var layouts = [
            {
                id:"test",
                default: true,
                lg: [
                    { i: 'ad1', x: 0, y: 0, w: 1, h: 2 , static: true},
                    { i: 'ad2', x: 12, y: 0, w: 1, h: 3 , static: true},
                    { i: 'e', x: 1,y: 10, w: 3, h: 1 , static: false},
                    { i: 'f', x: 4, y: 0, w: 5, h: 2 , static: false},
                ]
            },
            {
                id:"omegatest",
                default: false,
                lg: [
                    { i: 'ad1', x: 0, y: 0, w: 1, h: 2 , static: true},
                    { i: 'ad2', x: 2, y: 0, w: 1, h: 3 , static: true},
                    { i: 'e', x: 4,y: 0, w: 3, h: 1 , static: false},
                    { i: 'f', x: 7, y: 0, w: 5, h: 2 , static: false},
                ]
            },

        ]

        this.setState({
            loading: false,
            data: [...layouts]
        });

        if(!UserService.isAuthenticated()) {
            layouts.forEach(el => {
                if(el.default) {
                    this.setState({
                        activeLayout: el
                    })
                }
            })
        } else {
            console.log(UserService.getCurrentUser().lg);
            layouts.forEach(el => {
                if(true) {
                    this.setState({
                        activeLayout: UserService.getCurrentUser().lg
                        })
                }
            })
        }

        // console.log("default grid found");
        // GridItemsService.getDefaultGrid().then((data) => {
        //     console.log(data)
        //     if(data.default) {
        //         this.setState({
        //             layouts: [...data],
        //             loading: false
        //         });
        //     }
        // }).catch((e) => {
        //     console.error(e);
        // });
    }

    selectLayout(id) {
        this.state.data.forEach(el => {
            if(el.id == id) {
                console.log(el)
                this.setState({
                    activeLayout: el
                })
            }
        })
    }

    selectDefaultLayout() {
        console.log(this.state.data)
        this.state.data.forEach(el => {
            if(el.default) {
                this.setState({
                    activeLayout: el
                })
            }
        })
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Grid layout={this.state.activeLayout} onUserLogin={(id) => {this.selectLayout(id)}} onUserLogout={() => {this.selectDefaultLayout}} />
        )
    }
}