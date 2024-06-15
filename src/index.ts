import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {IEditorLanguageRegistry} from '@jupyterlab/codemirror';
import loadKestrel from './kestrel';

/**
 * Initialization data for the kestrel-ext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'kestrel-ext:plugin',
  description: 'Kestrel syntax highlighting extension for JupyterLab',
  autoStart: true,
  requires: [IEditorLanguageRegistry],
  activate: (app: JupyterFrontEnd, languages: IEditorLanguageRegistry) => {
    console.log('JupyterLab extension kestrel-ext is activated!');

    languages.addLanguage({
      alias: ['kestrel'],
      displayName: 'Kestrel',
      extensions: ['hf'],
      load: loadKestrel,
      name: 'Kestrel',
      mime: 'text/x-kestrel'
    })

    console.log('Registered Languages: ', languages.getLanguages());

  }
};

export default plugin;
