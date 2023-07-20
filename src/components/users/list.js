import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useUsersList from '../../hooks/useUsersList';
import usersActions from '../../state/actions/users';
import Table from '../commons/table';
import { usersListFields } from '../../utils';
import './index.css';

const List = (props) => (
    <>
        <input value={props.filter} onChange={props.changeFilter} />
        <button onClick={props.restoreUsers}>
            RESTAURAR
        </button>
        <button onClick={props.onCountrySort}>
            ordenar por pais
        </button>
        <Table 
            data={props.users}
            fields={usersListFields}
            onSort={props.onSort}
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
};

List.defaultProps = {
    users: [],
    filter: '',
    changeFilter: () => {},
    restoreUsers: () => {},
    onSort: () => {},
    onCountrySort: () => {},
};

const ListHoc = (props) => {
    const hook = useUsersList(props);
    return <List {...hook} />;
};

ListHoc.propTypes = {
    getUsers: PropTypes.func,
    deleteUser: PropTypes.func,
    restoreUsers: PropTypes.func,
    users: PropTypes.array,
};

ListHoc.defaultProps = {
    getUsers: () => {},
    deleteUser: () => {},
    restoreUsers: () => {},
    users: [],
};

const mapState = (state) => ({
    users: state.users.users,
    expiryTime: state.users.expiryTime,
});

const mapDispatch = {
    getUsers: usersActions.getUsers,
    deleteUser: usersActions.deleteUser,
    restoreUsers: usersActions.restoreUsers,
};

export default connect(mapState, mapDispatch)(ListHoc);