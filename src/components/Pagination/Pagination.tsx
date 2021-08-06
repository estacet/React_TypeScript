import React, { useContext } from "react";
import PaginationContext from "../../contexts/PaginationContext";
import s from './pagination.module.scss'

export const Pagination: React.FC = () => {
    const {currentPage, updatePage, totalItems, updatedUsers, itemsPerPage} = useContext(PaginationContext);
    const nextPage = (event: any): void => {
        event.preventDefault();
        updatePage(currentPage + 1, updatedUsers)
    }

    const prevPage = (event: any): void => {
        event.preventDefault();
        if (currentPage > 1) {
            updatePage(currentPage - 1, updatedUsers )
        } else {
            updatePage(1, updatedUsers)
        }
    }

    const showPrevButton = (): boolean => {
        return currentPage > 1
    }

    const showNextButton = (): boolean => {
        return ((currentPage) * itemsPerPage) < totalItems
    }


    return (
        <div className={s.pagination}>
            <ul className="pagination">
                <li
                    className={showPrevButton() ? 'page-item' : s.hidden}
                    onClick={prevPage}
                >
                    <a className="page-link">
                        <span >&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link">{currentPage}</a></li>
                <li
                    onClick={nextPage}
                    className={showNextButton() ? 'page-item' : s.hidden}
                >
                    <a className="page-link">
                        <span>&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
