/** @jsx jsx */
import { jsx } from '@emotion/core'
import Markdown from 'markdown-to-jsx'
import { Link } from 'gatsby'

import { t, getDomId, getFilePath } from '../common'

const Concept = ({ pageContext: { node: concept } }) => (
  <div className="content block" id={getDomId(concept.id)}>
    <h1>
      {concept.notation && 
      <span>{concept.notation.join(',')}&nbsp;</span>
      }
      {t(concept.prefLabel)}
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
            {t(concept.definition)}
          </Markdown>
      </div>
      )
    }
    {concept.scopeNote 
      && (
        <div className="markdown">
          <h3>Scope Note</h3>
          <Markdown>
            {t(concept.scopeNote)}
            </Markdown>
        </div>
      )
    }
    {concept.note 
      && (
        <div className="markdown">
          <h3>Note</h3>
          <Markdown>
              {t(concept.note)}
            </Markdown>
        </div>
      )
    }
    {concept.related && concept.related.length > 0 && (
      <div>
        <h3>Related</h3>
        <ul>
          {concept.related.map((related) => (
            <li key={related.id}>
              <Link to={getFilePath(related.id, "html")}>
                {t(related.prefLabel)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
    {concept.narrowMatch && concept.narrowMatch.length > 0 && (
      <div>
        <h3>Narrow Match</h3>
        <ul>
          {concept.narrowMatch.map((narrowMatch) => (
            <li key={narrowMatch.id}>
              <a href={narrowMatch.id}>{narrowMatch.id}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
    {concept.broadMatch && concept.broadMatch.length > 0 && (
      <div>
        <h3>Broad Match</h3>
        <ul>
          {concept.broadMatch.map((broadMatch) => (
            <li key={broadMatch.id}>
              <a href={broadMatch.id}>{broadMatch.id}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
    {concept.exactMatch && concept.exactMatch.length > 0 && (
      <div>
        <h3>Exact Match</h3>
        <ul>
          {concept.exactMatch.map((exactMatch) => (
            <li key={exactMatch.id}>
              <a href={exactMatch.id}>{exactMatch.id}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
    {concept.closeMatch && concept.closeMatch.length > 0 && (
      <div>
        <h3>Close Match</h3>
        <ul>
          {concept.closeMatch.map((closeMatch) => (
            <li key={closeMatch.id}>
              <a href={closeMatch.id}>{closeMatch.id}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
    {concept.relatedMatch && concept.relatedMatch.length > 0 && (
      <div>
        <h3>Related Match</h3>
        <ul>
          {concept.relatedMatch.map((relatedMatch) => (
            <li key={relatedMatch.id}>
              <a href={relatedMatch.id}>{relatedMatch.id}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

export default Concept
