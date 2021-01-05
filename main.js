import htm from 'https://cdn.skypack.dev/htm'
import { h, render, useState } from 'https://cdn.skypack.dev/fre'
import { tw } from 'https://cdn.skypack.dev/twind'

const html = htm.bind(h)

const link = tw`text-indigo-700 hover:text-indigo-300 transition-colors`

function App() {
	const [count, setCount] = useState(0)
	return html`
		<div className=${tw`h-screen flex flex-col justify-center items-center`}>
			<div className=${tw`flex justify-center items-center text-7xl`}>
				<button className=${tw`p-4`} onClick=${() => setCount(count - 1)}>-</button>
				<h1 className=${tw`p-4 w-32 text-center`}>${count}</h1>
				<button className=${tw`p-4`} onClick=${() => setCount(count + 1)}>+</button>
			</div>
			<div className=${tw`text-lg text-center`}>
				<h4>No build setup, no node_modules</h4>
				<p>You can use any HTTP server you want. I personally use <a className=${link} href="https://github.com/vercel/serve">serve</a></p>
				<h4>
					Built using <a className=${link} href="https://fre.js.org/">Fre</a>, ${' '}<a
						className=${link}
						href="https://github.com/developit/htm"
						>HTM</a
					>, <a className=${link} href="https://twind.dev/">Twind</a> and ${' '}
					<a className=${link} href="https://skypack.dev">Skypack.dev</a> for ESM packages
				</h4>
			</div>
		</div>
	`
}

render(html`<${App} />`, document.body)
