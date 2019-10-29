import moment from 'moment';

const dateManager = moment;

export function relativeDate(date) {
    if (!date) return '';

    return dateManager(date, "YYYYMMDD").fromNow();
}

export default {
    dateManager,
    relativeDate,
}
