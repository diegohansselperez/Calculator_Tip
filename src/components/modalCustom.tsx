import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  ActiveModule,
  calculateTotals,
  setTipPercentage,
} from '../redux/reducer/calculatorSlice';

const ModalCustom = () => {
  const dispatch = useAppDispatch();

  const { tipPercentage } = useAppSelector((state) => state.calculator);
  const closeModal = () => {
    dispatch(ActiveModule(false));
  };

  const handleClickPercent = () => {
    dispatch(calculateTotals());
    closeModal();
  };

  const handleChangePercet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // 1. Expresión regular que solo permite números (enteros en este caso)
    //    /^\d*$/  -> Permite una cadena de cero o más dígitos.
    const numberRegex = /^\d*$/;

    // 2. Probamos si el valor del input cumple con la regla
    if (numberRegex.test(inputValue)) {
      // 3. Si es válido, lo convertimos a número y lo despachamos
      //    Manejamos el caso de que el input esté vacío ('') para convertirlo en 0.
      const numericValue = inputValue === '' ? 0 : parseInt(inputValue, 10);
      dispatch(setTipPercentage(numericValue));
    }
  };

  console.log('Devuelve si no es numero', tipPercentage);

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/60"
    >
      {/* Contenido del modal */}
      <div className="relative p-4 w-11/12 max-w-2xl max-h-full bg-white rounded-lg shadow-lg dark:bg-Green-900">
        {/* Encabezado del modal */}
        <div className="flex items-center justify-between p-2 md:p-5 border rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-[18px] md:text-xl font-semibold text-gray-900 dark:text-Green-400">
            Agrega un Porcentaje
          </h3>
          <button
            onClick={closeModal}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-amber-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        {/* Cuerpo del modal */}
        <div className="relative p-4 md:p-5 space-y-4">
          <input
            type="text"
            className="bg-Grey-50  rounded-[5px] focus:outline-Green-400 cursor-pointer h-10 text-right pr-4 text-2xl font-bold text-green-900 w-full"
            value={tipPercentage}
            maxLength={2}
            onChange={handleChangePercet}
            placeholder="0"
          />
          <svg
            className="absolute top-[22%] left-6 w-6 h-6 text-gray-800 dark:text-Grey-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
            />
          </svg>
        </div>
        {/* Pie de página del modal */}
        <div className="flex items-center justify-center p-4 md:p-2 md:justify-end  rounded-b dark:border-white">
          <button
            onClick={handleClickPercent}
            className="bg-Green-400 text-Green-900 hover:bg-green-300 transition-colors text-2xl font-bold rounded-[5px] w-2/5 h-12 cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCustom;
