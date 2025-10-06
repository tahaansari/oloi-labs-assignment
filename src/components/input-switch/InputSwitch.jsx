import s from "./InputSwitch.module.css";

const InputSwitch = ({selectedCategory, id, category, handleToggle, checked}) => {
    return <>
        <label className={s.toggle}>
            <input onChange={(e) => selectedCategory === category ? e.preventDefault() : handleToggle(id,e.target.checked)} type="checkbox" id="myToggle" checked={checked}/>
            <span className={`${s.switch} ${selectedCategory === category ? s.disabled: "no"} `}></span>
        </label>
    </>
}
export default InputSwitch;