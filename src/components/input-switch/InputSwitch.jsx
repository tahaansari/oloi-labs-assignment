import s from "./InputSwitch.module.css";

const InputSwitch = ({id, handleToggle, checked}) => {
    return <>
        <label className={s.toggle}>
            <input onClick={(e) => handleToggle(id,e.target.checked)} type="checkbox" id="myToggle" checked={checked}/>
            <span className={s.switch}></span>
        </label>
    </>
}
export default InputSwitch;