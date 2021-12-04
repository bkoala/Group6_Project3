import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
      Survey
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} 
                </h5>
                <p className="card-body">
                <input type="radio" id="html" name="fav_language" value={comment.commentText}/>
  <label for="html">{comment.commentText}</label><br/>
<input  type="radio" id="html" name="fav_language" value={comment.A1}/>
  <label for="html">{comment.A1}</label><br/>
<input type="radio" id="html" name="fav_language" value={comment.A2}/>
  <label for="html">{comment.A2}</label><br/>
    </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
