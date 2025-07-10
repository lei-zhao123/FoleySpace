function populateSelects() {
  const selects = document.querySelectorAll("select");
  selects.forEach(select => {
    select.innerHTML = '<option value="">请选择</option>';
    for (let i = 1; i <= 5; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
  });
}
