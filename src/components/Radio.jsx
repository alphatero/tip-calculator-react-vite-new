import React, { cloneElement, Children, useRef, useState } from 'react';
import clsx from 'clsx';

export function RadioGroup({ id, label, children }) {
  return (
    //can not use gap
    <fieldset className="flex flex-col">
      <legend className="text-cyan-normal text-base  pb-2">{label}</legend>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {Children.map(children, (child) => cloneElement(child, { name: id }))}
      </div>
    </fieldset>
  );
}

export function Radio({ label, value, name, custom, checked }) {
  const ref = useRef(null);


  function onFocus() {
    ref.current?.focus();
  }

  return (
    <div className="w-full">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="sr-only peer "
        onChange={custom && onFocus}
        defaultChecked={checked}
      />
      <label
        htmlFor={value}
        className={clsx(
          ' py-3 w-full block',
          ' text-center rounded font-bold text-2xl',
          custom ? 'peer-checked:hidden ' : 'peer-checked:bg-cyan-focus peer-checked:text-cyan',
          custom ? 'bg-cyan-lightest text-cyan-normal' : 'bg-cyan-darkest text-white lg:px-14'
        )}
      >
        {label}
      </label>

      {custom && (
        <div className="hidden peer-checked:flex flex-col gap-2">
          <label id="custom" className="text-cyan-normal text-base"></label>
          <div className="relative flex items-center">
            <input
              ref={ref}
              type="number"
              id="custom"
              name="custom"
              className={clsx(
                'w-full p-2 bg-cyan-lightest rounded-md',
                'outline-none focus:ring focus:ring-cyan-focus',
                'text-2xl text-right text-cyan'
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
