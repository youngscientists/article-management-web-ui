import Vue from "vue"
import ToastedPlugin from "vue-toasted"
import "material-icons"

Vue.use(ToastedPlugin, {
	position: "bottom-left",
	duration: 5000
})

Vue.toasted.register("error_message", `That didn't work! Please try again.`, {
	singleton: true,
	action: {
		text: "done",
		onClick: (e, t) => {
			t.goAway(0)
		}
	},
	icon: "error"
})

Vue.toasted.register(
	"loading_message",
	payload => {
		// if there is no message passed show default message
		if (!payload.message) {
			return "Loading..."
		}

		// if there is a message show it with the message
		return payload.message
	},
	{
		singleton: true,
		action: {
			text: "cancel",
			onClick: (e, t) => {
				t.goAway(0)
			}
		},
		icon: "sync",
		className: "rotating"
	}
)
