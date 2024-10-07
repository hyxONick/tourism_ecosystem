'use client';
import { Auth } from "@/Components/Auth";
import { redirect } from "next/navigation";
import { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = (props) => {
  const { children } = props;

  return <Auth action={() => {redirect("/")}}>{children}</Auth>;
};

export default AuthLayout;
