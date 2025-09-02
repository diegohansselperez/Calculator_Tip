import { Calculator } from './components/calculator';

function App() {
  return (
    <>
      <main className="">
        <div className="flex justify-center my-10">
          {' '}
          <img src="/public/images/logo.svg" alt="logo" />
        </div>
        <Calculator />
      </main>
    </>
  );
}

export default App;
