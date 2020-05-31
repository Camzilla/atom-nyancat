## atom-nyancat
![https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif](https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif)

Because every serious text editor needs a Nyan Cat plugin to prove its worth.

I love atom and of course needed a working Nyan Cat scroll indicator. Refactored the broken package, it works with atom version `1.47.0` and should be fine until breaking changes are introduced.

Forked from original [creator](https://github.com/dz/atom-nyancat) who was inspired by [Emacs Nyan Cat mode](https://github.com/TeMPOraL/nyan-mode).

### Usage

Install plugin. Use.  Visit: [https://atom.io/packages/nyancat](https://atom.io/packages/nyancat)
___

**Refactor TODOS:**
* Animate cat when scrolling (and also when static?)
* Add toggle option to not animate
* Let Nyan Cat take upp all remaining space of left statusBar (without breaking other packages)
* Refactor logic to use height of editor instead of rows. When the user has the `Scroll Past End` option selected, Nyan feels buggy.
* Convert to `typescript`
* Update/refactor jasmin tests so they are runnable

_Feel free to make a PR to keep Nyan Cat alive :)_

_I'll try to keep it alive as long as I use Atom._

#### Useful links:
* https://atom.io/docs
___

### Screenshot demo

![https://imgur.com/JbD8Yd3](https://imgur.com/JbD8Yd3.gif)
