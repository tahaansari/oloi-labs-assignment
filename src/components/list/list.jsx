import s from "./list.module.css";

import { MdOpenInNew } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const List = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyLink = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
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
                    color="#9a9a9a"
                    onClick={() => handleCopyLink("Hello World..")}
                    className={s.listOptionsCopyIco}
                  />
                  <AnimatePresence>
                    <motion.div
                      key="box"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                      transition={{ duration: 0.1 }}
                      className={s.copyIconText}
                    >
                      Copy link
                    </motion.div>
                  </AnimatePresence>
                </div>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <div className={s.listOptionsItems}>
                    <MdOpenInNew color="#9a9a9a" size={16} />
                    <div>New Tab</div>
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
