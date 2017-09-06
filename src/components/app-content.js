import React, { Component } from 'react';
import BlockHeader from './block-header.js';
import BlockContents from './block-contents.js'
import '../styles/site.css';
import '../styles/app-content.css';

const leanCanvasItems = [
  { block: 'problems', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { block: 'problems', details: 'Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos' },
  { block: 'problems', details: 'Hunc vos beatum; Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus' },
  { block: 'solution', details: 'Tum Triarius: Posthac quidem, inquit, audacius.'},
  { block: 'solution', details: 'Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat'},
  { block: 'value', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { block: 'value', details: 'Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos' }
  
];

class AppContent extends Component {
  render() {
    return (
      <div className="app-content">
        <div className="lean-canvas">
          <div className="row">
            <div className="column">
              <BlockHeader title="Problem"/>
              <BlockContents block="problems" items={leanCanvasItems} />
            </div>
            <div className="column">
              <BlockHeader title="Solution"/>
              <BlockContents block="solution" items={leanCanvasItems} />
            </div>
            <div className="column">
              <BlockHeader title="Unique Value Propisition"/>
              <BlockContents block="value" items={leanCanvasItems} />
            </div>
            <div className="column">
              <BlockHeader title="Unfair Advantage"/>
            </div>
            <div className="column">
              <BlockHeader title="Customer Segments"/>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <BlockHeader title="Cost Structure"/>
            </div>
            <div className="column">
              <BlockHeader title="Revenue Streams"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContent;