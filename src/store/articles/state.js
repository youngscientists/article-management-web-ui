/* ============
 * State of the Articles
 * ============
 *
 * The initial state of the account module.
 */

export default {
	articles: null,
	filteredArticles: [],
	states: [
		"All",
		"Published",
		"Ready to Publish",
		"Final Review",
		"In Review",
		"Passed Data Check",
		"Failed Data Check",
		"Technical Review",
		"Revisions Requested",
		"Submitted",
		"Rejected"
	],
	activeArticle: {
		editor: {

		},
		author: {

		}
	},
	fetching: false,
	fetchingArticle: false,
	loadingToast: null,
	isUpdating: false,
	query: ""
}