import s from "./InputSwitch.module.css";

const InputSwitch = ()=>{
    return <>
            <label className={s.toggle}>
                <input type="checkbox" id="myToggle"/>
                <span className={s.switch}></span>
            </label>

    </>
}
export default InputSwitch;