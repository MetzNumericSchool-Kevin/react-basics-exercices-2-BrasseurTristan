export function PotionShop({ title, children }) {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {children}
            </ul>
        </>
    )
}