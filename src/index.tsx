import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";

const Main = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default React.memo(Main);
