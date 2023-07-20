import PropTypes from 'prop-types';
import './index.css';

const Item = (props) => {
    const { type, data, label } = props;

    if (type === 'img') {
        return (
            <img 
                src={data}  
                className='users-photo'
            />
        );
    }

    if (type === 'button') {
        return (
            <button onClick={data}>
                {label}
            </button>
        );
    }

    return data;
};

Item.propTypes = {
    type: PropTypes.string, 
    data: PropTypes.any, 
    label: PropTypes.string,
};

Item.defaultProps = {
    type: 'text', 
    data: '', 
    label: '',
};

const Table = (props) => (
    <table>
        <thead>
            <tr>
                {
                    props.fields.map((field) => (
                        <th
                            className='fill-name'
                            onClick={() => {
                                props.onSort(field.value);
                            }}
                            key={field.value}
                        >
                            {field.label}
                        </th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                props.data.map((item, index) => (
                    <tr 
                        key={item.id}
                        className={
                            `table-fill ${
                                props.isDark ? 
                                `pointer-events ${index % 2 === 0 ? 'dark-fill' : 'light-dark-fill'}`    
                            : ''
                            }`
                        }
                    >
                        {
                            props.fields.map((field) => (
                                <td>
                                    <Item 
                                        key={`${field.value}${item.id}`}
                                        type={field.type}
                                        data={item[field.value]}
                                        label={field.buttonLabel}
                                    />
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
);

Table.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
            type: PropTypes.string,
            buttonLabel: PropTypes.string,
        })
    ),
    data: PropTypes.array,
    onSort: PropTypes.func,
    isDark: PropTypes.bool,
};

Table.defaultProps = {
    fields: [],
    data: [],
    onSort: () => {},
    isDark: false,
};

export default Table;