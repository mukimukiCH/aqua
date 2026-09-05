const updateList = document.getElementById('update-list');

if (updateList && Array.isArray(updates)) {
  updates.forEach((update) => {
    const row = document.createElement('li');
    const date = document.createElement('time');
    const text = document.createElement('span');
    date.textContent = update.date;
    text.textContent = update.text;
    row.append(date, text);
    updateList.appendChild(row);
  });
}
