import { useState, useMemo } from 'react';

const useUsersSort = (props = {}) => {
    const { users = [] } = props;
    const [ isAsc, setAsc ] = useState(true);
    const [ fieldSort, setFieldSort ] = useState('');

    const onSort = (field) => {
        if (field != 'photoUrl' && field != 'onDelete') {
            setFieldSort(field);
            setAsc(true);
        }
    };

    const onCountrySort = () => {
        setFieldSort('country');
        setAsc(!isAsc);
    };

    const sortedUsers = useMemo(() => {
        if (fieldSort) {
            users.sort((a, b) => {
                if (isAsc ? a[fieldSort] < b[fieldSort] : a[fieldSort] > b[fieldSort]) {
                  return -1;
                } else if (isAsc ? a[fieldSort] > b[fieldSort] : a[fieldSort] < b[fieldSort]) {
                  return 1;
                } else {
                  return 0;
                }
            });
        }

        return users;
    }, [users, fieldSort, isAsc]);

    return {
        sortedUsers,
        onSort,
        onCountrySort,
    }
};

export default useUsersSort;