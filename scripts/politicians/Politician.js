export const Politician = (politician) => {
    return `
        <section class="politician">
            <h3>Politician Name: ${politician.name.first} ${politician.name.last}</h3>
            <p>District: ${politician.district}</p>
        </section>
    `
}