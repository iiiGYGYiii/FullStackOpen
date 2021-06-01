import { useState } from "react";

export const useField = type =>{
  const [value, setValue] = useState("");
  const onChange = e=> setValue(e.target.value);
  const clearValue = () => setValue("");
  return{
    value,
    onChange,
    type,
    clearValue
  }
}
