"use strict";

import React from 'react';
import {Responsive, WidthProvider, GridLayout} from 'react-grid-layout';
import { Card, Icon } from 'semantic-ui-react';

import './../styles/grid.css';
import './../../node_modules/react-grid-layout/css/styles.css';
import './../../node_modules/react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Grid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 1, y: 0, w: 3, h: 1 },
            { i: 'c', x: 4, y: 0, w: 1, h: 1 },
            { i: 'd', x: 0, y: 0, w: 1, h: 3 },
            { i: 'e', x: 2, y: 0, w: 3, h: 3 },
            { i: 'f', x: 8, y: 5, w: 2, h: 2 }
        ];
        var layouts = {
            lg: layout,
        }
        return (
            <div>
                <ResponsiveGridLayout className="layout" layouts={layouts}
                    breakpoints={{lg: 1600, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    isDraggable={true} 
                    className="layout grid-custom" 
                    isResizable={false} 
                    useCSSTransforms={true} 
                    verticallyCompact={true} 
                >
                    <div key="a">1</div>
                    <div key="b">2</div>
                    <div key="f">3</div>
                </ResponsiveGridLayout>
            </div>
        )
    }
}