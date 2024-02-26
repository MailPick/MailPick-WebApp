
import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?:string;
  value?:string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({type="text", ...props}: InputProps) => (
  <div>
    <input 
      type={type} 
      {...props}/>
  </div>
)

export default TextInput;

