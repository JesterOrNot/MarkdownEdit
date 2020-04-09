const { markdown_to_html } = wasm_bindgen;
async function run() {
    await wasm_bindgen('./pkg/markdown_edit_bg.wasm');
    let textfield = document.querySelector("#editor");
    renderMarkdown(textfield, markdown_to_html);
}
function renderMarkdown(textfield, markdown_render) {
    textfield.oninput = function() {
        inputContent.innerHTML = markdown_render(this.value);
    }
}
run();
