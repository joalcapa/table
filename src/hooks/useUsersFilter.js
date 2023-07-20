import { useState, useMemo } from 'react';

const useUsersFilter = (props = {}) => {
    const { users = [] } = props;
    const [ filter, setFilter ] = useState('');

    const filteredUsers = useMemo(() => {
        return users.filter((user) => (!user.isDeleted)).filter((user) => (
            !filter ? true : (
                user.country.toLowerCase().includes(filter.toLowerCase())
            )
        ));
    }, [ users, filter ]);

    const changeFilter = (event) => {
        setFilter(event.target.value);
    };

    return {
        filteredUsers,
        filter,
        changeFilter,
    }
};

export default useUsersFilter;