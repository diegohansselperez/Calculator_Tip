import BtnReset from './BtnReset';
import TotalItem from './TotalItem';

const Totals = () => {
  return (
    <div className="bg-Green-900 rounded-[15px] py-6 px-8 text-White lg:w-[410px] lg:flex lg:flex-col lg:justify-around">
      <div>
        <TotalItem text="Tip Amount" value={4.27} />
        <TotalItem text="Total" value={32.79} />
      </div>

      <BtnReset text="Reset" />
    </div>
  );
};

export default Totals;
