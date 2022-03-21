import React from "react";

export const OutlineDefaultButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="text-default border-2 border-default rounded-lg h-9 px-5">{content}</button>;
};

export const OutlinePrimaryButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="text-primary border-2 border-primary rounded-lg h-9 px-5">{content}</button>;
};

export const OutlineDangerButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="text-danger border-2 border-danger rounded-lg h-9 px-5">{content}</button>;
};

export const OutlineWarningButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="text-warning border-2 border-warning rounded-lg h-9 px-5">{content}</button>;
};

export const OutlineSuccessButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="text-success border-2 border-success rounded-lg h-9 px-5">{content}</button>;
};

export const OutlineTransparentButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="text-transparent border-2 border-transparent rounded-lg h-9 px-5">{content}</button>;
};
