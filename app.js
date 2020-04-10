const { markdown_to_html } = wasm_bindgen;
async function run() {
  await wasm_bindgen("./pkg/markdown_edit_bg.wasm");
  let textfield = document.querySelector("#editor");
  renderMarkdown(textfield, markdown_to_html);
}
function renderMarkdown(textfield, markdown_render) {
  textfield.oninput = function() {
    inputContent.innerHTML = markdown_render(this.value);
  };
}
run();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(_ => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
