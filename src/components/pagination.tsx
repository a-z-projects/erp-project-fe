import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface PaginationProps {
  page: number;
  totalPage: number;
  onChange: (val: number) => void;
}

function Pagination({ page, totalPage, onChange }: PaginationProps) {
  const numberOfPages: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState<number>(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState<(number | string)[]>(
    []
  );
  const [dotsInitial, setDotsInitial] = useState<string>('...');

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(
        Number(currentButton) - 2,
        Number(currentButton)
      );
      const sliced2 = numberOfPages.slice(
        Number(currentButton),
        Number(currentButton) + 1
      );
      tempNumberOfPages = [
        1,
        dotsInitial,
        ...sliced1,
        ...sliced2,
        dotsInitial,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsInitial, ...sliced];
    }

    setArrOfCurrButtons(tempNumberOfPages);
    onChange(Number(currentButton));
  }, [currentButton, totalPage]);

  useEffect(() => {
    if (page !== currentButton) {
      setCurrentButton(page);
    }
  }, [page]);

  return (
    <div className="my-6 flex justify-center gap-2">
      <Button
        disabled={currentButton === 1}
        className="mr-2 border border-[#0078FF] bg-white px-2 text-[#0078FF]"
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : Number(prev) - 1))
        }
      >
        <ArrowLeftIcon />
      </Button>

      {arrOfCurrButtons.map((item, index) => {
        const isActive = item === currentButton;

        return (
          <React.Fragment key={index}>
            {isNaN(Number(item)) ? (
              <button className="bg-transparant flex w-8 cursor-default items-center justify-center gap-2 whitespace-nowrap border-none font-medium text-[#0078FF]">
                {item}
              </button>
            ) : (
              <button
                className={`h-9 w-9 whitespace-nowrap rounded-md border-[#0078FF] text-xs
                  ${
                    isActive
                      ? 'bg-[#0078FF] text-white'
                      : 'bg-white text-[#0078FF]'
                  }`}
                onClick={() => setCurrentButton(item as number)}
              >
                {item}
              </button>
            )}
          </React.Fragment>
        );
      })}

      <Button
        disabled={currentButton === numberOfPages.length}
        className="ml-2 border border-[#0078FF] bg-white px-2 text-[#0078FF]"
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : Number(prev) + 1
          )
        }
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
}

export default Pagination;
