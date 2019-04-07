/* ============
 * isMobile mixin
 * ============
 *
 * Is the current device a mobile one
 */

export default {
    methods: {
        isMobile() {
            return window.innerWidth < 780;
        },
    },
};