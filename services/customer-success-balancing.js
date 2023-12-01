/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */

function customerSuccessBalancing(
  customerSuccess,
  customers,
  customerSuccessAway
) {
  if (!customerSuccess || customerSuccess.length === 0) {
    return 0;
  }

  if (!customers || customers.length === 0) {
    return 0;
  }

  if (customerSuccessAway.length > Math.floor(customerSuccess.length / 2)) {
    throw new Error("Maximum number of absent CSs exceeded");
  }

  const avaliableCustomers = getAvaliablesCustomers(customers);
  const availableCss = getAvaliablesCss(customerSuccess, customerSuccessAway);
  const listCSsCustomers = listTopCss(availableCss, avaliableCustomers);
  return getCsWin(listCSsCustomers);
}

const getCsWin = ([first, second]) => {
  if (!!first && first.qtCustomers > second?.qtCustomers) {
    return first.id;
  }

  return 0;
};

const getAvaliablesCss = (originsCss, awaysCss) => {
  const maxQtCss = 1000;
  const maxNivelCss = 10000;
  return originsCss
    ?.filter((css) => !awaysCss.includes(css.id))
    .filter(
      (css) => css.score > 0 && css.id < maxQtCss && css.score < maxNivelCss
    )
    .sort((a, b) => a.score - b.score);
};

const getAvaliablesCustomers = (originsCustomers) => {
  const maxQtCustomers = 1000000;
  const maxNivelCustomers = 100000;
  return originsCustomers?.filter(
    (customer) =>
      customer.score > 0 &&
      customer.score < maxNivelCustomers &&
      customer.id > 0 &&
      customer.id < maxQtCustomers
  );
};

const listTopCss = (css, customers) => {
  let lastScore = 0;
  return css
    .map((cs) => {
      let list = customers.filter(
        (customer) => cs.score >= customer.score && customer.score > lastScore
      );

      lastScore = cs.score;
      return { ...cs, qtCustomers: list.length };
    })
    .sort((a, b) => b.qtCustomers - a.qtCustomers);
};

module.exports = { customerSuccessBalancing };
