import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(props.value);
  };
  return (
    <>
      <input type="text" value={props.value} onChange={handleInputChange} />
    </>
  );
};

export default Input;
