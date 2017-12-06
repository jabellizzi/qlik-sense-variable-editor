import session from './openSession';
import $ from 'jquery';
const style = require('../css/style.css')

const global = session.then(global => {
  return global
})

const app = global.then(global => {
  return global.openDoc('UI_BetsysBikes.qvf')
})

app.then(app => {

  var obj = app.createObject({
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
  })
    
  var layout = obj.then(obj => {
    return obj.getLayout()
  })
  
  layout.then(layout => {
    var layoutItems = layout.qVariableList.qItems;

    $.each(layoutItems, function(index, variable) {
      // console.log(variable)
    })

  })

})


    // This is old code from the meeting with John to go through the excersize of creating a generic object on 11/30/2017.
    // var obj = app.createObject({
    //     qInfo: {
    //         qId: '1234',
    //         qType: 'barchart'
    //     },
    //     qHyperCubeDef: {
    //         qDimensions: [{
    //             qDef: {
    //                 qFieldDefs: ['Year']
    //             }
    //         }],
    //         qMeasures: [{  
    //             qDef: {
    //                 qDef: 'Sum([Order Quantity])'
    //             }
    //         }],
    //         qInitialDataFetch: [{
    //             qLeft: 0,
    //             qTop: 0,
    //             qWidth: 2,
    //             qHeight: 10
    //         }]
    //     }
    // })