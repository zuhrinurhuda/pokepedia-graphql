/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { List, ListItem, H1, H2, Button } from "views/components";
import { getAvatarImage } from "utils";

const MyPokemonList = () => {
  // Get my pokemon from localStorage
  const [myPokemonList, setMyPokemonList] = React.useState(
    JSON.parse(localStorage.getItem("myPokemonList")) || []
  );

  /**
   * Hanlde pokemon release
   * @param {number} index
   * @param {string} nickname
   */
  const handleRelease = (index, nickname) => () => {
    // Filter the selected nickname
    const filteredNickname = myPokemonList[index].nickname.filter(
      (name) => name !== nickname
    );

    // Check if the nickname array is empty
    if (filteredNickname.length === 0) {
      // If yes, remove pokemon item object
      myPokemonList.splice(index, 1);
    } else {
      // If no, overwrite the nickname array with the filtered nicknames
      myPokemonList[index].nickname = filteredNickname;
    }

    // Update my pokemon list data
    setMyPokemonList([...myPokemonList]);

    // Save changes in localStorage
    localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));
  };

  return (
    <>
      <H1>My Pokemon List</H1>
      <List>
        {myPokemonList.map((pokemon, index) =>
          pokemon.nickname.map((nickname) => (
            <ListItem key={nickname}>
              <div>
                <img
                  width={96}
                  height={96}
                  src={getAvatarImage(pokemon.id)}
                  alt={pokemon.name}
                />
              </div>
              <div
                css={css`
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0 15px;
                `}
              >
                <div>
                  <H2>{pokemon.name}</H2>
                  <p>{`Nickname: ${nickname}`}</p>
                </div>
                <div>
                  <Button onClick={handleRelease(index, nickname)}>
                    Release
                  </Button>
                </div>
              </div>
            </ListItem>
          ))
        )}
      </List>
    </>
  );
};

export default MyPokemonList;
