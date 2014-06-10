/*
 * grunt-init-mvc
 *
 * Copyright (c) 2014 Matt McFarland
 * Licensed under the MIT license.
 */
 'use strict';

 exports.description = 'Backbone Marionette Bootstrap MVC Scaffolding'

 exports.template = function(grunt, init, done) {

   init.process({type: 'mvc'}), [
     init.prompt('App Name'),

   ], function(err, props) {
     
     //Files to copy
     var files = init.filesToCopy(props);

     //Copy the files
     init.copyAndProcess(files, props);

   }
 }
