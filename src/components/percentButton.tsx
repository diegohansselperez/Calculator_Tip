interface Props {
  percent: number;
  isCustom?: boolean;
}

const PercentButton = ({ percent, isCustom = false }: Props) => {
  const styles = isCustom
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50'
    : 'hover:bg-green-300 hover:text-Green-900 bg-Green-900 text-Grey-50';

  return (
    <div>
      <button
        className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer ${styles} `}
      >
        {isCustom ? 'Custom' : `${percent}%`}
      </button>
    </div>
  );
};

export default PercentButton;
