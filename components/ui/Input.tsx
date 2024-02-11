interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({name, type, placeholder, value}: inputProps) => (
  <>
    <input
      className="w-full border border-white bg-black p-2"
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  </>
);

export default Input;
