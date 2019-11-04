import * as React from 'react'
import {Field} from 'formik';


type IProps = {
    values?:any,
    errors?:any,
    touched?:any,
    handleChange?:any,
    handleBlur?:any,
    handleSubmit?:any,
    isSubmitting?:any,
}

const  Filters = (props:IProps) => {
   const { 
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group col-8 container">
                  <div>
                      <label htmlFor="name">Search by Pokemon name </label>
                      <input type="text" name="name" className="pokemonCard--searchName" value={values.name} onChange={handleChange} placeholder="Search name..." />
                      {errors.name && touched.name && errors.name}
                    </div>
                    <div>
                        <label htmlFor="type">Chose type of Pokemon </label>
                            <Field component="select" id="type" name="type" multiple={false}>
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
                            </Field>
                    </div>
                    <div>
                        <label htmlFor="sets">Chose sets</label>
                            <Field component="select" id="sets" name="sets" multiple={false}>
                                <option value="all"></option>
                                <option value="cosmicEclipse">Cosmic Eclipse</option>
                                <option value="hiddenFates">Hidden Fates</option>
                                <option value="shinyVault">Shiny Vault</option>
                                <option value="unifiedMinds">Unified Minds</option>
                                <option value="unbrokenBonds">Unbroken Bonds</option>
                                <option value="detectivePikachu">Detective Pikachu</option>
                                <option value="teamUp">Team Up</option>
                                <option value="lostThunder">Lost Thunder</option>
                                <option value="dragonMajesty">Dragon Majesty</option>
                                <option value="celestialStorm">Celestial Strom</option>
                                <option value="forbiddenLight">Forbidden Light</option>
                                <option value="ultraPrism">Ultra Prism</option>
                                <option value="crimsonInvasion">Crimson Invasion</option>
                                <option value="shiningLegends">Shining Legends</option>
                                <option value="burningShadows">Burning Shadows</option>
                                <option value="guardiansRising">Guardians Rising</option>
                                <option value="smBlackStarPromos">SM Black Star Promos</option>
                                <option value="sunMoon">Sun and Moon</option>
                                <option value="evolutions">Evolutions</option>
                                <option value="steamSiege">Steam Siege</option>
                                <option value="fatesCollide">Fates Collide</option>
                                <option value="generations">Generations</option>
                                <option value="breakPoint">Break Point</option>
                                <option value="breakThrough">Break Through</option>
                                <option value="ancientOrigins">Ancient Origins</option>
                                <option value="roaringSkies">Roaring Skies</option>
                                <option value="doubleCrisis">Double Crisis</option>
                                <option value="primalClash">Primal Clash</option>
                                <option value="phantomForces">Phantom Forces</option>
                                <option value="furiousFists">Furious Fists</option>
                            </Field>
                    </div>
                    <div>
                        <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} disabled={isSubmitting}>Send</button>
                    </div>
            </form>
        </div>
    )
}