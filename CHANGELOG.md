## 1.0.5
> 2016-08-31

More squashing of bugs! Fixed a few minor bugs with this release:

- Now `Rouge` is actually used to highlight code instead of nothing at all
- Removed redundant header tags that the Jekyll SEO plugin was providing anyways
- Fixed `jekyll:update` not actually updating all the gulp tasks
- And fixed a bug with uploading to GitHub Pages where using the `master` branch
  would fail.

* [[`3de11c5c16`](https://github.com/sondr3/generator-jekyllized/commit/3de11c5c16)] - Update README to match new uploading syntax
* [[`72afc87f79`](https://github.com/sondr3/generator-jekyllized/commit/72afc87f79)] - Update generator-statisk
* [[`f250210d7c`](https://github.com/sondr3/generator-jekyllized/commit/f250210d7c)] - Add a few Jekyll gems
* [[`b78ad378c9`](https://github.com/sondr3/generator-jekyllized/commit/b78ad378c9)] - Create a new subgenerator to fix update command
* [[`c02cc5db44`](https://github.com/sondr3/generator-jekyllized/commit/c02cc5db44)] - Update README
* [[`e42fac2630`](https://github.com/sondr3/generator-jekyllized/commit/e42fac2630)] - Actually use the Jekyll SEO plugin
* [[`8771192677`](https://github.com/sondr3/generator-jekyllized/commit/8771192677)] - Actually use Rouge to highlight code
