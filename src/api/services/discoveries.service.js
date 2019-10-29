import api from '../api';
import { GET, DELETE, POST } from '../httpMethods';
import { toApi, fromApi } from '../dto/discoveries.dto';

export const getDiscoveries = async () => {
    const { data } = await api({
        method: GET,
        url: 'http://localhost:3000/api/discoveries',
    });

    const response = fromApi(data);

    return response;
};

export const getDiscoveriesById = async (id) => {
    const { data } = await api({
        method: GET,
        url: `http://localhost:3000/api/discoveries/${id}`,
    });

    return data;
};

export const createDiscovery = async (body) => {
    const { data } = await api({
        method: POST,
        url: `http://localhost:3000/api/discoveries/`,
        data: toApi(body),
    });

    return data;
};


export const deleteDiscovery = async (id) => {
    const { data } = await api({
        method: DELETE,
        url: `http://localhost:3000/api/discoveries/${id}`,
    });

    return data;
};
