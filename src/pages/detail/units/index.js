import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styled.js';
import Button from '../../../components/button';
import Input from '../../../components/input';
import { AppStyled, AppHeaderStyled, AppBodyStyled } from '../../styled.js';
import { HeaderStyled, BodyStyled, SegmenCatchStyled, GridStyled, ContentBodyStyled } from './styled.js';

const Detail = ({
  pokemonName,
  pokemonMoves,
  pokemonTypes,
  pokemonSprites,
  failedCatch,
  succeedCatch,
  handleCatchPokemon,
  handleRenameNickname,
}) => {
  const [nickname, setNickname] = useState('')

  const onCatchPokemon = () => {
    if(failedCatch && !succeedCatch) { // gagal catch pokemon 
      return (
        <SegmenCatchStyled>
          Failed catch the pokemon
        </SegmenCatchStyled>
      )
    } else if (!failedCatch && succeedCatch) {
      return (
        <SegmenCatchStyled>
          <Input 
            placeholder="insert nickname"
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
            type="text"
          />
          <Button label="Insert!" onClick={() => {
            handleRenameNickname(nickname)
            setNickname('')
          }} /><br/>
        </SegmenCatchStyled>
      )
    } else {
      return (
        <SegmenCatchStyled>
          Catch your pokemon!
        </SegmenCatchStyled>
      )
    }
  }
  return (
    <AppStyled>
      <AppHeaderStyled>
        Detail Pokemon {pokemonName}
      </AppHeaderStyled>
      {
        pokemonName ? (
          <>
            <HeaderStyled>
              <Button label="Catch me!" onClick={() => handleCatchPokemon()} />
            </HeaderStyled>
            <BodyStyled>
              {onCatchPokemon()}

              <ContentBodyStyled>
                <HeaderStyled>
                  Pokemon Image:
                </HeaderStyled>
                <GridStyled>
                {
                  Object.keys(pokemonSprites).map((sp, idx) => (
                    pokemonSprites[sp] && (
                      <div key={`type-${idx}`}>
                        <div>
                          {sp}
                        </div>
                        <div>
                          <img src={pokemonSprites[sp]} alt={sp}/>
                        </div>
                      </div>
                    )
                  ))
                } 
                </GridStyled>
              </ContentBodyStyled>

              <ContentBodyStyled>
                <HeaderStyled>
                  Moves:
                </HeaderStyled>
                <GridStyled>
                {
                  pokemonMoves.map((mv, idx) => (
                    <div key={`move-${idx}`}>
                      {mv.move.name}
                    </div>
                  ))
                }
                </GridStyled>
              </ContentBodyStyled>

              <ContentBodyStyled>
                <HeaderStyled>
                  Types:
                </HeaderStyled>
                <GridStyled>
                {
                  pokemonTypes.map((typ, idx) => {
                    return (
                      <div key={`type-${idx}`}>
                        {typ.type.name}
                      </div>
                    )
                  })
                }
                </GridStyled>
              </ContentBodyStyled>

            </BodyStyled>
          </>
        ) : (
          <AppBodyStyled>
            No data
          </AppBodyStyled>
        )
      }
      
    </AppStyled>
  )
}

Detail.propTypes = {
  handleCatchPokemon: PropTypes.func.isRequired,
  handleRenameNickname: PropTypes.func.isRequired,
  
}

Detail.defaultProps = {
  handleCatchPokemon: () => {},
  handleRenameNickname: () => {},
}

export default Detail
