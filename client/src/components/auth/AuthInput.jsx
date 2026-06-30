const AuthInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
};

export default AuthInput;