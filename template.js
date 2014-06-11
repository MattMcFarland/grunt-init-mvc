/*
 * grunt-init-mvc
 *
 * Copyright (c) 2014 Matt McFarland
 * Licensed under the MIT license.
 */
 'use strict';

exports.description = 'Backbone Marionette Bootstrap MVC Scaffolding'

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  init.process({}, [
    init.prompt('name')
    ], function(err, props) {
      var files = init.filesToCopy(props);
      init.copyAndProcess(files, props);
      done();
    });
}
