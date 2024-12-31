

'use client'

import { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

const CommentSection = () => {

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;


    const commentObject: Comment = {
      id: Date.now(),
      text: newComment,
    };

    setComments([commentObject, ...comments]);
    setNewComment("");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-cyan-900 mb-6 text-center">
        Share Your Thoughts
      </h2>

 
      <div className="relative mb-8">
        <textarea
          id="comment"
          className="peer w-full h-32 p-4 border-2 text-black border-blue-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-700 transition placeholder-transparent"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <label
          htmlFor="comment"
          className="absolute top-2 left-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-cyan-700 peer-focus:text-sm"
        >
          Write your comment...
        </label>
        <button
          onClick={handleAddComment}
          className="mt-4 px-6 py-3 bg-cyan-700 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-cyan-900 transition w-full"
        >
          Post Comment
        </button>
      </div>

      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/50"
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <div>
                <p className="text-gray-800 font-medium">{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
