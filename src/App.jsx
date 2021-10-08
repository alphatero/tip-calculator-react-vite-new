import React, { useState } from 'react';
import { Icon, Radio, RadioGroup, Card, TextField, DataField } from './components';

function App() {
  const [{ bill, people, tipAmount, total }, setForm] = useState({
    bill: 0,
    people: 0,
    tipAmount: 0,
    total: 0,
  });

  function onChange(target) {
    console.log(target);

    const form = Object.fromEntries(new FormData(target).entries());

    const data = {
      bill: Number(form.bill),
      tips: form.tips === 'custom' ? form.tips : Number(form.tips),
      person: Number(form.people),
      custom: Number(form.custom),
    };
    console.log(people)
    console.log(bill)

    if (!data.person) return;

    const tips = data.tips === 'custom' ? data.custom : data.tips;

    const tip = data.bill * (tips / 100);
    const tipAmount = tip / data.person;
    const total = (data.bill + tip) / data.person;
    
    setForm({
      bill,
      people,
      tipAmount,
      total,
    });

    console.log(tip);
    console.log(tipAmount);
    console.log(total);
    console.log(data);
  }

  return (
    <div>
      <header className="flex justify-center my-12">
        <h1 className="w-24 text-cyan-logo">
          <Icon.Logo />
        </h1>
      </header>
      <main className="flex justify-center">
        <Card className="bg-white p-8 rounded-3xl flex lg:max-w-5xl w-full justify-center">
          <form
            className="flex flex-col md:grid md:grid-cols-2 gap-8 flex-1"
            onChangeCapture={(event) => onChange(event.currentTarget)}
            onResetCapture={(event) => requestAnimationFrame(() => onChange(event.target))}
          >
            <div className="flex flex-col gap-6 w-full">
              {/* Bill */}
              <TextField id="bill" label="Bill" icon={<Icon.Dollar />} value="0" min="0" />

              {/* Select Tips Button */}
              <RadioGroup id="tips" label="Select Tip %">
                <Radio label="5%" value="5" checked />
                <Radio label="10%" value="10" />
                <Radio label="15%" value="15" />
                <Radio label="25%" value="25" />
                <Radio label="50%" value="50" />
                <Radio label="Custom" value="custom" custom />
              </RadioGroup>

              {/* Number of People */}
              <TextField
                id="people"
                label="Number of People"
                icon={<Icon.Person />}
                value="0"
                min="0"
                error={bill > 0 && people <= 0}
              />
            </div>

            {/* Present */}
            <Card className="bg-cyan p-8 rounded-xl flex-col justify-between space-y-6 flex-1">
              <div className="space-y-4">
                <DataField title="Tip Amount" note="/ person" value={`$${tipAmount}`} />
                <DataField title="Total" note="/ person" value={`$${total}`} />
              </div>

              <button
                type="reset"
                className="bg-cyan-focus w-full py-2 text-xl font-bold text-cyan-darkest rounded"
              >
                RESET
              </button>
            </Card>
          </form>
        </Card>
      </main>
    </div>
  );
}

export default App;
