import { useAppDispatch } from '../hooks/hooks';
import { setTipPercentage } from '../redux/reducer/calculatorSlice';

interface Props {
  percent: number;
  isCustom?: boolean;
}

const PercentButton = ({ percent, isCustom = false }: Props) => {
  // 1. Selecciona el estado que quieres observar
  // Para depurar, es útil ver tanto el porcentaje como el resultado final.

  const dispatch = useAppDispatch();

  // 2. Esta función se llamará SOLO al hacer clic.
  const handleClick = () => {
    // Despacha la acción para actualizar el porcentaje en el estado de Redux.
    dispatch(setTipPercentage(percent));
  };

  const styles = isCustom
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50'
    : 'hover:bg-green-300 hover:text-Green-900 bg-Green-900 text-Grey-50';

  return (
    <div>
      <button
        className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer ${styles} `}
        onClick={handleClick} // El clic llama a la función que despacha la acción.
      >
        {isCustom ? 'Custom' : `${percent}%`}
      </button>
    </div>
  );
};

export default PercentButton;
