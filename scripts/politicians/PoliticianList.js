import { usePoliticians } from "./PoliticianDataProvider.js"
import { Politician } from "./Politician.js"

const contentTarget = document.querySelector(".politicianContainer")

const renderPoliticians = (politiciansToRender) => {

    contentTarget.innerHTML = politiciansToRender.map(
        (politicianObject) => {
            return Politician(politicianObject)
        }
    ).join("")
}

export const PoliticianList = () => {
    const allPoliticians = usePoliticians()
    renderPoliticians(allPoliticians)
}