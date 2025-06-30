import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-secondary" role="alert">
      A simple secondary alert—check it out! {children}
    </div>
  );
};

export default Alert;
