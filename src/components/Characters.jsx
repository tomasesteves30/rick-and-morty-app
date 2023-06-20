import { useEffect, useState } from "react"
import { CharacterCard } from "./CharacterCard"


import styles from './Characters.module.css'
import { Search } from './Search'


export function Characters() {


    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")


    useEffect(() => {
        setLoading(true)
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                setLoading(false)
            }).catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(search))


    function getSearchValue(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    if (loading) {
        return <div>Loading....</div>
    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
                <Search
                    total={filteredCharacters.length}
                    search={getSearchValue}
                />
                <div className={styles.container}>
                    {filteredCharacters.map(character => (
                        <CharacterCard
                            key={character.id}
                            code={character.id}
                            image={character.image}
                            name={character.name}
                        />
                    ))}
                </div>
            </>
        )
    }
}