import session from './openSession';
import $ from 'jquery';
import buildTable from './buildTable';
require("../css/style.css");

const global = session.then(global => {
  return global
})

const app = global.then(global => {
  return global.openDoc('UI_BetsysBikes.qvf') //UI_BetsysBikes Object Audit
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
    var layoutItemsCount = layoutItems.length;
    
    var tableContent = 
    '<table id="table" style="cursor:pointer; width:100%;" class="table">'+
    '<thead>'+
      '<tr style="border:">'+
        '<th class="tableHeader" style="width:50%">' + "Name" + '</th>' +
        '<th class="tableHeader" style="width:50%">' + "Expression" + '</th>' +
      '</tr>' +
    '</thead>' +
    '<tbody>';
    
    $.each(layoutItems, function(index, variable) {
      var name = variable.qName;
      var definition = variable.qDefinition;
      tableContent += buildTable(name, definition);
    })

    tableContent +=  '</tbody></table>';
    
    $('.container-table').append(tableContent);

  })

})
