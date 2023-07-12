"use server";

import React, { useState } from "react";
import FirstListItems from "./FirstListItems";
import LateListItems from "./LateListItems";

export default async function List() {
  // const [qc] = useState(() => new QueryClient());
  return (
    <div className='mt-6'>
      <ul className='m-0 p-0'>
        <FirstListItems />

        <LateListItems />
      </ul>
    </div>
  );
}
