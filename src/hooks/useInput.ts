import { ChangeEvent, useState } from 'react';

type UseInputType = [string, (event:ChangeEvent<HTMLInputElement>)=>void];

export default function useInput():UseInputType {
  const [value, setValue] = useState<string>('');
  function handleChangeValue(event:ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return [value, handleChangeValue];
}
