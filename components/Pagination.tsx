/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { IExchange } from '../services/http';

export default function Pagination({
  exchanges,
  onButtonClick,
  page,
}: {
  exchanges: IExchange[];
  onButtonClick: (page: number) => void;
  page: number;
}) {
  function handleButtonClick(evt: React.MouseEvent) {
    const buttonId = evt.currentTarget.id;
    let newPage;
    if (buttonId === 'nextButton') {
      newPage = page + 1;
    } else {
      newPage = page - 1;
    }
    onButtonClick(newPage);
  }

  return (
    <div className="flex items-center min-w-fit space-x-5 px-4 py-3 ">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{page}</span> to{' '}
          <span className="font-medium">5</span> of{' '}
          <span className="font-medium">{exchanges.length}</span> results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            disabled={page === 1 ? true : false}
            type="button"
            id="previusButton"
            onClick={handleButtonClick}
            className="relative inline-flex disabled:hidden items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            disabled={page === 4 ? true : false}
            type="button"
            id="nextButton"
            onClick={handleButtonClick}
            className="relative inline-flex disabled:hidden items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
}
