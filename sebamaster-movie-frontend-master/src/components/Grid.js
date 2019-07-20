"use strict";

import React from 'react';
import {Responsive, WidthProvider, GridLayout} from 'react-grid-layout'; // Source: https://github.com/STRML/react-grid-layout
import { Card, Icon } from 'semantic-ui-react';

import './../styles/grid.css';
import './../../node_modules/react-grid-layout/css/styles.css';
import './../../node_modules/react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Grid extends React.Component {

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
            layouts: [],
            userLoggedIn: false
        }

        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleItemSelect() {(e, name) => {
        console.log(name);
    }}

    generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
        return (
        <div key={i} className={l.static ? "static" : ""}>
            {l.static ? (
            <span
                className="text"
                title="This item is static and cannot be removed or resized."
            >
                Static - {i}
            </span>
            ) : (
            <span className="text">{i}</span>
            )}
        </div>
        );
    });
    }

    handleChange(current,   all){
        console.log(current);
    }



    render() {
        this.state.layouts = {
            lg: [
                { i: 'ad1', x: 0, y: 0, w: 1, h: 2 , static: true},
                { i: 'ad2', x: 12, y: 0, w: 1, h: 3 , static: true},
                { i: 'e', x: 1,y: 0, w: 3, h: 1 , static: false},
                { i: 'f', x: 4, y: 0, w: 5, h: 2 , static: false},
            ]
        }
        return (
            <div>
                <ResponsiveGridLayout className="layout" layouts={this.state.layouts}
                    breakpoints={{lg: 1600, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    isDraggable={true} 
                    className="layout grid-custom" 
                    isResizable={false} 
                    useCSSTransforms={true} 
                    verticallyCompact={true}
                    preventCollision={false}
                    rowHeight={100}
                    onLayoutChange={this.handleChange}
                >
                    <div key="ad1" name="ad1">
                        <img src="https://cdn.dribbble.com/users/227808/screenshots/1442473/swim-ad.gif" alt="ad" className="ad" /> 
                    </div>
                    <div key="ad2" name="ad2">
                        <img src="https://media.giphy.com/media/QRlvT2tKQcwtq/giphy.gif" alt="ad" className="ad" /> 
                    </div>
                    <div key="e" name="table">2</div>
                    <div key="f" name="article">3</div>
                    {/* {this.generateDOM()} */}
                </ResponsiveGridLayout>
            </div>
        )
    }
}