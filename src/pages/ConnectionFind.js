import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppNav } from "./AppNav";
import { Filter } from "./Flter";
import { ViewConnection } from "./ViewConnection";

export const ConnectionFind = () => {
  return (
    <div>
      <AppNav />
      <h3 className="bg-light p-3 op-1 ">Find Connection </h3>

      <Filter />
      <ViewConnection />
    </div>
  );
};
