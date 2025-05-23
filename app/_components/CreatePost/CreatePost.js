import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import {
  X,
  Image,
  Tag,
  Users,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react/dist/ssr";
import { createPost } from "@/app/_lib/actions";
import { useSearchParams } from "next/navigation";

export default function CreatePost({ isOpen, setIsOpen }) {
  const searchParams = useSearchParams();
  const [character, setCharacter] = useState({
    content: "",
  });
  const disabled =
    character.content.length > 2000 || character.content.length < 10;
  const userID = searchParams.get("userID");
  const author = searchParams.get("author");
  const authorInfo = {
    userID,
    author,
  };
  const post = createPost.bind(null, authorInfo);
  const categories = [
    "anxiety",
    "depression",
    "relationship",
    "career",
    "family",
    "self-care",
    "growth",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Post data:", formData);
    setIsOpen(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Create New Post</h2>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <form
          action={async (formData) => {
            const { data, error } = await post(formData);
            console.log(data, error);
            if (!error) setIsOpen(false);
          }}
          className={styles.content}
        >
          {/* Title Input */}
          <div className={styles.field}>
            <label htmlFor="title" className={styles.label}>
              Post Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              //   value={formData.title}
              //   onChange={handleInputChange}
              className={styles.input}
              placeholder="Enter an engaging title for your post..."
              required
            />
          </div>

          {/* Description */}
          <div className={styles.field}>
            <label htmlFor="content" className={styles.label}>
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              //   value={formData.description}
              onChange={handleInputChange}
              rows={5}
              className={styles.textarea}
              placeholder="Share your thoughts, ideas, or questions with the community..."
              required
            />
            <div className={styles.characterCount}>
              {character.content.length}/2000 characters
            </div>
          </div>

          {/* Category and Visibility Row */}
          <div className={styles.gridRow}>
            {/* Category */}
            <div className={styles.field}>
              <label htmlFor="category" className={styles.label}>
                Category *
              </label>
              <select
                id="category"
                name="category"
                // value={formData.category}
                // onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className={styles.field}>
            <label htmlFor="tags" className={styles.label}>
              Tags
            </label>
            <div className={styles.inputWithIcon}>
              <Tag size={18} className={styles.inputIcon} />
              <input
                type="text"
                id="tags"
                name="tags"
                // value={formData.tags}
                // onChange={handleInputChange}
                className={styles.inputWithPadding}
                placeholder="Add tags separated by commas (e.g., tech, discussion, help)"
              />
            </div>
            <div className={styles.helpText}>
              Tags help others discover your post
            </div>
          </div>

          {/* Additional Options */}
          {/* <div className={styles.optionsSection}> */}
          {/* <h3 className={styles.optionsTitle}>Post Options</h3>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="allowComments"
                checked={formData.allowComments}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                Allow comments on this post
              </span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="pinPost"
                checked={formData.pinPost}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                Pin this post to the top
              </span>
            </label> */}
          {/* </div> */}

          {/* File Upload */}
          {/* <div className={styles.field}>
            <label className={styles.label}>Attachments</label>
            <div className={styles.uploadArea}>
              <Image size={32} className={styles.uploadIcon} />
              <p className={styles.uploadText}>
                <span className={styles.uploadLink}>Click to upload</span> or
                drag and drop
              </p>
              <p className={styles.uploadSubtext}>
                Images, videos, or documents (Max 10MB)
              </p>
            </div>
          </div> */}

          {/* Footer Buttons */}
          <div className={styles.footer}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={styles.cancelButton}
            >
              Cancel
            </button>

            <div className={styles.actionButtons}>
              <button
                disabled={disabled}
                type="submit"
                className={styles.publishButton}
              >
                Publish Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
