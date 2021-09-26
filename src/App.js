import Statistics from './components/Statistics';
import Form from './components/Form';
import Income from './components/Income';
import Expense from './components/Expense';
import { useState } from 'react';
import '../src/style/app.css'

function App() {
  const [nizPrihoda, setNizPrihoda] = useState([]);
  let ukupanPrihod = nizPrihoda.reduce((zbir, prihod) => { return zbir + prihod.iznos }, 0);
  const [nizRashoda, setNizRashoda] = useState([]);
  let ukupanRashod = nizRashoda.reduce((zbir, rashod) => { return zbir + rashod.iznos }, 0);

  return (
    <>
      <Statistics ukupanPrihod={ukupanPrihod} ukupanRashod={ukupanRashod} />
      <Form setNizPrihoda={setNizPrihoda} setNizRashoda={setNizRashoda} />
      <div className="treci">
        <Income nizPrihoda={nizPrihoda} setNizPrihoda={setNizPrihoda} />
        <Expense ukupanPrihod={ukupanPrihod} nizRashoda={nizRashoda} setNizRashoda={setNizRashoda} />
      </div>
    </>
  );
}

export default App;
