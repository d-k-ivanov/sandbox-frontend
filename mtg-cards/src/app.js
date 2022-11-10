import { createSignal, onCleanup } from "https://cdn.skypack.dev/solid-js";
import { render } from "https://cdn.skypack.dev/solid-js/web";
import html from "https://cdn.skypack.dev/solid-js/html";

const App = () =>
{
    const [count, setCount] = createSignal(0),
        timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));
    return html`<div class="info"><h2><em>${count}</em></h2></div>`;
    // or
    // return h("div", {}, count);
};
render(App, document.body);
