import s from "./list.module.css";

import { MdOpenInNew } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useState } from "react";

const List = ({ data }) => {
  const [toolTipText, setToolTipText] = useState("Copy link");
  const handleCopyLink = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // console.log("Copied to clipboard:", text);
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
        {data.map((item, index) => {
          return (
            <div key={index} className={s.listItem}>
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
                      <h4 className={s.itemTitle}>{item.name}</h4>{" "}
                      {item.details && <span className={s.detailsCount}>{item.details}</span>}
                    </div>

                    {/* <div className={s.itemMeta}>
                      <span>in Photos</span>
                      <span>•</span>
                      <span>Edited <time datetime="2025-10-03T10:20">12m ago</time></span>
                    </div> */}

                    <div className={s.metaList}>
                      {item.status && <span className={`font-sm ${s.metaItem} ${s.itemStatusText}`}>{item.status}</span>}
                      {item.location && <span className={`font-sm ${s.metaItem} ${s.itemStatusText}`}>{item.location}</span>}
                      {item.updated && <span className={`font-sm ${s.metaItem} ${s.itemStatusText}`}>{item.updated}</span>}
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
