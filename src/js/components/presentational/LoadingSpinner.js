import React, { Component } from "react"

export default class LoadingSpinner extends Component {
    render() {
        return (
            <svg className="spinner" width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>

        )
    }
}
