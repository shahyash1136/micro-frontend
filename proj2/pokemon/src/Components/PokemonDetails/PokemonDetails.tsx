import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreProvider, useStore } from "store/store";
import { Male, Female } from '@mui/icons-material'
import { config } from 'store/config';
import './PokemonDetails.css'

const PokemonDetails = () => {
    const { id } = useParams();
    const { pokemon, fetchPokemon, species, fetchPokemonSpecies } = useStore();

    useEffect(() => {
        if (id) {
            fetchPokemon(id);
            fetchPokemonSpecies(id)
        }
    }, [id]);

    let types = pokemon.pokemon?.types?.map((type: any) => {
        return type.type.name;
    });

    let abilities = pokemon.pokemon?.abilities?.map((el: any) => {
        return el.ability.name;
    })
        .join(",");

    let height = Math.round(pokemon.pokemon?.height * 0.328084 * 100) / 100;
    let weight = Math.round(pokemon.pokemon?.weight * 0.220462 * 100) / 100;

    let evs = pokemon.pokemon?.stats?.filter((stat: any) => {
        if (stat.effort > 0) {
            return true;
        }
        return false;
    })
        .map((stat: any) => {
            return `${stat.effort} ${stat.stat.name
                .toLowerCase()
                .split("-")
                .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")}`;
        })
        .join(", ");

    let hatchCount = 255 * (species.species?.hatch_counter + 1);
    let eggGroups = species.species?.egg_groups?.map((el: any) => {
        return el.name;
    })
        .join(",");

    let dec = "";
    species.species?.flavor_text_entries?.some((el: any) => {
        if (el.language.name === "en") {
            dec = el.flavor_text;
            return;
        }
    });

    let catchRate = Math.round((species.species?.capture_rate / 255) * 100);

    let femaleRate = species.species?.gender_rate;
    let femaleRatio = 12.5 * femaleRate;
    let maleRatio = 12.5 * (8 - femaleRate);

    let statsBox = pokemon.pokemon?.stats?.map((el: any) => {
        let statVal = 0;
        if (el.base_stat >= 100) {
            statVal = 100;
        } else {
            statVal = el.base_stat;
        }

        return (
            <div key={el.stat.name} className='pokemon__statsBox'>
                <div className='svgBox'>
                    <svg viewBox='0 0 36 36' className='circular-chart blue'>
                        <path
                            className='circle-bg'
                            d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'></path>
                        <path
                            className='circle'
                            strokeDasharray={`${statVal}, 100`}
                            d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831
                                                        a 15.9155 15.9155 0 0 1 0 -31.831'
                            stroke={species.species?.color?.name}></path>
                        <text x='18' y='20.35' className='percentage'>
                            {statVal}%
                        </text>
                    </svg>
                </div>
                <h4>{el.stat.name}</h4>
            </div>
        );
    });
    let typeSpan = types?.map((el: any) => {
        return (
            <span key={el} style={{ backgroundColor: `#${config.TYPE_COLORS[el]}` }}>
                {el}
            </span>
        );
    });


    return (
        <>
            {
                pokemon.loading && species.loading ? <div>Loading...</div> : <div className='main__container'>
                    <div className='pokemon'>
                        <div className='pokemon__header'>
                            <div className='pokemon__rank'>
                                <span>
                                    <em>#</em>
                                    {id}
                                </span>
                            </div>
                            <div className='pokemon__type'>{typeSpan}</div>
                        </div>
                        <div className='pokemon__body'>
                            <div className='pokemon__body--left'>
                                <div className='pokemon__imgBox'>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                        alt={pokemon.pokemon?.name}
                                    />
                                </div>
                                <h2 className='pokemon__name'>{pokemon.pokemon?.name}</h2>
                            </div>
                            <div className='pokemon__body--right'>
                                <div className='pokemon__para'>
                                    <p>{dec}</p>
                                </div>
                                <div className='pokemon__stats'>{statsBox}</div>
                            </div>
                        </div>
                        <hr />
                        <div className='pokemon__profile'>
                            <div className='pokemon__head'>
                                <h2>Profile</h2>
                            </div>
                            <div className='pokemon__profileBox'>
                                <div className='pokemon__profile--left'>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Height:</span>
                                        <div className='right'>
                                            <span>
                                                {height} <em>ft</em>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Weight:</span>
                                        <div className='right'>
                                            <span>
                                                {weight} <em>lbs</em>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Catch Rate:</span>
                                        <div className='right'>
                                            <span>
                                                {catchRate}
                                                <em>%</em>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Gender Ratio:</span>
                                        <div className='right'>
                                            <span>
                                                {" "}
                                                <Female fontSize="small" />{" "}
                                                {femaleRatio}
                                                <em>%</em>{" "}
                                            </span>
                                            <span>
                                                {" "}
                                                <Male fontSize="small" />{" "}
                                                {maleRatio}
                                                <em>%</em>{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='pokemon__profile--right'>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Egg Groups:</span>
                                        <div className='right'>
                                            <span>{eggGroups}</span>
                                        </div>
                                    </div>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Hatch Steps:</span>
                                        <div className='right'>
                                            <span>{hatchCount}</span>
                                        </div>
                                    </div>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>Abilities:</span>
                                        <div className='right'>
                                            <span>{abilities}</span>
                                        </div>
                                    </div>
                                    <div className='pokemon__profileCard'>
                                        <span className='left'>EVs:</span>
                                        <div className='right'>
                                            <span>{evs}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PokemonDetails