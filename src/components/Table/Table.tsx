import React, { useContext } from "react";
import { TableItem } from "./TableItem";
import UserContext from "../../contexts/UserContext";
import s from './table.module.scss';

export const Table: React.FC = () => {
    const {updateUsers, updatedUsers } = useContext(UserContext);

    let sortedByAlphabet = false
    let sortedByDecrease = true

    const sortByAlphabet = (): void => {
        if (!sortedByAlphabet) {
            updatedUsers.sort((a, b) => a.name.localeCompare(b.name))
            updateUsers([...updatedUsers])


            sortedByAlphabet = true
        } else {
            updatedUsers.sort((a, b) => b.name.localeCompare(a.name))
            updateUsers(updatedUsers)
            sortedByAlphabet = false
        }
    }
    const sortByViews = (): void => {
        if (!sortedByDecrease){
            updatedUsers.sort((a, b) => b.pageviews - a.pageviews)
            updateUsers(updatedUsers)

            sortedByDecrease = true
        } else {
            updatedUsers.sort((a, b) => a.pageviews - b.pageviews)
            updateUsers([...updatedUsers])

            sortedByDecrease = false
        }

    }

    return (
        <table className={s.userListTable}>
            <thead>
            <tr>
                <th>Name <button className={s.sortButton} onClick={() => {
                    sortByAlphabet();
                }}
                >
                    <i className="bi bi-arrow-down-up"></i></button></th>
                <th></th>
                <th>Views <button className={s.sortButton} onClick={() => sortByViews()}><i className="bi bi-arrow-down-up"></i></button>
                </th>
            </tr>
            </thead>
            <tbody>
                <TableItem />
            </tbody>
        </table>
    );
}