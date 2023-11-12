export interface NavigationLinkObject {
  path: string;
  label: string;
}

export const navigationLinks: NavigationLinkObject[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/product",
    label: "Products",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/faq",
    label: "FAQ",
  },
  {
    path: "/contact",
    label: "Contact Us",
  },
];
