import { GoGear } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import { RiChat3Line } from "react-icons/ri";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { BsList } from "react-icons/bs";
import s from "./CategoryMore.module.css";
import InputSwitch from "../input-switch/InputSwitch";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";


const CategoryMore = () => {
  const [showBox,setShowBox] = useState(false);
  return (
    <>
      <div className={s.categoryMore}>
        <GoGear className={`${s.gearIconSvg} ${showBox ? s.gearIconSvgActive : "" }`}   onClick={()=>{ setShowBox((prev)=> !prev ) }} />
        <AnimatePresence>
          {showBox && <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${s.categoryBox} ${showBox ? s.categoryBoxActive : "" }`}>
            <div className={s.categoryBoxContent}>
              <ul className={s.categoryBoxList}>
                <li className={s.categoryBoxLi}>
                  <div className={`${s.categoryBoxItem} ${s.categoryBoxItemActive}`}>
                    <div className={s.categoryBoxItemLeft}>
                      <GrAttachment />
                      Files
                    </div>
                    <div className={s.categoryBoxItemRight}>
                      <InputSwitch />
                    </div>
                  </div>
                </li>
                <li className={s.categoryBoxLi}>
                  <div className={s.categoryBoxItem}>
                    <div className={s.categoryBoxItemLeft}>
                      <LuUser />
                      People
                    </div>
                    <div className={s.categoryBoxItemRight}>
                      <InputSwitch />
                    </div>
                  </div>
                </li>
                <li className={s.categoryBoxLi}>
                  <div className={s.categoryBoxItem}>
                    <div className={s.categoryBoxItemLeft}>
                      <RiChat3Line />
                      Chats
                    </div>
                    <div className={s.categoryBoxItemRight}>
                      <InputSwitch />
                    </div>
                  </div>
                </li>
                <li className={s.categoryBoxLi}>
                  <div className={s.categoryBoxItem}>
                    <div className={s.categoryBoxItemLeft}>
                      <BsList />
                      Lists
                    </div>
                    <div className={s.categoryBoxItemRight}>
                      <InputSwitch />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>}
        </AnimatePresence>  
      </div>
    </>
  );
};

export default CategoryMore;
