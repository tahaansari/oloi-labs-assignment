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


const CategoryMore = ({category, handleToggle}) => {
  const [showBox,setShowBox] = useState(false);

  return (
    <>
      <div className={s.categoryMore}>
        <GoGear size={25} className={`${s.gearIconSvg} ${showBox ? s.gearIconSvgActive : "" }`}   onClick={()=>{ setShowBox((prev)=> !prev ) }} />
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
                  category.map((item,index)=>{
                    return (
                        <li key={index} className={s.categoryBoxLi}>
                          <div className={s.categoryBoxItem}>
                            <div className={s.categoryBoxItemLeft}>
                              <GrAttachment size={15} />
                              {item.name}
                            </div>
                            <div className={s.categoryBoxItemRight}>
                              <InputSwitch id={item.id} checked={item.isVisible} handleToggle={handleToggle} />
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
