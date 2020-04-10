use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn markdown_to_html(input: &str) -> String {
    let mut options = comrak::ComrakOptions::default();
    options.ext_table = true;
    options.ext_strikethrough = true;
    options.smart = true;
    options.ext_tasklist = true;
    options.ext_superscript = true;
    options.ext_header_ids = Some("user-content-".to_string());
    options.ext_footnotes = true;
    options.ext_autolink = true;
    options.github_pre_lang = true;
    let translated = comrak::markdown_to_html(input, &options);
    log(&translated);
    translated
}
