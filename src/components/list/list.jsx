import s from "./list.module.css";

import { MdOpenInNew } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { motion, AnimatePresence } from "framer-motion";

const List = ({ filterData }) => {
  const [toolTipText, setToolTipText] = useState("Copy link");
  const handleCopyLink = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setToolTipText("Link copied!!");
        setTimeout(() => {
          setToolTipText("Copy link");
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const highLightText = ()=>{
    return "hello world"
  }

  return (
    <>
      <div className={s.list}>
        {filterData.length === 0 ? (
          <div className={s.noresult}>No Results Found</div>
        ) : (
          <AnimatePresence>
            {filterData.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={s.listItem}
                >
                  <div className={s.listItemWrap}>
                    <div className={s.listItemLeft}>
                      <div className={s.listImgWrap}>
                        <div className={s.itemImg}>
                          <img src="https://placehold.co/46" alt="" />
                        </div>
                        <span className={s.itemStatus}></span>
                      </div>
                      <div className={s.itemContent}>
                        <div className={s.itemHeading}>

                          <h4 className={s.itemTitle}>{highLightText(item.name)}</h4>{" "}

                          {item.details && <span className={s.detailsCount}>{item.details}</span>}
                        </div>
                        <div className={s.metaList}>
                          {item.status && (
                            <span className={`font-sm ${s.metaItem} ${s.itemStatusText}`}>{item.status}</span>
                          )}
                          {item.location && (
                            <span className={`font-sm ${s.metaItem} ${s.itemStatusText}`}>{item.location}</span>
                          )}
                          {item.updated && (
                            <span className={`font-sm ${s.metaItem} ${s.itemStatusText}`}>{item.updated}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={s.listOptions}>
                      <div className={s.listOptionsRow}>
                        <div className={s.copyIcon}>
                          <IoIosLink onClick={() => handleCopyLink("Hello World..")} className="icon icon-sm" />
                          <span className={`font-sm ${s.copyIconText}`}>{toolTipText}</span>
                        </div>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                          <div className={s.listOptionsItems}>
                            <MdOpenInNew className="icon-sm" />
                            <span className="font-sm">New Tab</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}

        {/* {[...Array(5)].map((_, i) => (
          <div key={i} className={s.listItem}>
              <div className={s.listItemWrap}>
                <div className={s.listItemLeft}>
                    <Skeleton width={46} height={46}></Skeleton>
                  <div className={s.itemContent}>
                    <div className={s.itemHeading}>
                      <Skeleton width={300} height={20}></Skeleton>
                    </div>
                    <Skeleton width={200} height={20}></Skeleton>
                  </div>
                </div>
              </div>
            </div>
        ))} */}
      </div>
    </>
  );
};

export default List;
