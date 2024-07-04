"use client"
import React, { useContext } from 'react';
import { GlobalContext } from '@/context/Provider';



const PageSpinner: React.FC= () => {
  const {contextState:{loading}} = useContext(GlobalContext);
  return (
    <>
      {loading ? <div className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className=" w-full max-w-lg mx-auto">
          <div className="p-4 justify-center flex">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8a4 4 0 01-4 4H4z"
              ></path>
            </svg>
            <span>Processing...</span>
          </div>
        </div>
      </div> : ""}
    </>
  );
};

export default PageSpinner;
