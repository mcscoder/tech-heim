import { HTMLAttributeAnchorTarget } from "react";
import {
  FacebookColorIcon,
  FacebookIcon,
  InstagramColorIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterColorIcon,
  TwitterIcon,
  YoutubeColorIcon,
  YoutubeIcon,
} from ".";

export interface NavigationLinkObject {
  path: string;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const navigationLinks: NavigationLinkObject[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/product?categoryId=1",
    label: "Products",
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

export interface LinkGroupObject {
  title?: string;
  navigationLink: NavigationLinkObject[];
}

export const footerLinkGroups: LinkGroupObject[] = [
  {
    title: "Company",
    navigationLink: [
      {
        label: "About us",
        path: "/contact",
      },
      {
        label: "Blog",
        path: "/blog",
      },
      {
        label: "Returns",
        path: "#",
      },
      {
        label: "Order status",
        path: "#",
      },
    ],
  },
  {
    title: "Info",
    navigationLink: [
      {
        label: "How it works?",
        path: "#",
      },
      {
        label: "Our promises",
        path: "#",
      },
      {
        label: "FQA",
        path: "#",
      },
    ],
  },
  {
    title: "Contact us",
    navigationLink: [
      {
        label: "123 Main Street, AnyTown, USA",
        path: "https://www.google.com/search?client=opera&q=123+Main+Street%2C+AnyTown%2C+USA&sourceid=opera&ie=UTF-8&oe=UTF-8",
        startIcon: <LocationIcon />,
        target: "_blank",
      },
      {
        label: "+1 (555) 123-4567",
        path: "https://www.google.com/search?client=opera&q=%2B1+(555)+123-4567&sourceid=opera&ie=UTF-8&oe=UTF-8",
        startIcon: <PhoneIcon />,
        target: "_blank",
      },
      {
        label: "TechHeimSupport@gmail.com",
        path: "https://mail.google.com",
        startIcon: <MailIcon />,
        target: "_blank",
      },
    ],
  },
];

export const socialLinks: NavigationLinkObject[] = [
  {
    path: "https://www.facebook.com/",
    startIcon: <FacebookIcon />,
    endIcon: <FacebookColorIcon />,
    target: "_blank",
  },
  {
    path: "https://www.twitter.com/",
    startIcon: <TwitterIcon />,
    endIcon: <TwitterColorIcon />,
    target: "_blank",
  },
  {
    path: "https://www.instagram.com/",
    startIcon: <InstagramIcon />,
    endIcon: <InstagramColorIcon />,
    target: "_blank",
  },
  {
    path: "https://www.youtube.com/",
    startIcon: <YoutubeIcon />,
    endIcon: <YoutubeColorIcon />,
    target: "_blank",
  },
];

export const policyLinks: NavigationLinkObject[] = [
  {
    path: "#",
    label: "Cookie settings",
  },
  {
    path: "#",
    label: "Privacy policy",
  },
  {
    path: "#",
    label: "Terms and conditions",
  },
  {
    path: "#",
    label: "Imprint",
  },
];

export const searchSuggestItems: LinkGroupObject[] = [
  {
    title: "Most used keywords",
    navigationLink: [
      {
        path: "#",
        label: "MacBook Pro ",
      },
      {
        path: "#",
        label: "AirPods Pro",
      },
      {
        path: "#",
        label: "Samsung S9",
      },
      {
        path: "#",
        label: "Tablet",
      },
      {
        path: "#",
        label: "Xiaomi",
      },
      {
        path: "#",
        label: "JBL speaker",
      },
      {
        path: "#",
        label: "Canon",
      },
      {
        path: "#",
        label: "AirPods Max",
      },
      {
        path: "#",
        label: "Asus",
      },
      {
        path: "#",
        label: "MagSafe",
      },
    ],
  },
  {
    title: "The Most Searched Items",
    navigationLink: [
      {
        path: "#",
        label: "Tablets",
      },
      {
        path: "#",
        label: "Headphones",
      },
      {
        path: "#",
        label: "Smartphones",
      },
      {
        path: "#",
        label: "Smartwatch",
      },
      {
        path: "#",
        label: "Laptops",
      },
      {
        path: "#",
        label: "USB Drive",
      },
      {
        path: "#",
        label: "Phone Cases",
      },
    ],
  },
];
