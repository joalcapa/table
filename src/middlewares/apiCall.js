import axios from 'axios';

const apiCall = async (config = {}) => {
    try {
        const response = await axios(config);
        return Promise.resolve(response.data);
    } catch (error) {
        throw error;
    }
};

export default apiCall;