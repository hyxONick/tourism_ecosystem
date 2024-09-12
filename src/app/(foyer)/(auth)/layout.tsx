import { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      Auth layout
      {children}
    </div>
  );
};

export default AuthLayout;
