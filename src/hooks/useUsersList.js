import useUsersFetch from './useUsersFetch';
import useUsersFilter from './useUsersFilter';
import useUsersSort from './useUsersSort';
import useSettings from './useSettings';

const useUsersList = (props = {}) => {
    const { deleteUser = () => {}, restoreUsers = () => {} } = props;
    const { filteredUsers, filter, changeFilter } = useUsersFilter(props);
    const { sortedUsers, onSort, onCountrySort } = useUsersSort({ users: filteredUsers });
    const { isDarkTable, changeDarkTable } = useSettings(props);

    useUsersFetch(props);

    return {
        isDarkTable,
        filter,
        users: sortedUsers.map((user) => ({
            ...user,
            onDelete: () => {
                deleteUser(user);
            },
        })),
        changeFilter,
        restoreUsers,
        onSort,
        onCountrySort,
        changeDarkTable,
    }
};

export default useUsersList;