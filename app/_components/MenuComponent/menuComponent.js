import Link from "next/link";
import React from "react";
import { GrBottomCorner } from "react-icons/gr";

const MenuComponent = ({ isOpen, handleOpenClose }) => {
  const styles = {
    // overlay: {
    //   position: "fixed",
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: "rgba(0, 0, 0, 0.3)",
    //   display: isVisible ? "flex" : "none",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   zIndex: 1000,
    // },
    closeButton: {
      position: "absolute",
      top: "-8px",
      right: "-8px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#ff4757",
      color: "white",
      border: "none",
      cursor: "pointer",
      fontSize: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    },
    container: {
      position: "absolute",
      width: "150px",
      height: "auto",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
      padding: "10px",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      bottom: "40px",
    },
    menuItem: {
      padding: "8px",
      textAlign: "center",
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      transition: "background-color 0.2s ease",
      color: "#333",
    },
    deleteItem: {
      padding: "8px",
      textAlign: "center",
      backgroundColor: "#ffe6e6",
      border: "1px solid #ffcccc",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      transition: "background-color 0.2s ease",
      color: "#d63384",
    },
  };

  if (!isOpen) return null;

  return (
    // < style={styles.overlay} onClick={(prev)=>!prev}>
    <div style={styles.container}>
      <button
        style={styles.closeButton}
        onClick={handleOpenClose}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff3742")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4757")}
      >
        ×
      </button>
      <Link href="/therapy/change">
        <div
          style={styles.menuItem}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Change Therapist
        </div>
      </Link>
      <Link href="/therapy/review">
        <div
          style={styles.menuItem}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Give Review
        </div>
      </Link>

      <div
        style={styles.deleteItem}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffcccc")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffe6e6")}
      >
        Delete Account
      </div>
    </div>
  );
};

export default MenuComponent;
