import { Input } from "@chakra-ui/react";

type InputProps = {
  type?: string
  name?: string
  display?: string
  onChange?: (event?: any) => void
}

function CustomInput({type, name, display, onChange}: InputProps) {
  return (
    <Input
    type={type}
    name={name}
    display={display}
    onChange={onChange}
    _focus={{
      border: 'none',
      outlineColor: 'mustard',
      ring: 'none'
    }}
    />
  );
}

export default CustomInput;