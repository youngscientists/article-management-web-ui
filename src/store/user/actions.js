/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import * as types from './mutation-types';

export const find = ({
    commit
}) => {
    new Proxy()
        .find()
        .then((response) => {
            commit(types.FIND, response);

        })
        .catch(() => {
            console.log('Request failed...');

        });
};

export default {
    find,
};