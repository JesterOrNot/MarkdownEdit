FROM jesterornot/gitpod-wasm

USER gitpod

RUN bash -cl "rustup install nightly && rustup default nightly"
