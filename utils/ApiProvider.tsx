/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { ApolloProvider } from "@apollo/client";
import React from "react";
import apollo from "./apolloClient";

function ApiProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apollo}>{children}</ApolloProvider>;
}

export default ApiProvider;
