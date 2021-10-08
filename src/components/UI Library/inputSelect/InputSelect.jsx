
const InputSelect = ({ name, value, event, firstLabel, labels }) => {
  return (
    <select
    value={value}
    name={name}
    onChange={event} 
    >
      <option value={firstLabel}>{firstLabel}</option>
      {labels.map((item)=><option value={item}>{item}</option>)}
    </select>
  );
}

export default InputSelect;