import { GoGear } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { BsList } from "react-icons/bs";
import { IoChatbubbleOutline } from "react-icons/io5";

import { FiUser } from "react-icons/fi";
import s from "./CategoryMore.module.css";
import InputSwitch from "../input-switch/InputSwitch";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const CategoryMore = ({selectedCategory, uniqueCategory, handleToggle}) => {

  const [showBox,setShowBox] = useState(false);

  const icons = {
    GrAttachment,
    FiUser,
    BsList,
    IoChatbubbleOutline
  };

  return (
    <>
      <div className={s.categoryMore}>
        <GoGear className={`icon ${s.gearIconSvg} ${showBox ? s.gearIconSvgActive : "" }`} onClick={()=>{ setShowBox((prev)=> !prev ) }} />
        <AnimatePresence>
          {showBox && <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${s.categoryBox} ${showBox ? s.categoryBoxActive : "" }`}>
            <div className={s.categoryBoxContent}>
              <ul className={s.categoryBoxList}>
                { 
                  uniqueCategory.map((item,index)=>{
                    const IconComponent = icons[item.icon]; // icons = { FiSearch: FiSearch }
                    return (
                        <li key={index} className={s.categoryBoxLi}>
                          <div className={s.categoryBoxItem}>
                            <div className={s.categoryBoxItemLeft}>
                              <IconComponent className="icon icon-sm" />
                              {item.type}
                            </div>
                            <div className={s.categoryBoxItemRight}>
                              <InputSwitch selectedCategory={selectedCategory} category={item.type} id={item.id} checked={item.isVisible} handleToggle={handleToggle} />
                            </div>
                          </div>
                        </li>
                    )
                  })
                }
              </ul>
            </div>
          </motion.div>}
        </AnimatePresence>  
      </div>
    </>
  );
};

export default CategoryMore;
