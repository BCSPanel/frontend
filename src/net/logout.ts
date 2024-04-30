const form = document.createElement('form')
form.action = './api-login/logout'
form.method = 'POST' // 避免浏览器地址栏建议访问上述地址
form.style.display = 'none'

/** 跳转到新的地址，使用POST退出登录 */
export default () => document.body.appendChild(form).submit()
