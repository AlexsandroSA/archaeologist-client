import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import webRouter from '../../router';
import { dateManager } from '../../utils/helpers';
import { CardBase, Header, Content, Title, Time, Actions, Description } from './styles';

const Card = ({ id, title, description, date, comments, onClickDelete }) => (
    <CardBase>
        <Header>
            <Title>{title}</Title>
            <Time dateTime={date}>
                {dateManager.relativeDate(date)}
            </Time>
        </Header>
        <Content>
            <Description>{description}</Description>
        </Content>
        <Actions>
            {/* <div>{comments ? }</div> */}
            <div>
                <Link to={`${webRouter.DISCOVERY_DETAILS}/${id}`}>View</Link>
                <Link to={`${webRouter.DISCOVERY_EDIT}/${id}`}>Edit</Link>
            </div>
        </Actions>
        <button onClick={onClickDelete}>X</button>
    </CardBase>
);

export default Card;
