import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getDiscoveries, deleteDiscovery } from '../../api/services/discoveries.service';

import webRouter from '../../router';
import PublicTemplate from '../../templates/default';
import { Card } from '../../components';
import { Wrapper, LinkRegister } from './styles';

const DiscoveryPage = ({ history }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function init() {
            const reponse = await fetchDiscoveries();
            setData(reponse);
        }

        init();
    }, []);

    async function fetchDiscoveries() {
        const response = await getDiscoveries();
        return response;
    }

    async function onClickDeleteItem(id) {
        const confirm = window.confirm('Are you sure?');
        if (!confirm) return;

        const response = await deleteDiscovery(id);

        if (!response) return;

        const newData = data.filter(item => item.id !== id);
        setData(newData);
    }

    return (
        <PublicTemplate>
            <Wrapper>
                <LinkRegister to={webRouter.DISCOVERY_CREATE}>
                    Add new discovery
                </LinkRegister>

                {data.map(item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        title={item.title}
                        description={item.description}
                        comments={item.comments}
                        onClickDelete={() => onClickDeleteItem(item.id)}
                    />
                ))}
            </Wrapper>
        </PublicTemplate>
    );
};

DiscoveryPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

export default DiscoveryPage;
