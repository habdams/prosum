import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { Poppins } from "@next/font/google";

import "../styles/globals.css";

const poppins = Poppins({ weight: ["400", "500", "700"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={poppins.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
