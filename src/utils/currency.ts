const formatRupiah = (amount: number, withSymbol: boolean = true): string => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  const formatted = formatter.format(amount);

  return withSymbol ? formatted : formatted.replace(/^Rp\s?/, '');
};

export default formatRupiah;
