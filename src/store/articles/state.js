/* ============
 * State of the Articles
 * ============
 *
 * The initial state of the account module.
 */

export default {
	articles: [],
	filteredArticles: [],
	states: [],
	activeArticle: {
		editor: {

		},
		author: {

		}
	},
	fetching: false,
	loadingToast: null,
	isUpdating: false
}