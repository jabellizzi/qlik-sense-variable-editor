// ========== React ==========
import React, { Component } from 'react';

// ========== RxQ ==========
import { connectSession } from 'rxq/connect';
import { getDocList, openDoc } from 'rxq/Global';
import { 
  createSessionObject
} from 'rxq/Doc';
import { getLayout } from 'rxq/GenericObject'

// ========== RxJS ==========
import { Subject } from 'rxjs/Subject';
import { 
  shareReplay, 
  switchMap,
  withLatestFrom,
  map,
  startWith
} from 'rxjs/operators';

// ========== Resources ==========
import config from './config/jb-dev.server.json'
import './App.css';


/* ============================
    RxQ
============================ */
// Connect to engine
const session$ = connectSession(config).pipe(
  shareReplay(1)
);

// Get Doc List
const docList$ = session$.pipe(
  switchMap(h => getDocList(h))
);

// Doc
const docId$ = new Subject();

const doc$ = docId$.pipe(
  withLatestFrom(session$),
  switchMap(([id, h]) => openDoc(h, id)),
  shareReplay(1)
);

// Variable List
const variables$ = doc$.pipe(
  switchMap(h => createSessionObject(h, {
    qInfo: {
      qId: 'VariableList',
      qType: 'VariableList'
    },
    qVariableListDef: {
      qType: 'variable',
      qData: {
        tags: '/tags'
      },
      qShowConfig: true,
      qShowReserved: false
    }
  })),
  switchMap(h => getLayout(h)),
  map(layout => layout.qVariableList.qItems)
);


/* ============================
    React
============================ */
class App extends Component {
  constructor() {
    super();
    this.state = {
      docs: [],
      variableList: [],
      creatingNewVariable: false
    }
  }

  openDoc(e) {
    const docId = e.target.value;
    docId$.next(docId);
  }

  createVariable() {
    this.setState({ creatingNewVariable: true });
  }

  saveVariable(e) {
    console.log(e);
    this.setState({ creatingNewVariable: false });
  }

  componentDidMount() {
    docList$.subscribe(docs => {
      this.setState({ docs });
    });

    variables$.subscribe(variableList => {
      this.setState({ variableList });
      console.log(this.state);
    });
  }

  render() {
    let docs = this.state.docs;
    let variableList = this.state.variableList;
    let creatingNewVariable = this.state.creatingNewVariable;

    return (
      <div className="App">
        <DocList 
          docs={ docs } 
          openDoc={ this.openDoc.bind(this) } 
        />

        <button onClick={ this.createVariable.bind(this) }>Create Variable</button>

        <VariableTable
          variables={ variableList }
        />

        <div className={ "create-modal " +(this.state.creatingNewVariable ? '' : 'hidden') }></div>

        <NewVariable 
          creatingNewVariable={ creatingNewVariable }
          saveVariable={ this.saveVariable.bind(this) }
        />
      </div>
    );
  }
}


// Doc List
const DocList = (props) => 
  <select id="app-selector" defaultValue="default" onChange={ props.openDoc }>
    <option value="default" disabled hidden>Select An App</option>
  {
    props.docs.map(doc => 
      <option key={ doc.qDocId } value={ doc.qDocId }>{ doc.qDocName }</option>
    ) 
  }</select>


// Variable Table
const VariableTable = (props) => 
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>{
      props.variables.map(variable =>
        <tr key={ variable.qInfo.qId }>
          <td>{ variable.qName }</td>
          <td>{ variable.qDefinition }</td>
        </tr>
      ) 
    }</tbody>
  </table>


// New Variable
const NewVariable = (props) =>
  <div className={ "new-variable " +(props.creatingNewVariable ? '' : 'hidden')}>
    Name<br/>
    <input type="text"/>
    Definition<br/>
    <input type="text"/>

    <button onClick={ props.saveVariable }>Save</button>
  </div>

export default App;
