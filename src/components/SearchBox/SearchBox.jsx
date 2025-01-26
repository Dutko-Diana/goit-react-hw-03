import s from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="username"
        className={s.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
