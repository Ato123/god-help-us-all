import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the god-help-us-all-ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'god-help-us-all-ext:plugin',
  description: 'A JupyterLab extension. God help us all.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension god-help-us-all-ext is activated!');
  }
};

export default plugin;
