interface Props {
  text: string;
}

const BtnReset = ({ text }: Props) => {
  return (
    <button className="w-full rounded-[5px] cursor-pointer  bg-Green-400 text-Green-900 uppercase text-center font-bold h-12 hover:bg-green-300 transition-colors">
      {text}
    </button>
  );
};

export default BtnReset;
