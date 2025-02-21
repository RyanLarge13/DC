"use client";

import React from "react";

const UseCasesService = ({ useCases }: { useCases: string[] }) => {
  return (
    <div className="flex aspect-square w-full max-w-[700px] items-center justify-start overflow-hidden">
      {useCases.map((useCase, index) => (
        <div
          key={index}
          className="flex h-full min-w-full items-center justify-center rounded-md bg-opacity-20 bg-gradient-to-tr from-slate-900 to-slate-800 p-3 text-center font-semibold backdrop-blur-sm"
        >
          {useCase}
        </div>
      ))}
    </div>
  );
};

export default UseCasesService;
