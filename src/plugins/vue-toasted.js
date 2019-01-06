import Vue from "vue"
import ToastedPlugin from "vue-toasted"

Vue.use(ToastedPlugin, {
	position: "bottom-left",
	duration: 5000,
	iconPack: "fontawesome"
})

Vue.toasted.register("error_message", `That didn't work! Please try again.`, {
	singleton: true,
	action: {
		text: "done",
		onClick: (e, t) => {
			t.goAway(0)
		}
	}
})
