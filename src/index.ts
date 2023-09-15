// Copyright (c) Max Klein.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import { IThemeManager } from "@jupyterlab/apputils";

/**
 * A plugin for @telamonian/theme-darcula
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: "@KevinHoarau/theme-darcula:plugin",
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = "@KevinHoarau/theme-darcula/index.css";

    manager.register({
      name: "Darcula (khoarau)",
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
