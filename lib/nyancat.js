'use babel';

import AtomNyancatView from './nyancat-view';

export default {

  activate(state) {},

  deactivate() {
    if (this.atomNyancatView) {
      this.atomNyancatView.destroy();
    }
  },

  consumeStatusBar(statusBar) {
    this.atomNyancatView = new AtomNyancatView(statusBar);
    this.atomNyancatView.start();
  }
};
