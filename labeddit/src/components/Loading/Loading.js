import { CircularProgress } from "@material-ui/core";
import React from "react";
import { LoadingContainer } from "./styled";

export function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
}