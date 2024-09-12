import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FC } from "react";

interface FoyerLayoutProps {
  children: React.ReactNode;
}

const FoyerLayout: FC<FoyerLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default FoyerLayout;
