import { useState, ReactNode } from "react";
import UserContext from "./index";
import pagination from '../../helper/utils'
import data from '../../data.json';
import { UserInterface } from "../../interfaces";

interface Props {
    users: UserInterface[];
    children: ReactNode;
}
export const UserContextWrapper: React.FC<Props> = ({ users, children }) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [updatedUsers, setUpdatedUsers] = useState<UserInterface[]>(data);
    const itemsPerPage:number = 10;
    const [paginatedUsers, setPaginatedUsers] = useState<UserInterface[]>(pagination(1, itemsPerPage, users));

    const updateUsers = (users: UserInterface[]): void => {
        setUpdatedUsers(users)
        setPaginatedUsers(pagination(currentPage, itemsPerPage, users))
    }

    return (
        <UserContext.Provider value={{users, itemsPerPage, currentPage, setPaginatedUsers, setCurrentPage, updateUsers, updatedUsers, paginatedUsers}}>
            {children}
        </UserContext.Provider>
    );
}
