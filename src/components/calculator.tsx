import Input from './setInput';

import {
  setBill,
  setPeople,
  calculateTotals,
  ActiveModule,
} from '../redux/reducer/calculatorSlice';
import PercentButton from './percentButton';
import Totals from './Totals';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import React, { useEffect } from 'react';
import ModalCustom from './modalCustom';

const percents_Numbers: number[] = [5, 10, 15, 25, 50];

export const Calculator = () => {
  const { bill, people, isActiveModel } = useAppSelector(
    (state) => state.calculator,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [people, bill, dispatch]);

  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBill(Number(e.target.value)));
  };

  const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPeople(Number(e.target.value)));
  };

  const isActiveOther = () => {
    dispatch(ActiveModule(true));
  };

  return (
    <div className="w-[375px] p-8 m-auto bg-White rounded-[15px] md:w-[608px] md:py-12 md:px-20 lg:flex lg:w-[920px] lg:gap-11 lg:p-8 ">
      {' '}
      <div className="lg:flex-1 ">
        {' '}
        <Input
          label="Bill"
          value={bill}
          iconUrl="/public/images/icon-dollar.svg"
          onChange={handleBill}
        />
        <h2 className="font-bold text-Grey-500 mb-2">Select Tip %</h2>
        <div className="grid grid-cols-2 gap-3.5 mb-8">
          {percents_Numbers.map((number) => (
            <PercentButton key={number} percent={number} />
          ))}
          {/* <PercentButton isCustom={true} percent={0} /> */}
          <button
            onClick={isActiveOther}
            type="button"
            className="transition-colors text-2xl  font-bold rounded-[5px] w-full h-12 cursor-pointer bg-Grey-200 text-Grey-500 hover:bg-Grey-50 "
          >
            Otro %
          </button>
        </div>
        {isActiveModel && <ModalCustom />}
        <Input
          label="Number of People"
          value={people}
          iconUrl="/public/images/icon-person.svg"
          onChange={handlePeople}
        />
      </div>
      <Totals />
    </div>
  );
};
