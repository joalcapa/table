import { useEffect } from 'react';
import { isReloadResource } from '../utils';

const useUsersFetch = (props = {}) => {
    const { getUsers = () => {}, expiryTime = null } = props;

    useEffect(() => {
        let isFetch = true;

        if (isFetch) {
            let isReload = !expiryTime;

            if (expiryTime) {
                isReload = isReloadResource(expiryTime);
            }

            if (isReload) {
                getUsers();
                isFetch = false;
            }
        }

        return () => {
            isFetch = false;
        }
    }, []);

    return { }
};

export default useUsersFetch;