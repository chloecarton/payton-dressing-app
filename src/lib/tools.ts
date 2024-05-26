export function numberToPrice(value: number): string {
    return new Intl.NumberFormat("ff-FR", { style: "currency", currency: "EUR" }).format(
        value,
    )
}