import { useState } from 'react';

interface Props {
  label: string;
  value: number | string;
  iconUrl: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, iconUrl, onChange }: Props) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
  };

  const showError = value === 0 && isTouched;
  return (
    <div className="flex flex-col mb-7 m-0 ">
      <div className="flex">
        <label
          className=" font-bold text-gray-500"
          htmlFor={label.toLocaleLowerCase()}
        >
          {label}
        </label>
      </div>

      <div className="relative">
        <input
          id={label.toLocaleLowerCase()}
          className={`${
            showError
              ? 'border-2 border-red-500 focus:outline-red-500'
              : 'border-2 border-transparent'
          } bg-Grey-50 rounde-[5px] focus:outline-Green-400 cursor-pointer h-10 text-right pr-4 text-2xl font-bold text-green-900 w-full`}
          type="text"
          maxLength={label === 'Bill' ? 15 : 4}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          min={0}
        />
        <img className="absolute top-3 left-2" src={iconUrl} alt="icon" />
      </div>
      {showError && (
        <p className="text-right text-red-500 m-0">Can't be recive</p>
      )}
    </div>
  );
};

export default Input;
