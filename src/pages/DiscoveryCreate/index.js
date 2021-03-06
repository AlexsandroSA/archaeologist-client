import React from 'react';
import PropTypes from 'prop-types';

import webRouter from '../../router';
import { createDiscovery } from '../../api/services/discoveries.service';
import PublicTemplate from '../../templates/default';

import { Form } from '../../modules';
import { Box } from '../../components';

const DiscoveryCreate = ({ history }) => {

    async function onSubmit(values) {
        await createDiscovery(values);

        history.push(webRouter.DISCOVERY);
    }

    return (
        <PublicTemplate>
            <Box>
                <Form onSubmit={onSubmit} />
            </Box>
        </PublicTemplate>
    );
};

DiscoveryCreate.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};


export default DiscoveryCreate;
