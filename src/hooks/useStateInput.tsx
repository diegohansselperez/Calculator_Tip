//!ESTE HOOK DE ESTADO LOCAL FUE REEMPLASADO POR REDUX EN UN ESTADO GLOBAL.
// Define la interfaz para el estado del hook
/* interface InputValues {
  bill: number | string;
  numberPeople: number | string;
}

// Define la interfaz para lo que retorna el hook
interface UseStateInputHook {
  value: InputValues;
  handleBill: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePeople: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStateInput = (): UseStateInputHook => {
  const [value, setValue] = React.useState<InputValues>({
    bill: '0',
    numberPeople: '0',
  });

  const handleBill = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseInt(event.target.value);
    setValue((prevValue) => ({
      ...prevValue,
      bill: isNaN(newValue) ? '' : newValue,
    }));
  };

  const handlePeople = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseInt(event.target.value);
    setValue((prevValue) => ({
      ...prevValue,
      numberPeople: isNaN(newValue) ? '' : newValue,
    }));
  };

  return { value, handleBill, handlePeople };
};

export default useStateInput;
 */
