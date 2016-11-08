 // import React from 'react';
 // import {unixTimeToString} from '../util.js'
 // import {Link} from 'react-router';

 // export default class Comment extends React.Component {

 //     constructor(props) {
 //       super(props);
 //       this.state = props.state;
 //     }

 //   render() {
 //     return (
 //       <div>
 //         <div className="media-left media-top">
 //           PIC
 //         </div>
 //         <div className="media-body">
 //           <Link to={"/profile/"  + this.props.author._id}>
 //           {this.props.author.fullName}
 //           </Link> {this.props.children}
 //           <br /><a href="#">Like</a> · <a href="#">Reply</a> ·  { this.state.likeCounter.length}
 //             {unixTimeToString(this.props.postDate)}
 //         </div>
 //       </div>
 //     )
 //   }
 // }


 import React from 'react';
 import {unixTimeToString} from '../util.js'
 import {Link} from 'react-router';
 import {unlikeComment, likeComment} from '../server';

 export default class Comment extends React.Component {

   constructor(props) {
     super(props);
     this.state = props.data;
     this.state.feedItemID = props.feedItemID;
     this.state.commentIdx = props.commentIdx;
   }

   handleLikeClick(clickEvent) {
     clickEvent.preventDefault();
     if (clickEvent.button === 0) {
       var callbackFunction = (updatedLikeCounter) => {
         this.setState({likeCounter: updatedLikeCounter});
       };

       if (this.didUserLike()) {
         unlikeComment(this.state.feedItemID, this.state.commentIdx, 4, callbackFunction);
       } else {
         likeComment(this.state.feedItemID, this.state.commentIdx, 4, callbackFunction);
       }
     }
   }

   didUserLike() {
     var likeCounter = this.state.likeCounter;
     var liked = false;
     for (var i = 0; i < likeCounter.length; i  ) {
       if (likeCounter[i] === 4) {
       liked = true;

       break;
       }
     }
     return liked;
   }


   render() {
     var likeButtonText = "Like";
     if (this.didUserLike()) {
       likeButtonText = "Unlike";
     }

  return (
    <div>
      <div className="media-left media-top">
        PIC
      </div>
      <div className="media-body">
        <Link to={"/profile/" +  this.props.author._id}>
           {this.props.author.fullName}
           </Link> {this.props.children}
           <br /> <a href="#" onClick={(e) => this.handleLikeClick(e)}>{likeButtonText}</a> · <a href="#">Reply</a> · <span className="glyphicon glyphicon-thumbs-up"></span><a href="#">{ this.state.likeCounter.length}</a> ·
                        {unixTimeToString(this.props.postDate)}
        {unixTimeToString(this.props.postDate)}
      </div>
    </div>
  )
}
}
