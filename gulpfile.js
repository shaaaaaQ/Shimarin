const gulp = require('gulp');
const packager = require('electron-packager');

gulp.task('package', function (done) {
    packager({
        dir: '.',
        out: 'out',
        arch: 'x64',
        platform: 'win32',
        overwrite: true,
        icon: 'icon/icon.ico',
        ignore: '(.gitignore|gulpfile.js|package-lock.json|.eslintrc.js)',
    });
    packager({
        dir: '.',
        out: 'out',
        arch: 'x64',
        platform: 'linux',
        overwrite: true,
        ignore: '(.gitignore|gulpfile.js|package-lock.json|.eslintrc.js)',
    });
    done();
});

gulp.task('package-win', function (done) {
    packager({
        dir: '.',
        out: 'out',
        arch: 'x64',
        platform: 'win32',
        overwrite: true,
        icon: 'icon/icon.ico',
        ignore: '(.gitignore|gulpfile.js|package-lock.json|.eslintrc.js)',
    });
    done();
});

gulp.task('package-linux', function (done) {
    packager({
        dir: '.',
        out: 'out',
        arch: 'x64',
        platform: 'linux',
        overwrite: true,
        ignore: '(.gitignore|gulpfile.js|package-lock.json|.eslintrc.js)',
    });
    done();
});