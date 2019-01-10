const css = `.spinner {
	-webkit-animation: rotator 1.4s linear infinite;
	animation: rotator 1.4s linear infinite;
}

@-webkit-keyframes rotator {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}

	100% {
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
	}
}

@keyframes rotator {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}

	100% {
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
	}
}

.path {
	stroke-dasharray: 187;
	stroke-dashoffset: 0;
	-webkit-transform-origin: center;
	transform-origin: center;
	-webkit-animation: dash 1.4s ease-in-out infinite,
		colors 5.6s ease-in-out infinite;
	animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}

@-webkit-keyframes colors {
	0%,
	100% {
		stroke: #4285f4;
	}

	25% {
		stroke: #de3e35;
	}

	50% {
		stroke: #f7c223;
	}

	75% {
		stroke: #1b9a59;
	}
}

@keyframes colors {
	0%,
	100% {
		stroke: #4285f4;
	}

	25% {
		stroke: #de3e35;
	}

	50% {
		stroke: #f7c223;
	}

	75% {
		stroke: #1b9a59;
	}
}

@-webkit-keyframes dash {
	0% {
		stroke-dashoffset: 187;
	}

	50% {
		stroke-dashoffset: 46.75;
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
	}

	100% {
		stroke-dashoffset: 187;
		-webkit-transform: rotate(450deg);
		transform: rotate(450deg);
	}
}

@keyframes dash {
	0% {
		stroke-dashoffset: 187;
	}

	50% {
		stroke-dashoffset: 46.75;
		-webkit-transform: rotate(135deg);
		transform: rotate(135deg);
	}

	100% {
		stroke-dashoffset: 187;
		-webkit-transform: rotate(450deg);
		transform: rotate(450deg);
	}
}
`

const html = css => `<svg style="${css}" class="spinner" width="30px" height="30px" viewBox="0 0 66 66">
    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
  </svg>`

export const spinner = () => html(css)

export default spinner
