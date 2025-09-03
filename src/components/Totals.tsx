import { useAppSelector } from '../hooks/hooks';
import BtnReset from './BtnReset';
import TotalItem from './TotalItem';

const Totals = () => {
  const { totalPerPerson, tipAmountPerPerson } = useAppSelector(
    (state) => state.calculator,
  );

  console.log('Total por el numero de personas:', totalPerPerson);
  return (
    <div className="bg-Green-900 rounded-[15px] py-6 px-8 text-White lg:w-[410px] lg:flex lg:flex-col lg:justify-around">
      <div>
        <TotalItem text="Tip Amount" value={tipAmountPerPerson} />
        <TotalItem text="Total" value={totalPerPerson} />
      </div>

      <BtnReset text="Reset" />
    </div>
  );
};

export default Totals;
