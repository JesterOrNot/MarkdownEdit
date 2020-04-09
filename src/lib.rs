use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn markdown_to_html(input: &str) -> String {
    let translated = mossy::App::exec(String::from(input));
    log(translated.as_str());
    translated
}
