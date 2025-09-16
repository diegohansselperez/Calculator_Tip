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
  // 1. Selecciona el estado del store de Redux.
  const { tipPercentage } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  // 2. Determina si este botón está activo comparando su 'percent' con el del estado global.
  const isActive = tipPercentage === percent;

  // 3. Define la función para el clic sencillo.
  const handleClick = () => {
    // Si el botón ya está activo, un clic sencillo no hará nada.
    // Si no está activo, establece el nuevo porcentaje y calcula.
    if (!isActive) {
      dispatch(setTipPercentage(percent));
      dispatch(calculateTotals());
    }
  };

  // 4. Define la función para el doble clic.
  const handleDoubleClick = () => {
    // Restaura el porcentaje a 0 en el estado global.
    dispatch(setTipPercentage(0));
    // Vuelve a calcular los totales (ahora sin propina).
    dispatch(calculateTotals());
  };

  // 5. Se definen las clases de CSS de una forma más limpia.
  const baseClasses =
    'transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer';
  const activeClasses =
    'bg-StrongCyan text-VeryDarkCyan opacity-50 cursor-not-allowed'; // Estilos cuando está activo.
  const inactiveClasses =
    'bg-Green-900 text-Grey-50 hover:bg-green-300 hover:text-Green-900'; // Estilos cuando está inactivo.

  return (
    <div>
      <button
        type="button"
        // Se combinan las clases base con las condicionales (activo/inactivo).
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick} // El nombre correcto del evento es onDoubleClick.
      >
        {`${percent}%`}
      </button>
    </div>
  );
};

export default PercentButton;
