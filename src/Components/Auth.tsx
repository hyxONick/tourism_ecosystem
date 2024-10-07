'use client';

import { redirect } from "next/navigation";
import { FC, PropsWithChildren } from "react";4


interface IAuth extends PropsWithChildren {
    action?: (token: string) => void;
}

export const Auth: FC<IAuth> = ({children, action}) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    action && token && action(token)

    return children;
}