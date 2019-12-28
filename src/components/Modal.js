import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default class Modal extends Component {
    render() {
        return 
             Swal.fire({
                    title: 'Add a child node',
                    input: 'text',
                    inputValue: '',
                    showCancelButton: true,
                    inputValidator: (value) => {
                      if (!value) {
                        return 'You need to write something!'
                      }
                    }
                  });
    }
}