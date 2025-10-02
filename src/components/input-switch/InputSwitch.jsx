import s from "./InputSwitch.module.css";

const InputSwitch = ({selectedIndex, id, handleToggle, checked}) => {
    return <>
        <label className={s.toggle}>
            <input onChange={(e) => selectedIndex === id ? e.preventDefault() : handleToggle(id,e.target.checked)} type="checkbox" id="myToggle" checked={checked}/>
            <span className={s.switch}></span>
        </label>
    </>
}
export default InputSwitch;