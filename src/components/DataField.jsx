import React from 'react';

export function DataField({ title, note, value }) {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-col">
        <strong className="text-white">{title}</strong>
        <span className="text-cyan-normal text-sm">{note}</span>
      </div>

      <p className="text-cyan-focus text-3xl">{value}</p>
    </div>
  );
}