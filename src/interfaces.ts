export interface UserInterface {
    id?: number;
    name: string;
    count_pub: number;
    pageviews: number;
}

export type UserContextType = {
    users: UserInterface[];
    itemsPerPage: number;
    currentPage: number;
    setPaginatedUsers: (users: UserInterface[]) => void;
    setCurrentPage: (page: number) => void;
    updateUsers: (users: UserInterface[]) => void;
    updatedUsers: UserInterface[];
    paginatedUsers: UserInterface[];
}

export type PaginationContextType = {
    currentPage: number;
    updatePage: (page: number, users: UserInterface[]) => void;
    totalItems: number;
    updatedUsers: UserInterface[];
    itemsPerPage: number;
}
