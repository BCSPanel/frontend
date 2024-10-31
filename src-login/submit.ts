function disable(b: boolean) {
    self.submit.disabled = b
}

let isFirstSetStatus = true

function status(s: string) {
    isFirstSetStatus = false
    if (s.startsWith('@')) {
        self.pStatus.innerText = ''
        self.pStatus.className = s.slice(1)
    } else {
        self.pStatus.className = ''
        self.pStatus.innerText = s
    }
}

export async function submit(e: SubmitEvent) {
    console.log('submit');
    e.preventDefault()

    disable(true)
    if (!isFirstSetStatus) status('@wait-a-moment')

    try {
        const resp = await fetch("api/login/login", {
            method: "POST",
            headers: {
                "Accept": "text/plain",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // boolean 安全上下文
                secure: isSecureContext,
                // string 用户名
                username: self.inputUserName.value,
                // string 密码
                password: self.inputPassword.value,
            }),
        });

        if (resp.ok) {
            return location.reload()
        }
        disable(false)
        if (resp.status == 401) {
            const text = (await resp.text()).trim();
            if (text) return status(text)
        }
        status(resp.status + ' ' + resp.statusText)
    } catch (e) {
        console.error(e);
        if ((e as DOMException | void)?.name != 'AbortError')
            status(String(e))
        disable(false)
    }
}