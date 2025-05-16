import Script from "next/script";
import React from "react";

type Props = {
  adClient?: string;
};

const AdScript = ({ adClient }: Props) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdScript;
