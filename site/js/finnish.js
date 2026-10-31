// Finnish cardinal numbers, generated (0 – 999 999).

const ONES = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän'];

function under100(n) {
  if (n < 10) return ONES[n];
  if (n === 10) return 'kymmenen';
  if (n < 20) return ONES[n - 10] + 'toista';
  const tens = Math.floor(n / 10), rest = n % 10;
  return ONES[tens] + 'kymmentä' + (rest ? ONES[rest] : '');
}
function under1000(n) {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100), rest = n % 100;
  return (h === 1 ? 'sata' : ONES[h] + 'sataa') + (rest ? under100(rest) : '');
}

// Finnish writes numbers as one word; a space between the thousands and the rest is also common.
export function numberWord(n, { spaced = false } = {}) {
  if (n < 1000) return under1000(n);
  const th = Math.floor(n / 1000), rest = n % 1000;
  const head = th === 1 ? 'tuhat' : under1000(th) + 'tuhatta';
  return rest ? head + (spaced ? ' ' : '') + under1000(rest) : head;
}

export const NUMBER_TABLE = [
  [0, 'nolla'], [1, 'yksi'], [2, 'kaksi'], [3, 'kolme'], [4, 'neljä'], [5, 'viisi'], [6, 'kuusi'], [7, 'seitsemän'], [8, 'kahdeksan'], [9, 'yhdeksän'],
  [10, 'kymmenen'], [11, 'yksitoista'], [12, 'kaksitoista'], [20, 'kaksikymmentä'], [21, 'kaksikymmentäyksi'], [100, 'sata'], [200, 'kaksisataa'], [1000, 'tuhat'], [2000, 'kaksituhatta'],
];
