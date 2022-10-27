/** @jsxImportSource @emotion/react */

import React, { ReactNode } from 'react';
import { Headercomp } from '../Header/Headercomp';
import { jsx, css } from '@emotion/react';
type tcolors = {
  default: string;
  danger: string;
  outline: string;
};
type tbutton = {
  children: ReactNode;
  variant: string;
};

export const LoginComp = () => {
  const colors: any = {
    default: 'rgb(36, 41, 47)',
    danger: 'rgb(207, 34, 46)',
    outline: 'rgb(9, 105, 218)',
  };

  const Button = ({ children, variant = 'block' }: tbutton) => {
    return (
      <button
        css={{
          borderRadius: '6px',
          border: '1px solid rgba(27, 31, 36, 0.15)',
          backgroundColor: 'rgb(246, 248, 250)',
          color: variant,
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: '600',
          lineHeight: '20px',
          fontSize: '14px',
          padding: '5px 16px',
          textAlign: 'center',
          cursor: 'pointer',
          appearance: 'none',
          userSelect: 'none',
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <div
      css={css({
        backgroundColor: 'pink',
        Width: '1100px',
        minHeight: '1100px',
      })}
    >
      <Headercomp />
      <div
        css={css({
          width: '50px',
          height: '50px',
          border: '1px solid block',
          backgroundColor: 'salmon',
        })}
      >
        {' '}
        box1
      </div>
      {/* <Button variant="danger"> box2</Button> */}
      <Button variant=""> box2</Button>
      <Button variant="green"> box2</Button>
    </div>
  );
};
