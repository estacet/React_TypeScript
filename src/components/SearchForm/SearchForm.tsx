import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import s from './searchForm.module.scss'
import { UserInterface } from "../../interfaces";

export const SearchForm: React.FC = () => {
    const {users, updateUsers} = useContext(UserContext);

    const filterUsersByName = (searchName: string): void => {
        const filtered: UserInterface[] = users.filter((user: UserInterface) => {
            const re = new RegExp('^' + searchName, 'i')
            return re.test(user.name)
        })

        updateUsers(filtered);
    }

    return (
        <form className={s.searchForm}>
            <i className="bi bi-search "></i>
            <input
                placeholder="Search by name"
                onChange={(e) => {
                    filterUsersByName(e.target.value)
                }}
                type="text"
            />
        </form>
    );
}