import useUsersFetch from './useUsersFetch';
import useUsersFilter from './useUsersFilter';
import useUsersSort from './useUsersSort';

const useUsersList = (props = {}) => {
    const { deleteUser = () => {}, restoreUsers = () => {} } = props;
    const { users, filter, changeFilter } = useUsersFilter(props);
    const { sortedUsers, onSort, onCountrySort } = useUsersSort({ users });

    useUsersFetch(props);

    return {
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
    }
};

export default useUsersList;