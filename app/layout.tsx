import { getRequestContext } from "@cloudflare/next-on-pages";
import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const runtime = "edge";

export const metadata = () => {
  const { SITE_NAME } =
    (getRequestContext().env as { SITE_NAME?: string }) ?? process.env;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: SITE_NAME!,
      template: `%s | ${SITE_NAME}`,
    },
    robots: {
      follow: true,
      index: true,
    },
  };
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="p-3 font-body bg-primary-800">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main className="flex flex-col gap-4">
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}

