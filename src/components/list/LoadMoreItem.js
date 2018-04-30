import React from "react";

const LoadMoreItem = ({ totalCount, itemsSize, onClick }) => {
  const hasMoreItems = totalCount - itemsSize > 0;
  return (
    hasMoreItems && (
      <div>
        {" "}
        <li className="list__item list__item--action" onClick={onClick}>
          <span>Carregar mais...</span>
        </li>
      </div>
    )
  );
};

export default LoadMoreItem;
