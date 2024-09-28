const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for your app
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output bundle file
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Transpile .js or .jsx files using Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Load CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle images
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // File extensions to resolve
    },
    devServer: {
        static: path.join(__dirname, 'public'), // Serve files from the 'public' directory
        compress: true, // Enable Gzip compression
        port: 3000, // Dev server will run on this port
        setupMiddlewares: (middlewares, devServer) => {
            // Custom middleware logic before default middlewares
            console.log("Setting up custom middleware before default middlewares");

            // Add any additional custom middleware here
            // Example: middlewares.push(yourCustomMiddleware);

            // Custom middleware logic after default middlewares
            console.log("Setting up custom middleware after default middlewares");

            // Returning middlewares to apply them
            return middlewares;
        },
    },
};
