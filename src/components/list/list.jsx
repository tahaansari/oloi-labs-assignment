import s from "./list.module.css";

import { MdOpenInNew } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const List = () => {
  const [toolTipText, setToolTipText] = useState("Copy link");
  const handleCopyLink = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
        setToolTipText("Link copied!!");
        setTimeout(() => {
          setToolTipText("Copy link");
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <>
      <div className={s.list}>
        <div className={s.listItem}>
          <div className={s.listItemWrap}>
            <div className={s.listItemLeft}>
              <div className={s.listImgWrap}>
                <div className={s.itemImg}>
                  <img src="https://placehold.co/40" alt="" />
                </div>
                <span className={s.itemStatus}></span>
              </div>
              <div className={s.itemContent}>
                <h4>Randall Johnsson</h4>
                <span className={s.itemStatusText}>Active Now</span>
              </div>
            </div>
            <div className={s.listOptions}>
              <div className={s.listOptionsRow}>
                <div className={s.copyIcon}>
                    <IoIosLink
                      onClick={() => handleCopyLink("Hello World..")}
                      className=""
                    />
                    <span
                      className={s.copyIconText}
                    >
                      {toolTipText}
                    </span>
                </div>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <div className={s.listOptionsItems}>
                    <MdOpenInNew className="icon-sm"/>
                    <span>New Tab</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
