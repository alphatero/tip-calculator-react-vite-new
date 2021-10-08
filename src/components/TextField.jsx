import React, { cloneElement } from 'react';
import clsx from 'clsx';


export function TextField({ id, label, icon, value, min, error }) {
  console.log('error', error)

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
          defaultValue={value}
          min={min}
          className={clsx(
            'w-full p-2 bg-cyan-lightest rounded-md',
            'outline-none focus:ring ',
            'text-2xl text-right text-cyan',
            error ? 'focus:ring-red-500' : 'focus:ring-cyan-focus'
          )}
          onChange={(event) =>
            (event.target.value = Number(event.target.value || value))
          }
        />
        {icon && cloneElement(icon, { className: 'absolute w-4 my-2 mx-4' })}
      </div>
    </div>
  );
}