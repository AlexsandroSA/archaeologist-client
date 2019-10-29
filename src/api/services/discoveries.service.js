import api from '../api';
import { envManager } from '../../utils/helpers';
import { GET, DELETE, POST } from '../httpMethods';
import { toApi, fromApi } from '../dto/discoveries.dto';

export const getDiscoveries = async () => {
    const { data } = await api({
        method: GET,
        url: `${envManager.urlApi}/discoveries`,
    });

    const response = fromApi(data);

    return response;
};

export const getDiscoveriesById = async (id) => {
    const { data } = await api({
        method: GET,
        url: `${envManager.urlApi}/discoveries/${id}`,
    });

    return data;
};

export const createDiscovery = async (body) => {
    const { data } = await api({
        method: POST,
        url: `${envManager.urlApi}/discoveries/`,
        data: toApi(body),
    });

    return data;
};


export const deleteDiscovery = async (id) => {
    const { data } = await api({
        method: DELETE,
        url: `${envManager.urlApi}/discoveries/${id}`,
    });

    return data;
};
