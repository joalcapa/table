import { ENDPOINTS_COLLECTION } from '../config/constants';
import apiCall from '../middlewares/apiCall';

const getUsers = () => {
    return apiCall(ENDPOINTS_COLLECTION.users.get);
};

export default {
    getUsers,
};