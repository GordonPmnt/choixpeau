const houses = [
    'Serpentard',
    'Griffondor',
    'Serdaigle',
    'Pouffsoufle',
]

const reducer = (state, action) => {
    if(action.type === 'UPDATE_CHOICE_WITH_MY_INDEX') {
        return {
            houses,
            selectedHouses: houses[action.indexSelected]
        }
    }
    return { houses }
}

export default reducer;