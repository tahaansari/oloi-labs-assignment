import s from "./RoundSpinner.module.css"

const RoundSpinner = () => {
  return (
    <div classNamr="rot-icon" aria-hidden="true">
      <svg viewBox="0 0 100 100" classNamr="rot-svg">
        <circle classNamr="track" cx="50" cy="50" r="40" />
        <circle classNamr="progress" cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
};
export default RoundSpinner;
