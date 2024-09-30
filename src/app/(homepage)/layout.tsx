import { FC } from "react";

interface HomePageLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout: FC<HomePageLayoutProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default HomePageLayout;
