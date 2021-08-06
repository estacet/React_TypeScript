import { ReactNode, useContext } from "react";
import pagination from "../../helper/utils";
import PaginationContext from "./index";
import UserContext from "../UserContext";
import { UserInterface } from "../../interfaces";

interface Props {
    users: UserInterface[];
    children: ReactNode;
}

export const PaginationContextWrapper: React.FC<Props> = ({users, children}) => {

    const { setPaginatedUsers, currentPage, setCurrentPage, updatedUsers } = useContext(UserContext)
    const itemsPerPage: number = 10;

    const updatePage = (page: number, users: UserInterface[]): void => {
        setCurrentPage(page);
        setPaginatedUsers(pagination(page, itemsPerPage, users));
    }

    return(
        <PaginationContext.Provider value={{currentPage, updatePage, totalItems: users.length, updatedUsers, itemsPerPage}}>
            {children}
        </PaginationContext.Provider>
    );
}
