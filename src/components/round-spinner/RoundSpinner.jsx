import s from "./RoundSpinner.module.css"

const RoundSpinner = () => {
  return (
    <div className={s.rotIcon} aria-hidden="true">
      <svg viewBox="0 0 100 100" className={s.rotSvg}>
        <circle className={s.track} cx="50" cy="50" r="40" />
        <circle className={s.progress} cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
};
export default RoundSpinner;
