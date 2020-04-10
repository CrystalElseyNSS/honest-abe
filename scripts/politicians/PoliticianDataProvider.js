let politicians = []

export const usePoliticians = () => politicians.slice()

export const getPoliticians = () => fetch("http://localhost:8089/politicians")
    .then(response => response.json())
    .then(parsedPoliticians => politicians = parsedPoliticians)