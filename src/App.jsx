import React, { cloneElement, Children } from 'react';
import { Icon } from './components';
import clsx from 'clsx';

function Card({ children, className, icon }) {
  return <div className={clsx('flex rounded-3xl', className)}>{children}</div>;
}

function TextField({ id, label, icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-cyan-normal text-base">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          name={id}
          type="number"
          className={clsx(
            'w-full p-2 bg-cyan-lightest rounded-md',
            'outline-none focus:ring focus:ring-cyan-focus',
            'text-2xl text-right text-cyan'
          )}
        />
        {cloneElement(icon, { className: 'absolute w-4 my-2 mx-4' })}
      </div>
    </div>
  );
}

function RadioGroup({ id, label, children }) {
  return (
    <fieldset>
      <legend>{label}</legend>

      <div>
        {Children.map(children, (child) => cloneElement(child, { name: id }))}
      </div>
    </fieldset>
  );
}

function Radio({ label, value, name }) {
  return (
    <div>
      <label htmlFor={value}>{label}</label>
      <input type="radio" name={name} id={value} value={value} />
    </div>
  );
}

function App() {
  return (
    <div className="">
      <header className="flex justify-center my-12">
        <h1 className="w-24 text-cyan-logo">
          <Icon.Logo />
        </h1>
      </header>
      <main>
        <Card className="bg-white p-8">
          <form>
            {/* Bill */}
            <TextField id="bill" label="Bill" icon={<Icon.Dollar />} />

            {/* Select Tips Button */}
            <RadioGroup label="Bill">
              <Radio label="5%" value="5" />
              <Radio label="10%" value="10" />
              <Radio label="15%" value="15" />
              <Radio label="25%" value="25" />
              <Radio label="50%" value="50" />
              <Radio label="Custom" value="custom" />
            </RadioGroup>

            {/* Number of People */}
            <TextField id="people" label="Number of People" icon={<Icon.Person />} />

            {/* Present */}
          </form>
        </Card>
      </main>
    </div>
  );
}

export default App;
