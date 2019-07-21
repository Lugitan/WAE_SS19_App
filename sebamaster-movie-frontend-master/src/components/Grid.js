"use strict";

import React from 'react';
import {Responsive, WidthProvider, GridLayout} from 'react-grid-layout'; // Source: https://github.com/STRML/react-grid-layout
import { Card, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import Page from './Page';
import Match from './GridElements/Match';

import './../styles/grid.css';
import './../../node_modules/react-grid-layout/css/styles.css';
import './../../node_modules/react-resizable/css/styles.css';
import UserService from './../services/UserService';


const ResponsiveGridLayout = WidthProvider(Responsive);

class Grid extends React.Component {

    // static layout = [
    //     { i: 'ad', x: 0, y: 0, w: 1, h: 2 , static: true},
    //     { i: 'b', x: 1, y: 0, w: 3, h: 1 },
    //     { i: 'c', x: 4, y: 0, w: 1, h: 1 },
    //     { i: 'd', x: 0, y: 0, w: 1, h: 2 },
    //     { i: 'e', x: 1, y: 0, w: 3, h: 3 },
    //     { i: 'f', x: 4, y: 0, w: 5, h: 2 }
    // ]

    // static defaultProps = {
    //     className: "layout",
    //     rowHeight: 30,
    //     onLayoutChange: function() {},
    //     cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    //     initialLayout: layout
    // };

    constructor(props) {
        super(props);

        this.state = {
            currentBreakpoint: "lg",
            compactType: "vertical",
            mounted: false,
            layout: this.props.layout,
            userLoggedIn: false,
        }

        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleItemSelect() {(e, name) => {
        console.log(name);
    }}



    generateDOM() {
        var img = "";
        console.log(this.state.layout.grid.lg);
        return _.map(this.state.layout.grid.lg, function(l, i) {
            var rand = Math.random();
            if(rand < 0.3) {
                img = "https://cdn.dribbble.com/users/227808/screenshots/1442473/swim-ad.gif"
            } else if(rand < 0.6) {
                img = "https://media.giphy.com/media/QRlvT2tKQcwtq/giphy.gif"
            } else {
                img = "https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif"
            }
            return (
                <div key={l.i} className={l.static ? "static" : ""}>
                {l.static ? (
                    <img src={img} alt="ad" className="ad" />
                ) : (l.type == "match" ? (
                    <Match></Match>
                ) : (l.type == "table" ? (
                    <p>table</p>
                ): "")
                )
            }
            </div>
            );
        });
    }

    handleChange(current,   all){



        if(UserService.isAuthenticated()){

        current.forEach((el) => {
            if(el.i == "e") {
                el.type = "match"
            } else if(el.i == "f") {
                el.type = "match"
            }
        })
            var saved = {
                grid:
                {
                    lg: current

                }}

            UserService.updateLayout(saved, UserService.getCurrentUser().id);
            console.log("auth");

            //workaround for saving grid
            UserService.login("Tester","a");
        }
    }

    render() {
        return (
            <Page>
                <ResponsiveGridLayout className="layout" layouts={this.state.layout.grid}
                    breakpoints={{lg: 1600, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    isDraggable={true} 
                    className="layout grid-custom" 
                    isResizable={false} 
                    useCSSTransforms={true} 
                    verticallyCompact={true}
                    preventCollision={false}
                    rowHeight={70}
                    onLayoutChange={this.handleChange}
                >
                    {/* <div key="ad1" name="ad1">
                        <img src="https://cdn.dribbble.com/users/227808/screenshots/1442473/swim-ad.gif" alt="ad" className="ad" /> 
                    </div>
                    <div key="ad2" name="ad2">
                        <img src="https://media.giphy.com/media/QRlvT2tKQcwtq/giphy.gif" alt="ad" className="ad" /> 
                    </div>
                    <div key="e" name="table">2</div>
                    <div key="f" name="article">3</div> */}
                    {this.generateDOM()}
                </ResponsiveGridLayout>
            </Page>
        )
    }
}

export default withRouter(Grid);