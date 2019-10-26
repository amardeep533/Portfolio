import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import { easeElastic } from 'd3-ease';

const data = {
    name: 'Parent',
    children: [{
        name: 'Child One'
    }, {
        name: 'Child Two',
        gProps: {
            className: 'red-node',
            onClick: (event, node) =>
                alert(`Clicked ${node}!`)
        }
    },
    {
        name: 'Child Three',
        children: [{
            name: 'Grand Child One'
        }, {
            name: 'Grand Child Two',
            gProps: {
                className: 'red-node',
                onClick: (event, node) =>
                    alert(`Clicked ${node}!`)
            }
        },
        {
            name: ' Grand Child Three',
            children: [{
                name: 'Leaf One'
            }, {
                name: 'Leaf Two',
                gProps: {
                    className: 'red-node',
                    onClick: (event, node) =>
                        alert(`Clicked ${node}!`)
                }
            },
            {
                name: 'Leaf Three'
            }]
        }]
    }]
};
export default class DataTree extends Component {
    render() {
        return <div className="custom-container">
        <Tree
            data={data}
            height={600}
            width={800}
            animated
            duration={1000}
            easing={easeElastic}
            svgProps={{
                className: 'custom'
            }} />
    </div>;
    }
}