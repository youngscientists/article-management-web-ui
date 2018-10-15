import React, { Component } from "react";
import ReactDOM from "react-dom";
import StatusOptions from "./StatusOptions"
import LoadingSpinner from "./LoadingSpinner"

class Article extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div className="remodal" data-remodal-id={this.props.id}>
        <button data-remodal-action="close" className="remodal-close"></button>
        <h1>{this.props.title}</h1>
        <h3> {this.props.title}  |  {this.props.subject} </h3>
        <small> Deadline: {this.props.deadline} </small>
        <input type="email" name="Author Email" value={this.props.author.email} readonly="readonly" />
        <a data-article-action="contact" href={`mailto:${this.props.author.email}`} className="button button-blue"><i className="fa fa-envelope" aria-hidden="true"></i> Contact Author</a>
        
        <hr/>
          
        <input type="text" className="editorName" name="Editor Name" value={this.props.editor.name} placeholder="Editor Name"/>
        <input type="email" name="Editor Email" value={this.props.editor.email} placeholder="Editor Email" />
        <button className="button button-black assign" data-toast="assign"><i className="fa fa-user" aria-hidden="true"></i> Assign</button>
        
        <hr/>
        
        <p>Change status from <span value={this.props.status}>{this.props.status}</span> to: 
        <StatusOptions selected={this.props.status}></StatusOptions>
        
        <button className="button button-green updatestatus" data-toast="update"><i className="fa fa-check" aria-hidden="true"></i> Update</button>
        </p>
        
        <a href={`https://docs.google.com/document/u/0/d/${this.props.id}`}  target="_blank">
            <button data-article-action="edit" className="button"><i className="fa fa-eye" aria-hidden="true"></i> Read</button>
        </a>
        <a href={this.props.markingGrid}  target="_blank">
            <button data-article-action="mark" className="button"><i className="fa fa-comment" aria-hidden="true"></i> Mark</button>
        </a>
        <a href={`https://drive.google.com/drive/folders/${this.props.folderId}`} target="_blank">
            <button data-article-action="folder" className="button"><i className="fa fa-folder" aria-hidden="true"></i> Folder</button>
        </a>
        <a href={`https://docs.google.com/document/u/0/d/${this.props.id}export?format=docx`} className="button-disabled">
            <button data-article-action="download" data-toast="download" className="button"><i className="fa fa-cloud-download" aria-hidden="true"></i> Download</button></a>
        <hr/>
         {this.props.copyright} 
        <hr/>
        <p>Additional Notes:</p>
        <textarea>{this.props.notes}</textarea> 
        </div>
    );
  }
}

Article.propTypes = {
    title: PropTypes.string,
    subject: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string,
    deadline: PropTypes.string,
    note: PropTypes.string,
    folderId: PropTypes.string,
    markingGrid: PropTypes.string,
    copyright: PropTypes.string,
    date: PropTypes.string,
};

export default Article;