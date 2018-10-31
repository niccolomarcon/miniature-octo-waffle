function concatenateStrings(a, b) {
  if (a == null)
    return b;
  if (b == null)
    return a;
  return a + b;
}

module.exports = {conc: concatenateStrings}
