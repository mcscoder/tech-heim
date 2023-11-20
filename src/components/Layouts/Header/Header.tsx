import { LogoIcon, navigationLinks } from "@/constants";
import {
  AccountButton,
  CartButton,
  Navbar,
  Navigation,
  NavigationItem,
  SearchButton,
  UserFeature,
} from "./components";

export const Header = () => {
  return (
    <header className="border-b border-primary-25 shadow-1 mb-[-1px]">
      <div className="content-container h-[100px] flex items-center justify-between relative z-10">
        <LogoIcon />
        <Navbar>
          <Navigation>
            {navigationLinks.map((navigationLink, index) => {
              return (
                <NavigationItem
                  key={index}
                  navigationLink={navigationLink}
                />
              );
            })}
          </Navigation>
        </Navbar>
        <UserFeature>
          <SearchButton />
          <CartButton />
          <AccountButton />
        </UserFeature>
      </div>
    </header>
  );
};
