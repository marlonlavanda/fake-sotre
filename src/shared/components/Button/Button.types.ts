export interface ButtonProps {
  style: "outline" | "filled";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
