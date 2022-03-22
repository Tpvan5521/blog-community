import React from "react";

interface IButton {
  content: string | JSX.Element;
  customClassName?: string;
}

export const DefaultButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-default outline-none rounded-lg border-none h-9 px-5 text-dark ${customClassName}`}>{content}</button>;
};

export const PrimaryButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-primary outline-none rounded-lg border-none h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const DangerButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-danger outline-none rounded-lg border-none h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const WarningButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-warning outline-none rounded-lg border-none h-9 px-5 text-dark ${customClassName}`}>{content}</button>;
};

export const SuccessButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-success outline-none rounded-lg border-none h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const CoffeeButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-coffee outline-none rounded-lg border-none h-9 px-5 ${customClassName}`}>{content}</button>;
};

export const TransparentButton = ({ content, customClassName }: IButton) => {
  return <button className={`bg-transparent outline-none rounded-lg border-none h-9 px-5 ${customClassName}`}>{content}</button>;
};
