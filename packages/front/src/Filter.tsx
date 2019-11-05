import * as React from 'react'


type IProps = {
    values?:any,
    errors?:any,
    touched?:any,
    handleChange?:any,
    handleBlur?:any,
    handleSubmit?:any,
    isSubmitting?:any,
    types?: string,
    set?: string,
    handleChangeTypes?:any,
    handleChangeSets?:any,
    name?: string,
    handleChangeName?: any
}

const  Filter = (props:IProps) => {
   const { 
        // values,
        //  errors,
        // touched,
        // handleChange,
        // handleBlur,
        handleSubmit,
        isSubmitting,
        types,
        set,
        handleChangeTypes,
        handleChangeSets,
        name,
        handleChangeName
    } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group col-8 container">
                  <div>
                      <label htmlFor="name">Search by Pokemon name </label>
                      <input type="text" name="searchName" className="pokemonCard--searchName" value={name} onChange={handleChangeName} placeholder="Search name..." />
                    </div>
                    <div>
                        <label htmlFor="type">Chose type of Pokemon </label>
                            <select id="type" name="type" value={types} onChange={handleChangeTypes}>
                                <option value=""></option>
                                <option value="colorless">Colorless</option>
                                <option value="grass">Grass</option>
                                <option value="fire">Fire</option>
                                <option value="water">Water</option>
                                <option value="fighting">Fighting</option>
                                <option value="lightning">Lightning</option>
                                <option value="psychic">Psychic</option>
                                <option value="fairy">Fairy</option>
                                <option value="metal">Metal</option>
                                <option value="darkness">Darkness</option>
                                <option value="dragon">Dragon</option>
                            </select>
                    </div>
                    <div>
                        <label htmlFor="sets">Chose sets</label>
                            <select id="set" name="set" value={set} onChange={handleChangeSets}>
                                <option value=""></option>
                                <option value='Cosmic Eclipse'>Cosmic Eclipse</option>
                                <option value="Hidden_Fates">Hidden Fates</option>
                                <option value="Shiny Vault">Shiny Vault</option>
                                <option value="Unified Minds">Unified Minds</option>
                                <option value="Unbroken Bonds">Unbroken Bonds</option>
                                <option value="Detective Pikachu">Detective Pikachu</option>
                                <option value="Team Up">Team Up</option>
                                <option value="Lost Thunder">Lost Thunder</option>
                                <option value="Dragon Majesty">Dragon Majesty</option>
                                <option value="Celestial Storm">Celestial Strom</option>
                                <option value="Forbidden Light">Forbidden Light</option>
                                <option value="Ultra Prism">Ultra Prism</option>
                                <option value="Crimson Invasion">Crimson Invasion</option>
                                <option value="Shining Legends">Shining Legends</option>
                                <option value="Burning Shadows">Burning Shadows</option>
                                <option value="Guardians Rising">Guardians Rising</option>
                                <option value="SM Black Star Promos">SM Black Star Promos</option>
                                <option value="Sun Moon">Sun and Moon</option>
                                <option value="Evolutions">Evolutions</option>
                                <option value="Steam Siege">Steam Siege</option>
                                <option value="Fates Collide">Fates Collide</option>
                                <option value="Generations">Generations</option>
                                <option value="Break Point">Break Point</option>
                                <option value="Break Through">Break Through</option>
                                <option value="Ancient Origins">Ancient Origins</option>
                                <option value="Roaring Skies">Roaring Skies</option>
                                <option value="Double Crisis">Double Crisis</option>
                                <option value="Primal Clash">Primal Clash</option>
                                <option value="Phantom Forces">Phantom Forces</option>
                                <option value="Furious Fists">Furious Fists</option>
                            </select>
                    </div>
                    {/* <div>
                        <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} disabled={isSubmitting}>Send</button>
                    </div> */}
            </form>
        </div>
    )
}

export default Filter