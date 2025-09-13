import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  calculateTotals,
  setTipPercentage,
} from '../redux/reducer/calculatorSlice';

interface Props {
  percent: number;
  isCustom?: boolean;
}

const PercentButton = ({ percent }: Props) => {
  // 1. Selecciona el estado que quieres observar
  // Para depurar, es útil ver tanto el porcentaje como el resultado final.
  const { tipPercentage } = useAppSelector((state) => state.calculator);

  const dispatch = useAppDispatch();

  const isActive = tipPercentage === percent;

  const handleClick = () => {
    dispatch(setTipPercentage(percent));
    dispatch(calculateTotals());
  };

  const stateStyles =
    'hover:bg-Green-300 hover:text-Green-900 bg-Green-900 text-Grey-50';

  const buttonClasses = `${
    isActive
      ? 'bg-StrongCyan text-VeryDarkCyan opacity-50 cursor-not-allowed'
      : stateStyles
  }`;

  return (
    <div>
      <button
        type="button"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer hover:bg-green-300 hover:text-Green-900 bg-Green-900 text-Grey-50 ${buttonClasses}  `}
        onClick={handleClick}

        // El clic llama a la función que despacha la acción.
      >
        {`${percent}%`}
      </button>
    </div>
  );
};

export default PercentButton;
