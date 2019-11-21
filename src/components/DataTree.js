import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import { easeElastic } from 'd3-ease';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const data = {
    name: 'Parent',
    textProps: { x: -30, y: 25 },
    children: [{
        name: 'Child One',
        textProps: { x: -30, y: 25 },
    }, {
        name: 'Child Two',
        textProps: { x: -25, y: 25 },
    },
    {
        name: 'Child Three',
        textProps: { x: -25, y: 25 },
        children: [{
            name: 'Grand Child One',
            textProps: { x: -25, y: 25 },
        }, {
            name: 'Grand Child Two',
            textProps: { x: -25, y: 25 },
        },
        {
            name: 'Grand Child Three',
            textProps: { x: -25, y: 25 },
            children: [{
                name: 'Leaf One',
                textProps: { x: -25, y: 25 },
            }, {
                name: 'Leaf Two',
                textProps: { x: -25, y: 25 },
            },
            {
                name: 'Leaf Three',
                textProps: { x: -25, y: 25 },
            }]
        }]
    }]
};

const handleClick = (event, node,type) => {
    return (Swal.fire({
        title: `Add a child node for ${node} and type ${type}`,
        input: 'text',
        inputValue: '',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            } else if('ABC' !== value){
                return 'You can only enter `ABC`'
            } else {
                return Swal.fire(`You added a grand child ${value}`)
            }
        }
    }))
};
export default class DataTree extends Component {
    render() {
        return <Tree
                data={data}
                height={700}
                width={1000}
                animated
                duration={1000}
                easing={easeElastic}
                nodeRadius={15}
                margins={{ top: 20, bottom: 10, left: 200, right: 200 }}
                gProps={{
                    className: 'node',
                    onClick: handleClick
                }}
                svgProps={{
                    className: 'custom'
                }}
            />;
    }
}