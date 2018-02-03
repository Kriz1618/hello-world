//Dependencies
import webpack from 'webpack';
import path from 'path';

//Path
const PATHS = {
    index: path.join(__dirname, 'src/index'),
    build: path.join(__dirname, '/dist'),
    src: path.join(__dirname, 'src') 
};

//Webpack Config
export default {
    devtool: 'cheap-module-eval-source-map', 
    entry: [
        'webpack-hot-middleware/client?reload=true',
        PATHS.index
    ],
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugin: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrosPlugin()
    ],
    module: {
        loaders:  [{
            test: /\.js?$/,
            loaders: ['babel-loader'],
            include: PATHS.src
        },
        {
					test: /(\.css)$/,
					loaders: ['style-loader','ccs-loader']
				},
			{
				test: /\.svg(\?v=\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=image/svg+cml'
			}]
    }
};