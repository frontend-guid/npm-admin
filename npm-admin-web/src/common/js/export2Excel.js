/* eslint-disable */
require('script-loader!file-saver');
require('script-loader!Blob');
import XLSX from 'xlsx';

function Workbook () {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab (s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

export function exportJson2Excel (jsonData, defaultTitle) {
  var data = jsonData;
  var wsName = 'SheetJS';

  var wb = new Workbook();
  var ws = XLSX.utils.json_to_sheet(data);
  /* add worksheet to workbook */
  wb.SheetNames.push(wsName);
  wb.Sheets[wsName] = ws;
  var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: false, type: 'binary'});
  var title = defaultTitle || 'excel-list';
  saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), title + '.xlsx');
}
