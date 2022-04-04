const sequence = require('post-sequence');

const plugins = {
    "posthtml-expressions": {
        locals: {
            process: {
                env: process.env
            }
        }
    },
    "posthtml-include": {
        root: './src/html'
    }
}

const ___posthtmlConfig = {
    plugins: sequence(plugins, {processor: 'posthtml', namespace: true})
};

module.exports = ___posthtmlConfig;
