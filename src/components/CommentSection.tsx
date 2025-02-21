"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaUser, FaRegComment, FaRetweet, FaRegHeart, FaShareAlt } from "react-icons/fa"

interface Comment {
  id: string
  author: string
  username: string
  content: string
  date: string
  likes: number
  retweets: number
  replies?: Comment[]
}

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  useEffect(() => {
    // Fetch comments for the post (mock implementation)
    const fetchComments = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setComments([
        {
          id: "1",
          author: "Alice Johnson",
          username: "alice_j",
          content: "Great article! I especially liked the section on predictive analytics.",
          date: "2023-05-16T10:30:00Z",
          likes: 5,
          retweets: 2,
          replies: [
            {
              id: "1-1",
              author: "John Doe",
              username: "john_d",
              content: "I agree! The predictive analytics part was really insightful.",
              date: "2023-05-16T11:15:00Z",
              likes: 2,
              retweets: 0,
            },
          ],
        },
        {
          id: "2",
          author: "Bob Smith",
          username: "bob_s",
          content: "I'd love to see more examples of AI implementation in small businesses.",
          date: "2023-05-16T11:45:00Z",
          likes: 3,
          retweets: 1,
        },
      ])
    }
    fetchComments()
  }, [])

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() === "") return

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Current User",
      username: "current_user",
      content: newComment,
      date: new Date().toISOString(),
      likes: 0,
      retweets: 0,
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleSubmitReply = (parentId: string, replyContent: string) => {
    if (replyContent.trim() === "") return

    const newReply: Comment = {
      id: Date.now().toString(),
      author: "Current User",
      username: "current_user",
      content: replyContent,
      date: new Date().toISOString(),
      likes: 0,
      retweets: 0,
    }

    setComments(
      comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          }
        }
        return comment
      }),
    )

    setReplyingTo(null)
  }

  const handleReply = (id: string) => {
    setReplyingTo(replyingTo === id ? null : id)
  }

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? "ml-12 mt-2" : "border-b border-gray-700"} py-4`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <FaUser className="text-gray-300" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">{comment.author}</span>
            <span className="text-gray-500">@{comment.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
          </div>
          <p className="text-white mt-1">{comment.content}</p>
          <div className="flex items-center space-x-6 mt-3 text-gray-500">
            <button onClick={() => handleReply(comment.id)} className="flex items-center space-x-2 hover:text-blue-400">
              <FaRegComment />
              <span>{comment.replies?.length || 0}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-400">
              <FaRetweet />
              <span>{comment.retweets}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-red-400">
              <FaRegHeart />
              <span>{comment.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-400">
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>
      {replyingTo === comment.id && !isReply && (
        <div className="mt-4 ml-12">
          <ReplyForm onSubmit={(content) => handleSubmitReply(comment.id, content)} />
        </div>
      )}
      {comment.replies && comment.replies.map((reply) => renderComment(reply, true))}
    </div>
  )

  return (
    <div className="mt-12 bg-black rounded-lg shadow-lg p-4 border border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-white">Comments</h2>
      <form onSubmit={handleSubmitComment} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Post your reply"
          rows={3}
        />
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Post
          </button>
        </div>
      </form>
      <div className="space-y-4">{comments.map((comment) => renderComment(comment))}</div>
    </div>
  )
}

interface ReplyFormProps {
  onSubmit: (content: string) => void
}

function ReplyForm({ onSubmit }: ReplyFormProps) {
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(content)
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Post your reply"
        rows={2}
      />
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          Reply
        </button>
      </div>
    </form>
  )
}

