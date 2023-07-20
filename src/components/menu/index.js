import PropTypes from 'prop-types';
import './index.css';

const Menu = (props) => (
    <div className='menu'>
        <button onClick={props.changeDarkTable}>
            Colorear filas
        </button>
        <button onClick={props.onCountrySort}>
            Ordena por paìs
        </button>
        <button onClick={props.restoreUsers}>
            Restaurar estado inicial
        </button>
        <input 
            value={props.filter} 
            onChange={props.changeFilter}
            placeholder="Filtrar por paìs"
        />
    </div>
);

Menu.propTypes = {
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
    restoreUsers: PropTypes.func,
    onSort: PropTypes.func,
    onCountrySort: PropTypes.func,
    changeDarkTable: PropTypes.func,
};

Menu.defaultProps = {
    filter: '',
    changeFilter: () => {},
    restoreUsers: () => {},
    onSort: () => {},
    onCountrySort: () => {},
    changeDarkTable: () => {},
};

export default Menu;