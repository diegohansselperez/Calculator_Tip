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

  const styles = isCustom
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50'
    : 'hover:bg-green-300 hover:text-Green-900 bg-Green-900 text-Grey-50';
  /* const buttonClasses = ` ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`; */
  return (
    <div>
      <button
        className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer ${buttonClasses} ${styles} `}
        onClick={handleClick}

        // El clic llama a la función que despacha la acción.
      >
        {isCustom ? 'Custom' : `${percent}%`}
      </button>
    </div>
  );
};

export default PercentButton;
