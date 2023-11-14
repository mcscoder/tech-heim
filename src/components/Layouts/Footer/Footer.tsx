import { MainFooter, MainFooterContent, PolicyFooter } from "./components";
import { PolicyFooterContent } from "./components/PolicyFooterContent";

export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <MainFooter>
        <MainFooterContent />
      </MainFooter>
      <PolicyFooter>
        <PolicyFooterContent />
      </PolicyFooter>
    </footer>
  );
};
