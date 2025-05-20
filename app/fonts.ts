import localFont from "next/font/local";

export const communityPro = localFont({
  src: [
    {
      path: "../public/fonts/CommunityPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CommunityPro-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/CommunityPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CommunityPro-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/CommunityPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CommunityPro-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/CommunityPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/CommunityPro-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-community-pro",
});
