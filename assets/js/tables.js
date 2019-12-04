document.addEventListener('DOMContentLoaded', function() {
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

        c.innerHTML =
          `<h5><span>${theadThs[i].innerText}</span></h5>` + cellHtml;
      });
    });
  }

  Array.from(tables).map(t => createResponsiveTable(t));
});
