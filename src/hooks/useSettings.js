const useSettings = (props = {}) => {
    const { isDarkTable = false, setDarkTable = () => {} } = props;

    const changeDarkTable = () => {
        setDarkTable(!isDarkTable);
    };

    return {
        isDarkTable,
        changeDarkTable,
    }
};

export default useSettings;