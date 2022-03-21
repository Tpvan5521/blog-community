import React from "react";

export const DefaultButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="bg-default outline-none rounded-lg border-none h-9 px-5 text-dark">{content}</button>;
};

export const PrimaryButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="bg-primary outline-none rounded-lg border-none h-9 px-5">{content}</button>;
};

export const DangerButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="bg-danger outline-none rounded-lg border-none h-9 px-5">{content}</button>;
};

export const WarningButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="bg-warning outline-none rounded-lg border-none h-9 px-5 text-dark">{content}</button>;
};

export const SuccessButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="bg-success outline-none rounded-lg border-none h-9 px-5">{content}</button>;
};

export const TransparentButton = ({ content }: { content: string | JSX.Element }) => {
  return <button className="bg-transparent outline-none rounded-lg border-none h-9 px-5">{content}</button>;
};
