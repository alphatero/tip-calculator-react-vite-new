import React from 'react';
import clsx from 'clsx';

export function Card({ children, className, icon }) {
  return <div className={clsx('flex ', className)}>{children}</div>;
}