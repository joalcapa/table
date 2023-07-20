import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useUsersList from '../../hooks/useUsersList';
import usersActions from '../../state/actions/users';
import settingsActions from '../../state/actions/settings';
import Table from '../commons/table';
import Menu from '../menu';
import { usersListFields } from '../../utils';
import './index.css';

const List = (props) => (
    <>
        <div className='title'>Lista de usuarios</div>
        <Menu
            filter={props.filter}
            changeFilter={props.changeFilter}
            restoreUsers={props.restoreUsers}
            onSort={props.onSort}
            onCountrySort={props.onCountrySort}
            changeDarkTable={props.changeDarkTable}
        />
        <Table 
            data={props.users}
            fields={usersListFields}
            onSort={props.onSort}
            isDark={props.isDarkTable}
        />  
    </>
);

List.propTypes = {
    users: PropTypes.array,
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
    restoreUsers: PropTypes.func,
    onSort: PropTypes.func,
    onCountrySort: PropTypes.func,
    isDarkTable: PropTypes.bool,
};

List.defaultProps = {
    users: [],
    filter: '',
    changeFilter: () => {},
    restoreUsers: () => {},
    onSort: () => {},
    onCountrySort: () => {},
    changeDarkTable: () => {},
};

const ListHoc = (props) => {
    const hook = useUsersList(props);
    return <List {...hook} />;
};

ListHoc.propTypes = {
    getUsers: PropTypes.func,
    deleteUser: PropTypes.func,
    restoreUsers: PropTypes.func,
    setDarkTable: PropTypes.func,
    users: PropTypes.array,
    expiryTime: PropTypes.any,
    isDarkTable: PropTypes.bool,
};

ListHoc.defaultProps = {
    getUsers: () => {},
    deleteUser: () => {},
    restoreUsers: () => {},
    setDarkTable: () => {},
    users: [],
    expiryTime: null,
    isDarkTable: false,
};

const mapState = (state) => ({
    users: state.users.users,
    expiryTime: state.users.expiryTime,
    isDarkTable: state.settings.isDarkTable,
});

const mapDispatch = {
    getUsers: usersActions.getUsers,
    deleteUser: usersActions.deleteUser,
    restoreUsers: usersActions.restoreUsers,
    setDarkTable: settingsActions.setDarkTable,
};

export default connect(mapState, mapDispatch)(ListHoc);