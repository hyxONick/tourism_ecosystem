import { Footer } from "@/Components/footer";
import { FC } from "react";
import { Navbar } from "../(homepage)/_components/navbar";

interface FoyerLayoutProps {
  children: React.ReactNode;
}

const FoyerLayout: FC<FoyerLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar
        logoSrc="/img/tour_guide.svg"
        linkColor="#495560"
        borderBottom="1px solid #E6E6E6"
      />
      {children}
    </div>
  );
};

export default FoyerLayout;
