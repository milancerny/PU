'use strict';

//var mountFolder = function (connect, dir) {
// return connect.static(require('path').resolve(dir));
//};

module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        myConfig: {
            app: 'app',
            app_build: 'app_build'
        },
        //clean: {
        //    build: {
        //        src: [
        //            '<%= myConfig.app %>/**/*.js', 
        //            '<%= myConfig.app %>/**/*.js.map', 
        //            '!<%= myConfig.app %>/components/**/*', 
        //            '<%= myConfig.app_build %>/**/*'
        //            ]
        //    }
        //},
        connect: {
            http: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    keepalive: true,
                }
            }/*,
            http_build: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    base: 'build_app',
                    keepalive: true
                }
            }*/
        }
    }); // initConfig()


    grunt.registerTask('server', [
        'connect:http',
    ]);

    //grunt.registerTask('server_build', [
    //    'connect:http_build'
    //]);

    //grunt.registerTask('build', [
    //    'clean'
    //]);

    grunt.registerTask('default', ['build']);

};
