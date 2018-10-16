import React, { Component} from "react"

export default class Editor {
    render() {
        return (
            <div className="remodal" data-remodal-id={`editor-${this.props.id}`}>
                <button data-remodal-action="close" className="remodal-close"></button>
                <h1>{this.props.firstname} {this.props.lastname}</h1>
                <p>Currently editing <strong>{this.props.editing}</strong> articles. 
                    Has edited ${this.props.edited} articles in total.</p>
                <input type="email" name="Editor Email" value={this.props.email} readonly="readonly" />
                <a data-article-action="contact" href={`mailto:${this.props.email}`} className="button button-blue">
                    <i className="fa fa-envelope" aria-hidden="true"></i> Contact Editor
                </a> 
            </div>
        )
    }
}

Editor.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    editing: PropTypes.number,
    edited: PropTypes.number,
    email: PropTypes.string
}