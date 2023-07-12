import Image from "next/image";
import React, { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className='fixed top-1/2 left-1/2 translate-x-[-100px] translate-y-[-100px]'>
      <Image src='/loading.gif' width={200} height={200} alt='loading' />
    </div>
  );
}
