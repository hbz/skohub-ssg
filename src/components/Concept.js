/** @jsx jsx */
import { jsx } from '@emotion/core'
import Markdown from 'markdown-to-jsx'

import { i18n, getDomId } from '../common'

const Concept = ({ pageContext: { node: concept, language } }) => (
  <div className="content block" id={getDomId(concept.id)}>
    <h1>
      {concept.notation &&
        <span>{concept.notation.join(',')}&nbsp;</span>
      }
      {i18n(language)(concept.prefLabel)}
    </h1>
    <h2>{concept.id}</h2>
    <p>
      <a href={concept.inbox}>Inbox</a>
    </p>
    {concept.definition
      && (
        <div className="markdown">
          <h3>Definition</h3>
          <Markdown>
            {i18n(language)(concept.definition)}
          </Markdown>
        </div>
      )
    }
    {concept.scopeNote
      && (
        <div className="markdown">
          <h3>Scope Note</h3>
          <Markdown>
            {i18n(language)(concept.scopeNote)}
          </Markdown>
        </div>
      )
    }
    {concept.note
      && (
        <div className="markdown">
          <h3>Note</h3>
          <Markdown>
            {i18n(language)(concept.note)}
          </Markdown>
        </div>
      )
    }
  </div>
)

export default Concept
