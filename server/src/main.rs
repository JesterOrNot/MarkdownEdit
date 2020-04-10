#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use]
extern crate rocket;
use rocket::response::NamedFile;
use std::io::Result;
use std::path::{Path, PathBuf};

#[get("/")]
fn index() -> Result<NamedFile> {
    NamedFile::open("www/index.html")
}

#[get("/favicon.ico")]
fn favicon() -> Option<NamedFile> {
    NamedFile::open("www/favicon.ico").ok()
}

#[get("/images/<image..>")]
fn images(image: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("images/").join(image)).ok()
}

#[get("/www/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("www/").join(file)).ok()
}

#[get("/pkg/<file..>")]
fn pkgs(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("pkg/").join(file)).ok()
}

#[get("/manifest.json")]
fn manifest() -> Option<NamedFile> {
    NamedFile::open(Path::new("manifest.json")).ok()
}

#[get("/serviceWorker.js")]
fn service_worker() -> Option<NamedFile> {
    NamedFile::open(Path::new("serviceWorker.js")).ok()
}

fn main() {
    rocket::ignite()
        .mount(
            "/",
            routes![index, favicon, images, files, pkgs, manifest, service_worker],
        )
        .launch();
}
