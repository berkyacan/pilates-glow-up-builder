import { ReactNode } from "react";

interface FormStepProps {
  children: ReactNode;
  className?: string;
}

export const FormStep = ({ children, className = "" }: FormStepProps) => {
  return (
    <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${className}`}>
      {children}
    </div>
  );
};
