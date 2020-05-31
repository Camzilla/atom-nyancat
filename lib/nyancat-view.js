'use babel';

import { CompositeDisposable } from 'atom';

export default class AtomNyancatView {

  constructor(statusBar) {
    this.statusBar = statusBar
    this.editor;
    this.mainSubscription = new CompositeDisposable();
    this.subscriptions;

    this.nyanCatSettings = {
      priority: 500,
      maxWidth: 200,
      catHeadSize: 18,
      catAssSize: 9
    }
  }

  serialize() {}

  start() {
    this.drawElement();
    this.initialize();
  }

  drawElement() {

    this.parentElement = document.createElement('div');
    this.parentElement.classList.add('inline-block', 'nyan-cat');

    this.element = document.createElement('div');
    this.element.classList.add('inline-block', 'nyan-cat__container');
    this.element.style.width = this.nyanCatSettings.maxWidth + "px";

    this.catTrail = document.createElement('span');
    this.catTrail.classList.add('nyan-cat__trail');

    this.catHead = document.createElement('span');
    this.catHead.classList.add('nyan-cat__head');

    this.catAss = document.createElement('span');
    this.catAss.classList.add('nyan-cat__ass');

    this.catTrail.appendChild(this.catAss);
    this.element.appendChild(this.catTrail);
    this.element.appendChild(this.catHead);

    this.parentElement.appendChild(this.element);

    this.statusBar.addLeftTile({
      item: this.parentElement,
      priority: this.nyanCatSettings.priority
    });
  }

  initialize() {

    this.editor = atom.workspace.getActiveTextEditor();

    this.mainSubscription.add(atom.workspace.observeActivePaneItem(editor => {

      if(this.subscriptions != null){
        this.subscriptions.clear();
        this.subscriptions = null;
      }

      this.editor = atom.workspace.getActiveTextEditor();
      if(!this.editor) {
        return;
      }

      this.subscriptions = new CompositeDisposable();
      this.subscriptions.add(this.editor.element.onDidChangeScrollTop(top => {
        this.update();
      }));

      this.update();
    }));
  }

  update() {
    let percent = 1;

    this.editor = atom.workspace.getActiveTextEditor();

    if (this.editor != null) {
      let lastVisibleRow = this.editor.getFirstVisibleScreenRow();
      let lastScreenLine = this.editor.getLineCount() - this.editor.rowsPerPage;

      percent = lastVisibleRow/parseFloat(lastScreenLine);
    }

    this.updateScroll(percent);
  }

  updateScroll(progress) {
    // round percentage up
    if ((progress + .000001) > 1) {
      progress = 1;
    }

    let trailSize = ((this.nyanCatSettings.maxWidth - this.nyanCatSettings.catHeadSize) * progress) + this.nyanCatSettings.catAssSize;

    this.catTrail.style.width = Math.min(trailSize, this.nyanCatSettings.maxWidth - this.nyanCatSettings.catHeadSize) + "px";
  }

  destroy() {
    this.mainSubscription.dispose();
    this.subscriptions.dispose();
    this.element.remove();
  }
};
