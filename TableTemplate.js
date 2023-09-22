'use strict';
class TableTemplate {
    static fillIn(tableId, dictionaryData, columnName) {
      const table = document.getElementById(tableId);
      if (!table) {
        console.error(`Table with id '${tableId}' not found.`);
        return;
      }
      const replaceTemplateStrings = (cell, dictionaryData) => {
        const cellText = cell.textContent.trim();
        const templateInstance = new TemplateProcessor(cellText);
        const templateString = templateInstance.fillIn(dictionaryData);
        cell.textContent = templateString;
      }
      const headerRow = table.rows[0];
      const columnIndexMap = {};
      for (let i = 0; i < headerRow.cells.length; i++) {
        let cell = headerRow.cells[i];
        replaceTemplateStrings(cell, dictionaryData)
        columnIndexMap[cell.textContent.trim()] = i;
      }
      for (let rowIdx = 1; rowIdx < table.rows.length; rowIdx++) { 
	const row = table.rows[rowIdx]; 
	if (columnName) {
	  let cell = row.cells[columnIndexMap[columnName]]; 
	  if(cell) { 	
	    replaceTemplateStrings(cell, dictionaryData)
	  } 
	} 
	else { 
	  // Processing all cells in the row 
	  for (let cellIdx = 0; cellIdx < row.cells.length; cellIdx++) {
	    let cell = row.cells[cellIdx];
	    replaceTemplateStrings(cell, dictionaryData);
	  } 
	} 
      }
      table.style.visibility = "visible";
    }
  }

