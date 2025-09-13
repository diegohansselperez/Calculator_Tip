import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  bill: number;
  people: number;
  tipPercentage: number;
  tipAmountPerPerson: number;
  totalPerPerson: number;
  isActiveModel: boolean;
}

const initialState: CalculatorState = {
  bill: 0,
  people: 1,
  tipPercentage: 0,
  tipAmountPerPerson: 0,
  totalPerPerson: 0,
  isActiveModel: false,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<number>) => {
      state.bill = action.payload;
    },
    setPeople: (state, action: PayloadAction<number>) => {
      state.people = action.payload;
    },
    setTipPercentage: (state, action: PayloadAction<number>) => {
      state.tipPercentage = action.payload;
    },
    calculateTotals: (state) => {
      //calcular el total de dinero y sacarle el porcentaje y ese dividirlo entre el numero de personas
      if (state.people > 0 && state.bill > 0) {
        const tipAmount = state.bill * (state.tipPercentage / 100);

        //Porcentaje total de TipAmount entre el numero de personas.
        state.tipAmountPerPerson = tipAmount / state.people;
        //
        state.totalPerPerson = (state.bill + tipAmount) / state.people;
      } else {
        state.tipAmountPerPerson = 0;
        state.totalPerPerson = 0;
      }
    },
    ActiveModule: (state, action: PayloadAction<boolean>) => {
      state.isActiveModel = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  setBill,
  setPeople,
  setTipPercentage,
  calculateTotals,
  reset,
  ActiveModule,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
