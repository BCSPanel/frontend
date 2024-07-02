const form = document.createElement('form')
form.action = './api/login/logout'
form.style.display = 'none'

/** 避免浏览器地址栏建议访问退出登录 */
export default () => document.body.appendChild(form).submit()
