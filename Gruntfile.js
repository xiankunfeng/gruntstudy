/**
 * Created by xkfeng on 2016/10/24.
 */
module.exports= function (grunt) {
    grunt.initConfig({
        clean:{
            clean:{
                files:[{
                    src:['./src/app/html/assets/']
                }]
            }
        },
        copy:{
            htmlCopy:{
                files:[{
                    expand:true,
                    cwd:"./src/app/html/",
                    src:'*.html',
                    dest:'./dist/app/html/'
                }]
            },
            imagesCopy:{
                files:[{
                    expand:true,
                    cwd:'./src/app/assets/images/',
                    src:'*.*',
                    dest:'./dist/app/assets/images/'

                }]
            }
        },

        rev:{
            options:{
                algorithm:'md5',
                length:8
            },
            assets:{
                files:[{
                    src:["./dist/app/assets/**/*.*"]
                }]
            }

        },

        filerev:{
            cssfilerev:{
                expand:true,
                cwd:'./src/app/assets/css/',
                src:"*.css",
                dest:'./src/app/html/assets/css/',
                ext:'.min.css',
                extDot:'first'
            },
            jsfilerev:{
                expand:true,
                cwd:'./src/app/assets/js/',
                src:"*.js",
                dest:'./src/app/html/assets/js/',
                ext:".min.js",
                extDot:'first'
            },
            imgfilerev:{
                expand:true,
                cwd:'./src/app/assets/images/',
                src:"*.jpg",
                dest:'./src/app/html/assets/images/',
                ext:".min.js",
                extDot:'first',
                nonull:true
            }
        },
        useminPrepare:{
            html:"./dist/app/html/index.html",
            options:{
                dest:"./dist",
                staging:'.temp',
                root:"/"
            }
        },
        usemin:{
            html: './src/app/html/index.html',
            options: {
                assetsDirs: ['./src/app/html/assets']
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-rev");
    grunt.loadNpmTasks("grunt-filerev");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.registerTask('default',["clean","filerev","usemin"]);
}