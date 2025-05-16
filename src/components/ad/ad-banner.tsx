"use client";

import React, { useEffect } from "react";

type props = {
  adSlot?: string;
  adClient?: string;
  adFormat?: string;
  dataFullWidthResponsive?: boolean;
};

const AdBanner = ({
  adSlot,
  adFormat,
  adClient,
  dataFullWidthResponsive = true,
}: props) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="rounded-xl bg-background border-zinc-500 overflow-hidden mt-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};

export default AdBanner;
