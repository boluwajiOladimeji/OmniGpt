const solutionsEl = document.querySelector('.solutions');
const allSolutions = document.querySelectorAll('.feature');

solutionsEl.addEventListener('click', (e) => {
  const selected = e.target.closest('.feature');
  if (!selected) return;
  if (selected.classList.contains('open')) {
    selected.classList.remove('open');
    return;
  }
  for (let solution of allSolutions) {
    solution.classList.remove('open');
  }
  selected.classList.add('open');
});
