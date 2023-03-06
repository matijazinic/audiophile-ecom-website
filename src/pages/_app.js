import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { atom, createStore, Provider } from "jotai";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const store = createStore();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${manrope.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
