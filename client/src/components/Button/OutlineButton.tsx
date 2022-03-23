import React from "react";

interface IOutlineButton {
  content: string | JSX.Element;
  customClassName?: string;
}

export const OutlineDefaultButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-default border-2 border-default rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const OutlinePrimaryButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-primary border-2 border-primary rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const OutlineDangerButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-danger border-2 border-danger rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const OutlineWarningButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-warning border-2 border-warning rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const OutlineSuccessButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-success border-2 border-success rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const OutlineCoffeeButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-coffee border-2 border-coffee rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const OutlinetransparentButton = ({ content, customClassName }: IOutlineButton) => {
  return <button className={`text-transparent border-2 border-transparent rounded-lg h-9 px-5 ${customClassName}`}>{content}</button>;
};
