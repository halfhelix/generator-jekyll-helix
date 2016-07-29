'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('projectName', {
      type: String,
      required: true,
      desc: 'Project name'
    });

    this.option('projectDescription', {
      type: String,
      required: true,
      desc: 'Project description'
    });

    this.option('projectURL', {
      type: String,
      required: true,
      desc: 'Project URL'
    });

    this.option('authorTwitter', {
      type: String,
      required: true,
      desc: 'Author Twitter'
    });

    this.option('authorGithub', {
      type: String,
      required: true,
      desc: 'Author Github'
    });

    this.option('jekyllPermalinks', {
      type: String,
      required: true,
      desc: 'Jekyll permalinks'
    });
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    );

    this.fs.copy(
      this.templatePath('build.js'),
      this.destinationPath('gulp/tasks/build.js')
    );

    this.fs.copyTpl(
      this.templatePath('config.yml'),
      this.destinationPath('_config.yml'),
      {
        projectName: this.options.projectName,
        projectDescription: this.options.projectDescription,
        projectURL: this.options.projectURL,
        authorTwitter: this.options.authorTwitter,
        authorGithub: this.options.authorGithub,
        jekyllPermalinks: this.options.jekyllPermalinks
      }
    );

    this.fs.copyTpl(
      this.templatePath('config.build.yml'),
      this.destinationPath('_config.build.yml')
    );

    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('src')
    );
  }
});
