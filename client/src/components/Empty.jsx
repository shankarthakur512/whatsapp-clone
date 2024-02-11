import React from "react";
import Image from "next/image";

function Empty() {
  return (
  <div className="border-converstion-border border-1 w-full bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center">
    <Image  src="/whatsapp.gif"  alt="whatsapp-logo" height={50} width={50} />
    <h3 className="text-gray-600">End To End Encrypted Message</h3>
  </div>
  );
}

export default Empty;
