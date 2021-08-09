import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { UserInterface } from "../../interfaces";
import s from './Table.module.scss'

export const TableItem: React.FC = () => {
    const {users, paginatedUsers} = useContext(UserContext);

    const awardedPlace = (user: UserInterface): string => {
        const sorted: UserInterface[] = users.sort((a, b) => b.pageviews - a.pageviews);
        const [first,second, third]: UserInterface[] = sorted.slice(0, 3);

        if (user.name === first.name) {
            return '1';
        } else if (user.name === second.name){
            return '2'
        } if (user.name === third.name) {
            return '3'
        }
        return ''
    }

    const awardsImage = (place: string): string => `/static/${place}.svg`;

    return (
        <>
            {paginatedUsers.map((user: UserInterface, index: number): JSX.Element => {
                return (
                <tr key={index}>
                    <td>
                        {user.name}
                        <div className={s.userPublicationsQuantity}>{user.count_pub} {user.count_pub === 1? 'publication': 'publications'}</div>
                    </td>
                    <td>
                        {awardedPlace(user)? <div><img className={s.userAward} src={awardsImage(awardedPlace(user))} alt="award"/></div> : ''}
                    </td>
                    <td>{user.pageviews}</td>
                </tr>
                );
                })}
        </>
    );
}
