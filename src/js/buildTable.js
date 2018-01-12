import $ from 'jquery';

var tableRow = function(name, def) {
    return '<tr class="table-row"><td>'+name+'</td>'+'<td>'+def+'</td></tr>'
}

export default tableRow;