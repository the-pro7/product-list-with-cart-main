
export default function formatCurrency(figure: number): string {
    const formatter = new Intl.NumberFormat("en-US",
        {
            currency: "USD",
            currencySign: "standard",
            maximumFractionDigits: 2,
            style: "currency"

        })


    return formatter.format(figure)

}