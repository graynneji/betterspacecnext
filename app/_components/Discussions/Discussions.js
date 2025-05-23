import { ChatTeardropText, Clock, Heart } from "@phosphor-icons/react/dist/ssr";
import styles from "./Discussions.module.css";

function Discussions({
  setDiscussion,
  getCategoryColor,
  getCategoryIcon,
  setOpen,
  activeCategory,
  searchTerm,
}) {
  const discussions = [
    {
      id: 1,
      title: "Coping with morning anxiety - What works for you?",
      category: "anxiety",
      author: "SarahM",
      replies: 24,
      likes: 56,
      timeAgo: "2 hours ago",
      content:
        "I've been struggling with intense anxiety every morning. Looking for practical strategies...",
      isHot: true,
    },
    {
      id: 2,
      title: "Setting boundaries with family members",
      category: "relationships",
      author: "MindfulJourneys",
      replies: 18,
      likes: 42,
      timeAgo: "4 hours ago",
      content:
        "How do you maintain healthy boundaries while still showing love and care?",
      isHot: false,
    },
    {
      id: 3,
      title: "Burnout recovery - My 6-month journey",
      category: "career",
      author: "RecoveringPerfectionist",
      replies: 31,
      likes: 89,
      timeAgo: "1 day ago",
      content:
        "Sharing my experience recovering from severe burnout. Hope this helps someone...",
      isHot: true,
    },
    {
      id: 4,
      title: "Daily meditation practice for beginners",
      category: "self-care",
      author: "ZenSeeker",
      replies: 15,
      likes: 38,
      timeAgo: "2 days ago",
      content:
        "Starting a meditation practice can feel overwhelming. Here's how I built consistency...",
      isHot: false,
    },
    {
      id: 5,
      title: "Dealing with seasonal depression",
      category: "depression",
      author: "WinterWarrior",
      replies: 22,
      likes: 51,
      timeAgo: "3 days ago",
      content:
        "As the seasons change, my mood shifts dramatically. Anyone else experience this?",
      isHot: false,
    },
    {
      id: 6,
      title: "Building self-confidence after trauma",
      category: "growth",
      author: "PhoenixRising",
      replies: 27,
      likes: 73,
      timeAgo: "1 week ago",
      content:
        "My journey of rebuilding confidence and self-worth after difficult experiences...",
      isHot: true,
    },
  ];

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesCategory =
      activeCategory === "all" || discussion.category === activeCategory;
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const handleDiscussion = ({ discussion }) => {
    setDiscussion(discussion);
    setOpen(false);
  };
  return (
    <>
      {" "}
      {/* Discussions List */}
      <div className={styles.discussionsList}>
        {filteredDiscussions.map((discussion) => {
          const Icon = getCategoryIcon(
            discussion?.category || "ChatTeardropText"
          );
          console.log("cate", discussion?.category);
          //   const Icon = getCategoryIcon(discussion?.category);
          console.log("Icon", Icon);
          const categoryColor = getCategoryColor(discussion?.category);
          console.log("Icon", categoryColor);
          return (
            <div
              key={discussion.id}
              className={styles.discussionCard}
              onClick={() => handleDiscussion({ discussion })}
            >
              <div className={styles.discussionContent}>
                <div className={styles.discussionMeta}>
                  <div
                    className={`${styles.discussionCategoryIcon} ${
                      styles[
                        `categoryIcon${
                          categoryColor.charAt(0).toUpperCase() +
                          categoryColor.slice(1)
                        }`
                      ]
                    }`}
                  >
                    <Icon className={styles.discussionCategoryIconSvg} />
                  </div>
                  <span className={styles.discussionCategory}>
                    {discussion.category.replace("-", " ")}
                  </span>
                  {discussion.isHot && (
                    <span className={styles.hotBadge}>Hot</span>
                  )}
                </div>
                <h3 className={styles.discussionTitle}>{discussion.title}</h3>
                <p className={styles.discussionSnippet}>{discussion.content}</p>
                <span className={styles.discussionAuthor}>
                  by {discussion.author}
                </span>
                <div className={styles.discussionStats}>
                  <span className={styles.discussionStat}>
                    <ChatTeardropText className={styles.statIcon} />
                    <span>{discussion.replies} replies</span>
                  </span>
                  <span className={styles.discussionStat}>
                    <Heart className={styles.statIcon} />
                    <span>{discussion.likes} likes</span>
                  </span>
                  <span className={styles.discussionStat}>
                    <Clock className={styles.statIcon} />
                    <span>{discussion.timeAgo}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Load More */}
      <div className={styles.loadMoreWrapper}>
        <button className={styles.loadMoreBtn}>Load More Discussions</button>
      </div>
    </>
  );
}

export default Discussions;
