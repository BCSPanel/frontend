console.log('main.ts')

import "./css/index.scss";
import { submit } from "./submit";

function init() {
    document.lastChild.lang = navigator.language;

    if (self.supportES2023 !== false) self.unsupportedES2023?.remove();

    self.formLogin.onsubmit = submit

    self.root.style.display = ''

    self.inputUserName.focus()
}

document.readyState == "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init()
