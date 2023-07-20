import PropTypes from 'prop-types';

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
                props.data.map((item) => (
                    <tr key={item.id}>
                        <td>
                            {
                                props.fields.map((field) => (
                                    <Item 
                                        key={`${field.value}${item.id}`}
                                        type={field.type}
                                        data={item[field.value]}
                                        label={field.buttonLabel}
                                    />
                                ))
                            }
                        </td>
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
};

Table.defaultProps = {
    fields: [],
    data: [],
    onSort: () => {},
};

export default Table;