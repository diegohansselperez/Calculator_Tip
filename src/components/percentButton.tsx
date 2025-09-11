import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  calculateTotals,
  setTipPercentage,
} from '../redux/reducer/calculatorSlice';

interface Props {
  percent: number;
  isCustom?: boolean;
}

const PercentButton = ({ percent, isCustom = false }: Props) => {
  // 1. Selecciona el estado que quieres observar
  // Para depurar, es útil ver tanto el porcentaje como el resultado final.
  const { tipPercentage } = useAppSelector((state) => state.calculator);

  const dispatch = useAppDispatch();

  const isActive = tipPercentage === percent;

  const handleClick = () => {
    dispatch(setTipPercentage(percent));
    dispatch(calculateTotals());
  };

  const baseClasses = `transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer`;

  const stateStyles = isCustom
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50'
    : 'hover:bg-Green-300 hover:text-Green-900 bg-Green-900 text-Grey-50';

  const buttonClasses = `${baseClasses} ${
    isActive
      ? 'bg-StrongCyan text-VeryDarkCyan opacity-50 cursor-not-allowed'
      : stateStyles
  }`;
  //data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
  const styles = isCustom
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50'
    : 'hover:bg-green-300 hover:text-Green-900 bg-Green-900 text-Grey-50';
  /* const buttonClasses = ` ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`; */
  return (
    <div>
      <button
        type="button"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer ${buttonClasses} ${styles} `}
        onClick={handleClick}

        // El clic llama a la función que despacha la acción.
      >
        {/* {isCustom ? 'Otro %' : `${percent}%`} */}
        {`${percent}%`}
      </button>
    </div>
  );
};

export default PercentButton;
