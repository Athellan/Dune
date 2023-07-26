/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot } from "firebase/firestore/lite";
import { charactersCollection } from "../../lib/controller";
import { NewCharacter } from "../../types/character";
import { Link } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";

const Search: React.FC = () => {

    const [characters, setCharacters] = useState<NewCharacter[]>([]);
    const [filteredCharacters, setFilteredCharacters] = useState<NewCharacter[]>([]);
    const [search, setSearch] = useState<string>("")

    const handleSearch = () => {
        if (search === "") return;
        setFilteredCharacters(characters.filter((character) => {
            return character.name!.toLowerCase().includes(search.toLowerCase());
        }));
    };

    useEffect(
        () =>
            onSnapshot(
                charactersCollection,
                (snapshot: QuerySnapshot<DocumentData>) => {
                    setCharacters(
                        snapshot.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data(),
                            };
                        })
                    );
                }
            ),
        []
    );

    return (
        <div className="search__page">
            <div className="search !w-1/4">
                <Input
                    bg="white"
                    type="text"
                    placeholder="Rechercher un personnage"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                    colorScheme='blue'
                    onClick={handleSearch}>
                    Go
                </Button >
            </div>
            <div>
                {filteredCharacters.length > 0 ? (
                    filteredCharacters.map((character) => (
                        <div className="search__title" key={character.id}>
                            <Link to={`/character/${character.id}`} state={{ character: character }}>
                                <h1>{character.name}</h1>
                            </Link>
                        </div>
                    ))
                ) : (
                    <h1>Aucun personnage trouvé</h1>
                )}
            </div>
        </div>
    )
}

export default Search