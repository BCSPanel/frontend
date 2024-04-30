import { createI18n } from 'vue-i18n'

import en from './langs/en.json'
import zhCn from './langs/zh-CN.json'

const i18n = {
    fallbackLocale: 'en',
    locale: '',
    messages: {
        'en': en,
        'zh-CN': zhCn,
    }
}

const anotherName = {
    'en-US': 'en',
    'en-GB': 'en',
    'zh-Hans-CN': 'zh-CN',
}

export const i18nMsgKeys = Object.keys(i18n.messages)

const storageCacheName = "BCSPanelI18nLangName";

/** 函数用于切换语言 */
export function changeLang(
    langName?: string | undefined | null,
    ignoreUpdate: boolean = false
) {
    // console.log(`changeLang ${langName}`);
    // 如果没输入语言名称，那就读缓存
    if (typeof langName !== "string") {
        langName = localStorage.getItem(storageCacheName);
    }
    // 如果语言名称存在且不是“默认”
    if (langName && langName !== "default") {
        // 如果找到了那么选中对应名称，否则选中en
        i18n.locale = Object.keys(i18n.messages).includes(langName) ? langName : "en";
        // 写入缓存
        localStorage.setItem(storageCacheName, i18n.locale);
        return;
    }
    // 移除缓存
    localStorage.removeItem(storageCacheName);
    // 从浏览器语言列表里查找支持的语言
    for (let i of navigator.languages) {
        if (Object.hasOwn(anotherName, i)) {
            //@ts-ignore
            i = anotherName[i]
        }
        if (Object.hasOwn(i18n.messages, i)) {
            // 找到了，选中
            i18n.locale = i;
            return;
        }
    }
    // 找不到，默认
    i18n.locale = i18n.fallbackLocale;
}

changeLang()

export const i18nVue = createI18n(i18n)
