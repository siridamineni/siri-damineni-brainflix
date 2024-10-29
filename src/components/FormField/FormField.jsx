import "./FormField.scss";
function FormField({
  isTextArea,
  label,
  id,
  name,
  placeholder,
  inputValue,
  handleChange,
  rows,
  cols,
}) {
  return (
    <div className="formfield">
      <label className="formfield__label">{label}</label>
      {isTextArea ? (
        <textarea
          className="formfield__input"
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          cols={cols}
          rows={rows}
        />
      ) : (
        <input
          className="formfield__input"
          id={id}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default FormField;