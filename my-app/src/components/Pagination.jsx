import React from "react";
import "../styles/pagination.css";
export const Pagination = ({ totalUsers, limit, setPage, page }) => {
    const totalPages = Math.ceil(totalUsers / limit);
  const createButton = () => {
    const arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  };
  return (
    <div id="pagination">
      <button disabled={page==1} onClick={() => setPage((pre)=>pre-1)} className="btn">{"<"}</button>
      {createButton().map((btnNo) => {
        return (
          <button
            className={btnNo == page ? "activePage btn" : "btn"}
            key={btnNo}
            onClick={() => setPage(btnNo)}
          >
            {btnNo}
          </button>
        );
      })}
      <button disabled={page==totalPages} onClick={() => setPage((pre)=>pre+1)} className="btn">{">"}</button>
    </div>
  );
};
