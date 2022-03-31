'use strict';

import gulp     from 'gulp';
import plugins  from 'gulp-load-plugins';
import fs       from 'fs';
import panini   from 'panini';

// Load all Gulp plugins into one variable
const $ = plugins();

// Load settings from settings.yml
// const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();
const config = loadConfig();



/* ==================================================================================================================
 *  # Functions
 * ================================================================================================================== */

/* ------------------------------
 *  ## Helper Functions
 * ------------------------------ */

/**
 * Load the JSON Config
 */
function loadConfig() {
    // let ymlFile = fs.readFileSync('config.yml', 'utf8');
    // return yaml.load(ymlFile);

    let configFile = fs.readFileSync('config.json', 'utf-8');
    return JSON.parse(configFile);
}


/* ------------------------------
 *  ## Build Functions
 * ------------------------------ */


/* ------------------------------
 *  ## Image Scaler Functions
 * ------------------------------ */


/* ------------------------------
 *  ## JavaScript Functions
 * ------------------------------ */


/* ------------------------------
 *  ## Panini Pages Functions
 * ------------------------------ */

/**
 * Copy page templates into finished HTML files
 * @returns {*}
 */
function paniniGeneratePages() {
    return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            data: 'src/data/',
            helpers: 'src/helpers/'
        }))
        .pipe(gulp.dest(config.paths.build.path));
}

/**
 * paniniResetPages
 * @param done
 * Load updated HTML templates and partials into Panini
 */
function paniniResetPages(done) {
    panini.refresh();
    done();
}

/**
 * Watch for changes to static assets, pages, Sass, and JavaScript
 * @param done
 */
function paniniWatch(done) {
//    gulp.watch(config.paths.src.assets, copyAssets);
    gulp.watch('src/pages/**/*.html').on('change', gulp.series(paniniGeneratePages));
    gulp.watch('src/{layouts,partials}/**/{*.html,*.hbs}').on('change', gulp.series(paniniResetPages, paniniGeneratePages));
//    gulp.watch('src/assets/scss/**/*.scss', generateSASS);
//    gulp.watch('src/assets/js/**/*.js').on('change', gulp.series(generateJS, copyInitJs, browser.reload));
//    gulp.watch('src/assets/img/**/*').on('change', gulp.series(copyImages, browser.reload));
//    gulp.watch('src/styleguide/**').on('change', gulp.series(generateStyleGuide, browser.reload));
    done();
}


/* ------------------------------
 *  ## SASS Functions
 * ------------------------------ */


/* ------------------------------
 *  ## Sprite Functions
 * ------------------------------ */


/* ------------------------------
 *  ## Styleguide Functions
 * ------------------------------ */


/* ------------------------------
 *  ## SVG Sprite Functions
 * ------------------------------ */



/* ==================================================================================================================
 *  # Tasks
 * ================================================================================================================== */


/**
 * Task: panini-generate-pages
 * runs: paniniGeneratePages function
 */
gulp.task('panini-generate-pages', paniniGeneratePages );

/**
 * Task: panini-watch
 * runs: paniniWatch function
 */
gulp.task('panini-watch', paniniWatch );

/**
 * Task: default
 * runs: built task task
 */
gulp.task('default',
     gulp.series(
         'panini-generate-pages'
//         ,
//         'panini-watch'
     )
);
