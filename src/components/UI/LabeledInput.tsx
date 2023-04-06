import React, { FC, SVGProps } from 'react';
import cl from './style/labeledInput.module.scss';

interface ILabeledInputProps {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  iconRight?: boolean;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const LabeledInput: FC<ILabeledInputProps> = ({
  name,
  id,
  iconRight,
  Icon,
  placeholder,
  label,
  setValue,
  value,
}) => {
  return (
    <div
      className={
        cl.input +
        (Icon ? ' ' + cl.icon : '') +
        (iconRight ? ' ' + cl.right : '')
      }
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {Icon && <Icon />}
    </div>
  );
};

export default LabeledInput;
