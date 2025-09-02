import Input from './setInput';
import useStateInput from '../hooks/useStateInput';
import PercentButton from './percentButton';
import Totals from './Totals';

const percents_Numbers: number[] = [5, 10, 15, 25, 50];

export const Calculator = () => {
  const { value, handleBill, handlePeople } = useStateInput();
  return (
    <div className="w-[375px] p-8 m-auto bg-White rounded-[15px] md:w-[608px] md:py-12 md:px-20 lg:flex lg:w-[920px] lg:gap-11 lg:p-8 ">
      {' '}
      <div className="lg:flex-1 ">
        {' '}
        <Input
          label="Bill"
          value={value.bill}
          iconUrl="/public/images/icon-dollar.svg"
          onChange={handleBill}
        />
        <h2 className="font-bold text-Grey-500 mb-2">Select Tip %</h2>
        <div className="grid grid-cols-2 gap-3.5 mb-8">
          {percents_Numbers.map((number) => (
            <PercentButton key={number + 3.14} percent={number} />
          ))}
          <PercentButton isCustom={true} percent={0} />{' '}
        </div>
        <Input
          label="Number of People"
          value={value.numberPeople}
          iconUrl="/public/images/icon-person.svg"
          onChange={handlePeople}
        />
      </div>
      <Totals />
    </div>
  );
};
