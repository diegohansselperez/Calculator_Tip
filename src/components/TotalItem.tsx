interface Props {
  text: string;
  value: number;
}

const TotalItem = ({ text, value }: Props) => {
  return (
    <div className="flex justify-between mb-6 items-center">
      <div>
        <p className="font-bold">{text}</p>
        <p className="text-[.8125rem] text-Grey-400">/ person</p>
      </div>

      <p
        className="font-bold text-[32px] text-Green-400 md:text-5xl
      "
      >
        ${value.toFixed(2)}
      </p>
    </div>
  );
};

export default TotalItem;
