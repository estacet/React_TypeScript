import {UserInterface} from "../interfaces";

export default function  pagination (page: number, itemsPerPage: number, users: UserInterface[]): UserInterface[] {
    if (page === 1) {
        return users.slice(0, itemsPerPage)
    }
    const startIndex = (page-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return users.slice(startIndex, endIndex);
}