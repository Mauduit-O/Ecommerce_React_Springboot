import { useRef } from 'react';
import * as Styled from './SyledInput';

interface InputProps {
  type?: string;
  name: string;
  value?: string;
  placeholder: string;
  onChange: any;
  className?: string;
  innerRef?: any;
}

export default function Input(props: InputProps): JSX.Element {

  const { type, name, value, placeholder, onChange, className, innerRef} = props;
  return (
    <Styled.Input ref={innerRef}  className={className} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
  )
}
