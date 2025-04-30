// "use client";
// import Image from "next/image";
// import styles from "./FooterMenu.module.css";
// import React, { useRef, useState } from "react";
// import Chat from "@/public/applicationIcon/chat-bubble-bottom-center-text.svg";
// // import calendar from "@/public/applicationIcon/calendar-days.svg";
// // import User from "@/public/applicationIcon/user-group.svg";
// // import MenuSquare from "@/public/applicationIcon/squares-2x2.svg";
// import {
//   ChatText,
//   Heart,
//   ChatCircleText,
//   CalendarDots,
//   UsersThree,
//   List,
//   PaperPlaneRight,
//   ChatTeardropText,
// } from "@phosphor-icons/react/dist/ssr";
// import Input from "../Input/Input";
// import Button from "../Button/Button";
// import { sendMessage } from "../../_lib/actions";
// import { useSelector } from "react-redux";
// import MessageInput from "../MessageInput/MessageInput";
// import Calendar from "@/app/_components/Calendar/Calendar";
// import { usePathname } from "next/navigation";
// import More from "../More/More";

// function FooterMenu() {
//   const pathname = usePathname();
//   console.log(pathname);
//   const paths = ["/community", "/therapy", "/more", "/schedule"];
//   // const users = useSelector((state) => state.getUsers.users);
//   // const userIds = {
//   //   senderId: users[0]?.user_id,
//   //   recieverId:
//   //     users[0]?.therapist?.therapist_id ||
//   //     "44fb5edf-1191-4dc1-8fa4-ec4a8d852691",
//   // };
//   // const messageSend = sendMessage.bind(null, userIds);
//   // const [newMessage, setNewMessage] = useState("");
//   // const formRef = useRef(null);

//   // return (
//   // <div className={styles.rare}>
//   //   <form
//   //     action={async (formData) => {
//   //       await messageSend(formData);
//   //       formRef.current.reset();
//   //     }}
//   //     ref={formRef}
//   //   >
//   {
//     /* <div className={styles.searchCon}>
//           <Input
//             inputType="textarea"
//             chat="chat"
//             id="message"
//             name="message"
//             value={newMessage}
//             // onChange={(e) => setNewMessage(e.target.value)}
//             placeholder="Type your message here..."
//           />
//           <div type="submit" className={styles.sendCon}>
//             <button className={styles.send}>
//               {" "}
//               <PaperPlaneRight size={18} color="white" />
//             </button>
//           </div>
//         </div> */
//   }
//   //   <MessageInput newMessage={newMessage} />
//   // </form>
//   return (
//     <nav className={styles.navCon}>
//       <ul className={styles.navigation}>
//         <li>
//           <ChatTeardropText size={24} color="#022C22" />
//           <span>Sessions</span>
//         </li>
//         <li>
//           <Calendar weight={``} />
//           <span>Schedule</span>
//         </li>
//         <li>
//           {/* <Community /> */}
//           <span>Community</span>
//         </li>
//         <li>
//           <More />
//           <span>More</span>
//         </li>
//       </ul>
//     </nav>
//   );
//   // </div>
//   // );
// }

// export default FooterMenu;
