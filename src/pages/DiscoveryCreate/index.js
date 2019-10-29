import React from 'react';

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
        <PublicTemplate showGoBack>
            <Box>
                <Form onSubmit={onSubmit} />
            </Box>
        </PublicTemplate>
    );
};

export default DiscoveryCreate;
