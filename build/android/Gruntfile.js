module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        apkFileName: 'antenna-survey',
        //"4.0.2","4.1.0","4.1.1","5.0.0" - last cordova android versions
        defCAndroidVersion: '5.0.0',
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '**/{,**/}*.html'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                base: './www',
                cd: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect, options) {
                        var serveStatic = require('serve-static');

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [require("grunt-connect-proxy/lib/utils").proxyRequest];

                        // Serve static files.
                        options.base.forEach(function (base) {
                            middlewares.push(serveStatic(base));
                        });

                        return middlewares;
                    }
                }
            },
            proxies: [{
                context: "/api",
                host: 'chat-dev.exposit-ds.com',
                changeOrigin: true,
                headers: {
                    'host': 'chat-dev.exposit-ds.com'
                },
                rewrite: {
                    '^/api': ''
                }
            }]
        }
    });


    grunt.registerTask('serve', function () {
        grunt.task.run([
            'configureProxies:server',
            'connect:livereload',
            'watch'
        ]);
    });
};
