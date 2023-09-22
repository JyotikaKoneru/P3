'use strict';
class TableTemplate {
    static fillIn(tableId, dictionaryData, columnName) {
      const table = document.getElementById(tableId);
      if (!table) {
        console.error(`Table with id '${tableId}' not found.`);
        return;
      }
      const headerRow = table.rows[0];
      const columnIndexMap = {};
      for (let i = 0; i < headerRow.cells.length; i++) {
        let cell = headerRow.cells[i];
        replaceTemplateStrings(cell, dictionaryData)
        columnIndexMap[cell.textContent.trim()] = i;
      }
      table.style.visibility = "visible";
      
    }
  }

