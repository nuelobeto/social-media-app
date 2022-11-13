import "../assets/styles/BaseInput.scss";
import { InputProps } from "../types/generalTypes";

const BaseInput = ({
  type,
  placeholder,
  name,
  value,
  setFormData,
  icon,
  handleClick,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="base_input_wrapper">
      <input
        className="base_input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className="base_input_icon" onClick={handleClick}>
        {icon}
      </span>
    </div>
  );
};

export default BaseInput;
