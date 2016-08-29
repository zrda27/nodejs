#安装express
    1.1 npm install -g express-generator
    1.2 express -e demo
    1.3 cd demo && npm install

#安装插件
    npm install -g gulp --save-dev
    npm install gulp-uglify --save-dev
    npm install gulp-concat --save-dev
    npm install gulp-rename --save-dev
    npm install gulp-minify-css --save-dev
    npm install del --save-dev
    npm install gulp-imagemin  --save-dev
    npm install gulp-less --save-dev
    npm install gulp-util --save-dev
    npm install gulp-sourcemaps gulp-autoprefixer --save-dev
    
    npm install hbs --save
    npm install express-session --save
    npm install mongoose --save

#执行任务
    gulp taskName
   
#其他
    ##启动mongodb
        mongod.exe --dbpath F:\web-server\mongo-data\demo
    ##以服务启动mongodb
        ###安装服务
            mongod.exe --logpath "F:\web-server\mongo-data\mongodb.log" --logappend --dbpath "F:\web-server\mongo-data\demo" --serviceName "mongodb-demo" --serviceDisplayName "mongodb-demo" --install
        ###启动服务
            net start mongodb-demo