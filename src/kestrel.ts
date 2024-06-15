import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {completeFromList} from "@codemirror/autocomplete";
import {styleTags, tags as t} from "@lezer/highlight";
import {parser} from './parser.js';

// Kestrel language support loader

async function loadKestrel(): Promise<LanguageSupport> {

  let parserWithMetadata = parser.configure({
    props: [
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        LineComment: t.lineComment,
        "( )": t.paren
      }),
      indentNodeProp.add({
        Application: context => context.column(context.node.from) + context.unit
      }),
      foldNodeProp.add({
        Application: foldInside
      })
    ]
  });

  const kestrelLanguage = LRLanguage.define({
    parser: parserWithMetadata,
    languageData: {
      commentTokens: {line: "#"}
    }
  });

  const autoCompletion = kestrelLanguage.data.of({
    autocomplete: completeFromList([
      {label: 'exampleword', type: 'keyword'},
      {label: 'examplefunction', type: 'function'}
    ])
  })

  return new LanguageSupport(kestrelLanguage, [autoCompletion]);

}

export default loadKestrel;