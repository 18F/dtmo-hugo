document.addEventListener('DOMContentLoaded', function (e) {

  const tables = document.getElementsByTagName('table');

  function createResponsiveTable(tableEl) {
    const thead = tableEl.tHead;
    const theadThs = thead.getElementsByTagName('th');
    const tbody = tableEl.tBodies[0];
    const rows = tbody.rows;
    Array.from(rows).map(r => {
      const cells = Array.from(r.cells);
      cells.map((c, i) => {
        const cellHtml = c.innerHTML;
        c.innerHTML = theadThs[i].innerText + cellHtml;
      })
    })
  }

  Array.from(tables).map(t => createResponsiveTable(t));
})
