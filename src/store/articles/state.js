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
		editors: [],
		authors: []
	},
	fetching: false,
	loadingToast: null,
	isUpdating: false,
	query: "",

}