List of used technologies:

1. Mobile first: The project was designed and developed with a mobile-first approach, prioritizing responsive design for mobile devices.

2. Adaptive layout: The layout was created considering the principles of adaptive web design, ensuring that the website adapts well to different screen sizes.

3. Media queries: Media queries were used to provide adaptiveness and responsiveness to the website, allowing different styles and layouts to be applied based on the device's screen size.

4. SCSS (Sass): All styles were written in SCSS files (with the .scss extension) and imported into the main SCSS file (main.scss). SCSS is a preprocessor scripting language that enhances the functionality of CSS.

5. BEM methodology: The BEM (Block Element Modifier) methodology was followed to define and organize CSS classes on the webpage. It helps create reusable and maintainable CSS code by providing a clear naming convention and structure.


Project Description:

The project utilizes the Gulp task runner along with the following packages:

- gulp-autoprefixer: Automatically adds vendor prefixes to CSS properties for better browser compatibility.
- gulp-clean: Deletes files and folders as part of the build process.
- gulp-clean-css: Minifies and optimizes CSS files.
- gulp-concat: Concatenates multiple files into a single file.
- gulp-cssmin: Minifies CSS files.
- gulp-minify: Minifies JavaScript files.
- gulp-rename: Renames files.
- gulp-sass: Compiles SCSS files into CSS.
- sass: A Dart Sass compiler for Node.js.


To set up the project, you need to have Gulp installed globally. There are two files required:

1. package.json: Contains the project's dependencies and configuration information.
2. gulpfile.js: Contains the Gulp tasks and build process configuration.

    To install Gulp and the necessary packages for the project locally, run the following command:

    npm install

Project Build and Minification:

    The project can be built and all files minified using the following command:

    npm build

This command will compile the project and output the build files into the "dist" folder.

    To see real-time changes while working on the project, use the command:

    npm dev

   This command sets up a series of tasks, including watching for changes (watch) and triggering 
   the build process (build) to recompile the project with the changes applied in real time.


Composition of Project Participants and Tasks:

Olexandr Lynnyk:

Developed the header section of the website, including the top menu with hover effects and the responsive dropdown menu.
Developed the "People Are Talking About Fork" section.


Olexandr Sydorovych:

Developed the "Revolutionary Editor" section.
Developed the "Fork Subscription Pricing" section.
Configured error handling to display errors in the console and on the browser screen, ensuring the build process doesn't terminate in case of errors (e.g., SCSS to CSS compilation error).


Composition of Project Participants and Joint Tasks:

Olexandr Sydorovych and Olexandr Lynnyk:

Created the README.md file.
Created the gulpfile.js file.
