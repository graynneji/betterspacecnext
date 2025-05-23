import React, { useState } from "react";
// import {
// //   Heart,
//   MessageCircle,
//   Clock,
//   ShareNetwork,
//   Bookmark,
//   ThumbsUp,
//   ArrowLeft,
//   Send,
//   DotsThreeVertical,
//   Code,
//   Lightbulb,
//   HelpCircle,
//   Users,
//   Briefcase,
//   Coffee,
// } from "lucide-react";
import styles from "./DiscussionView.module.css";
import {
  Heart,
  Clock,
  ShareNetwork,
  BookmarkSimple,
  ThumbsUp,
  ArrowLeft,
  PaperPlaneRight,
  DotsThreeVertical,
  ChatTeardropText,
} from "@phosphor-icons/react/dist/ssr";

const DiscussionView = ({
  discussion,
  setOpen,
  category,
  getCategoryColor,
  getCategoryIcon,
}) => {
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "SC",
      content:
        "This is a great question! I've been dealing with something similar in my React projects. One approach I've found helpful is...",
      timeAgo: "2 hours ago",
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 11,
          author: "Mike Johnson",
          avatar: "MJ",
          content:
            "Thanks for sharing this approach! Have you tried using custom hooks for this?",
          timeAgo: "1 hour ago",
          likes: 5,
          isLiked: false,
        },
      ],
    },
    {
      id: 2,
      author: "Alex Rodriguez",
      avatar: "AR",
      content:
        "I had the exact same issue last week. Here's what worked for me...",
      timeAgo: "4 hours ago",
      likes: 8,
      isLiked: false,
      replies: [],
    },
    {
      id: 3,
      author: "Emma Thompson",
      avatar: "ET",
      content:
        "Great discussion! Adding my two cents here - I think the key is to focus on performance optimization from the start.",
      timeAgo: "6 hours ago",
      likes: 15,
      isLiked: false,
      replies: [],
    },
  ]);

  //   const getCategoryIcon = (category) => {
  //     const icons = {
  //       frontend: Code,
  //       backend: Briefcase,
  //       design: Lightbulb,
  //       general: MessageCircle,
  //       help: HelpCircle,
  //       career: Users,
  //       random: Coffee,
  //     };
  //     return icons[category] || MessageCircle;
  //   };

  //   const getCategoryColor = (category) => {
  //     const colors = {
  //       frontend: "#3b82f6",
  //       backend: "#10b981",
  //       design: "#f59e0b",
  //       general: "#6366f1",
  //       help: "#ef4444",
  //       career: "#8b5cf6",
  //       random: "#06b6d4",
  //     };
  //     return colors[category] || "#6366f1";
  //   };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "You",
        avatar: "YU",
        content: newComment,
        timeAgo: "Just now",
        likes: 0,
        isLiked: false,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment
      )
    );
  };

  const Icon = getCategoryIcon(discussion?.category);
  console.log(Icon, "I");
  const categoryColor = getCategoryColor(discussion?.category);

  // Sample discussion data if none provided
  const discussionData = {
    id: 1,
    title: "How to optimize React component re-renders?",
    category: discussion?.category,
    author: "John Doe",
    timeAgo: "3 hours ago",
    content: `I've been working on a complex React application and I'm noticing performance issues with unnecessary re-renders. I have several components that are re-rendering even when their props haven't changed.

Here's what I've tried so far:
- Using React.memo() for function components
- Implementing useMemo and useCallback hooks
- Moving state closer to where it's used

The application has a deep component tree with a lot of shared state managed through Context API. Some components are still re-rendering more than they should.

What are the best practices for optimizing React re-renders in large applications? Are there any tools or techniques you'd recommend for identifying the root cause of unnecessary re-renders?

Any insights would be greatly appreciated!`,
    likes: 24,
    replies: 12,
    views: 156,
    isHot: true,
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={() => setOpen(true)} className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
          Back to discussions
        </button>

        {/* Discussion Meta */}
        <div className={styles.discussionMeta}>
          {/* <div
            className={styles.categoryIcon}
            style={{ backgroundColor: categoryColor }}
          > */}
          <div
            className={`${styles.categoryIcon} ${
              styles[
                `categoryIcon${
                  categoryColor.charAt(0).toUpperCase() + categoryColor.slice(1)
                }`
              ]
            }`}
          >
            <Icon className={styles.categoryIconSvg} />
          </div>
          <span className={styles.categoryText}>
            {discussionData.category?.replace("-", " ")}
          </span>
          {discussionData.isHot && <span className={styles.hotBadge}>Hot</span>}
        </div>

        {/* Title */}
        <h1 className={styles.title}>{discussionData.title}</h1>

        {/* Author and Meta */}
        <div className={styles.authorMeta}>
          <div className={styles.authorInfo}>
            <span>
              by <strong>{discussionData.author}</strong>
            </span>
            <div className={styles.timeInfo}>
              <Clock className={styles.timeIcon} />
              <span>{discussionData.timeAgo}</span>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <ShareNetwork className={styles.actionIcon} />
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={styles.actionButton}
            >
              <BookmarkSimple
                className={`${styles.actionIcon} ${
                  isBookmarked ? styles.bookmarked : ""
                }`}
              />
            </button>
            <button className={styles.actionButton}>
              <DotsThreeVertical className={styles.actionIcon} />
            </button>
          </div>
        </div>
      </div>

      {/* Discussion Content */}
      <div className={styles.content}>
        <div className={styles.prose}>
          {discussionData?.content.split("\n").map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Stats and Actions */}
        <div className={styles.statsSection}>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <ChatTeardropText className={styles.statIcon} />
              <span>{discussionData.replies} replies</span>
            </div>
            <div className={styles.statItem}>
              <Heart className={styles.statIcon} />
              <span>{discussionData.likes} likes</span>
            </div>
            <div className={styles.statItem}>
              <span>{discussionData.views} views</span>
            </div>
          </div>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
          >
            <Heart
              className={`${styles.likeIcon} ${
                isLiked ? styles.likeIconFilled : ""
              }`}
            />
            {isLiked ? "Liked" : "Like"}
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2 className={styles.commentsTitle}>Comments ({comments.length})</h2>

        {/* Add Comment Form */}
        <div className={styles.addCommentForm}>
          <div className={styles.commentForm}>
            <div className={styles.userAvatar}>YU</div>
            <div className={styles.commentInputWrapper}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className={styles.commentInput}
                rows="3"
              />
              <div className={styles.commentActions}>
                <button
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim()}
                  className={styles.submitButton}
                >
                  <PaperPlaneRight className={styles.submitIcon} />
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className={styles.commentsList}>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.commentItem}>
              <div className={styles.comment}>
                <div className={styles.commentAvatar}>{comment.avatar}</div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <span className={styles.commentAuthor}>
                      {comment.author}
                    </span>
                    <span className={styles.commentTime}>
                      {comment.timeAgo}
                    </span>
                  </div>
                  <p className={styles.commentText}>{comment.content}</p>

                  <div className={styles.commentFooter}>
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      className={`${styles.commentLikeButton} ${
                        comment.isLiked ? styles.commentLiked : ""
                      }`}
                    >
                      <ThumbsUp
                        className={`${styles.commentLikeIcon} ${
                          comment.isLiked ? styles.commentLikeIconFilled : ""
                        }`}
                      />
                      <span>{comment.likes}</span>
                    </button>
                    <button className={styles.replyButton}>Reply</button>
                  </div>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className={styles.replies}>
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className={styles.reply}>
                          <div className={styles.replyAvatar}>
                            {reply.avatar}
                          </div>
                          <div className={styles.replyContent}>
                            <div className={styles.replyHeader}>
                              <span className={styles.replyAuthor}>
                                {reply.author}
                              </span>
                              <span className={styles.replyTime}>
                                {reply.timeAgo}
                              </span>
                            </div>
                            <p className={styles.replyText}>{reply.content}</p>
                            <button className={styles.replyLikeButton}>
                              <ThumbsUp className={styles.replyLikeIcon} />
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionView;
