import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const next = () => {
    setCurrentPage((currentPage) => currentPage + 1)
  } 

  const prev = () => {
    setCurrentPage((currentPage) => currentPage - 1)
  } 
  
return {
    currentPage, next, prev
}
};
