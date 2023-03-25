const FormField = ({ className, label, ...props }) => {
  return (
    <div className="formfield">
      <label className="formField-label">
        <span>{label}</span>
        <input className="formField-input" autoComplete="off" {...props} />
      </label>
    </div>
  );
};

export default FormField;
