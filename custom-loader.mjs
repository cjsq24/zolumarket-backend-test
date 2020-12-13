import path from 'path';

const ESM_WITH_JS_EXT = './src/index.js'; // relative to loader path
const ESM_WITH_JS_EXT_URL = new URL(path.dirname(import.meta.url) + `/${ESM_WITH_JS_EXT}`).href;
console.log('---------------------')
console.log(ESM_WITH_JS_EXT_URL)
console.log('---------------------')

export function resolve(specifier, parentModuleURL, defaultResolver) {
    const resolvedModule = defaultResolver(specifier, parentModuleURL);

    if (resolvedModule.url === ESM_WITH_JS_EXT_URL)
        resolvedModule.format = 'esm';

    return resolvedModule;
}