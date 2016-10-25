import React from 'react';
export default class StatusUpdate extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <div className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Someone</a>
                <br /> Yesterday at 3:48pm · Austin, TX · <span
                  className="glyphicon glyphicon-user"></span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <span className="caret pull-right"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
