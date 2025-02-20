import React from 'react';
import PaginationItem from './PaginationItem';
import s from './Pagination.module.scss';
import { useSortStore } from '@/app/core/providers/sortProvider';

export default function Pagination({ page, pages }: { page: number; pages: number }) {
  const { changePage } = useSortStore(store => store);

  const prevPage = () => {
    if (page > 1) changePage(page - 1);
  };

  const nextPage = () => {
    if (page < pages) changePage(page + 1);
  };

  const renderPaginationItems = () => {
    if (pages <= 5) {
      return Array.from({ length: pages }, (_, i) => (
        <PaginationItem key={i + 1} page={i + 1} active={page === i + 1} />
      ));
    }

    const items = [];

    items.push(<PaginationItem key={1} page={1} active={page === 1} />);

    if (page > 3) {
      items.push(<span key="start-ellipsis">...</span>);
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(pages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      items.push(<PaginationItem key={i} page={i} active={page === i} />);
    }

    if (page < pages - 2) {
      items.push(<span key="end-ellipsis">...</span>);
    }

    items.push(<PaginationItem key={pages} page={pages} active={page === pages} />);

    return items;
  };

  return (
    <div className={s.Pagination}>
      <div className={s.Pagination__arrow_left} onClick={prevPage}>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0.295L0 6.295L1.41 7.705L6 3.125L10.59 7.705L12 6.295L6 0.295Z" fill="black"></path>
        </svg>
      </div>

      <div className={s.Pagination__items}>{renderPaginationItems()}</div>

      <div className={s.Pagination__arrow_right} onClick={nextPage}>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0.295L0 6.295L1.41 7.705L6 3.125L10.59 7.705L12 6.295L6 0.295Z" fill="black"></path>
        </svg>
      </div>
    </div>
  );
}



















