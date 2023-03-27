import React, { FC } from 'react';
import cl from './style/labellessInput.module.scss';

interface ILabellessInputProps {
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const LabellessInput: FC<ILabellessInputProps> = ({
  placeholder,
  setValue,
  value,
}) => {
  return (
    <input
      className={cl.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default LabellessInput;
