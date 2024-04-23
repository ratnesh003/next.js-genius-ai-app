"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0b75e2a8-3513-4332-a2b9-891d5542e156");
  }, []);

  return null;
};
