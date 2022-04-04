module.exports = {
    plugins:
        [
            require('posthtml-expressions')({
                locals: {
                    process: {
                        env: 'process.env'
                    }
                }
            }),

            require('posthtml-include')({
                root: './src/html'
            }),

            //require('posthtml-extend')({ root: './src/' }),
        ]
};
