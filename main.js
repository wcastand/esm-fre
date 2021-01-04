import htm from 'https://cdn.skypack.dev/htm'
import { h, render, useState } from 'https://cdn.skypack.dev/fre'

const html = htm.bind(h)

function App() {
	const [count, setCount] = useState(0)
	return html`
		<div>
			<h1>${count}</h1>
			<button onClick="{${() => setCount(count + 1)}}">+</button>
		</div>
	`
}

render(html`<${App} //>`, document.getElementById('root'))
