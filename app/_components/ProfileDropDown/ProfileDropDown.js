import React, { useState, useRef, useEffect, useTransition } from "react";
import styles from "./ProfileDropDown.module.css";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { SignOut, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { signOut } from "@/app/_lib/actions";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(true);
  const dropdownRef = useOutsideClick(() => setOpen(false));
  const [isPending, startTransition] = useTransition();

  const handleSignout = () => {
    startTransition(() => signOut());
  };

  return (
    <>
      {open && (
        <div className={styles.dropdownMenu}>
          <Link href="/profile" className={styles.dropdownItem}>
            <User size={20} /> Profile
          </Link>
          <button onClick={handleSignout} className={styles.dropdownItem}>
            <SignOut size={20} /> Log Out
          </button>
        </div>
      )}
    </>
  );
}
