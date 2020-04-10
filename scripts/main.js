import { getPoliticians } from "./politicians/PoliticianDataProvider.js"
import { PoliticianList } from "./politicians/PoliticianList.js"

getPoliticians()
    .then(PoliticianList)