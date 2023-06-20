import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import styles from "./CharacterInfo.module.css"

export function CharacterInfo() {
    const { code } = useParams()
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/${code}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })


    }, [code])

    if (loading) {
        return <div>Loading....</div>
    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
                <div className={styles.container}>
                    <div>
                        <img className={styles.image} src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <section className={styles.header}>
                            <div className={styles.name}>
                                {character.name}
                            </div>
                        </section>
                        <section>
                            <div className={styles.info}>
                                <div>Status</div>
                                <div>{character.status}
                                </div>
                            </div>


                            <div className={styles.info}>
                                <div>Species</div>
                                <div>{character.species}
                                </div>
                            </div>


                            <div className={styles.info}>
                                <div>Gender</div>
                                <div>{character.gender}
                                </div>
                            </div>


                            <div className={styles.info}>
                                <div>Origin</div>
                                <div>{character?.origin?.name}
                                </div>
                            </div>


                            <div className={styles.info}>
                                <div>Location</div>
                                <div>{character?.location?.name}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </>
        )

    }
}
