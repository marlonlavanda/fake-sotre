import { ButtonProps } from "./Button.types";

export const Button = ({ style, onClick, children, disabled }: ButtonProps) => {
  const outlineStyles = "border border-black text-black";
  const filledStyles = "bg-black text-white";
  const buttonStyles = `px-4 py-2 rounded ${
    style === "outline" ? outlineStyles : filledStyles
  }`;

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
