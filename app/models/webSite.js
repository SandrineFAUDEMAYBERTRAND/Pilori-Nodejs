import validator from "validator";
import website from "../data/website.js";

class Website {
    #titre;
    #description;
    #adresse;
    #appareil;
    #niveau;
  
    constructor(config) {
      this.titre = config.titre;
      this.description = config.description;
      this.adresse = config.adresse;
      this.appareil = config.appareil;
      this.niveau = config.niveau;
    }
  
    get titre() {
      return this.#titre;
    }

    get description() {
        return this.#description;
      }

      get adresse() {
        return this.#adresse;
      }

      get appareil() {
        return this.#appareil;
      }

      get niveau() {
        return this.#niveau;
      }
  
    set titre(value) {
        if (typeof value !== 'string' || value.length < 10 || value.length > 50) {
        throw new Error('titre obligatoire');
      }
      this.#titre = value;
    }

    set description(value) {
        if (typeof value !== 'string' || value.length < 10 || value.length > 500) {
          throw new Error('La présentation est une chaîne de caractères obligatoire qui doit faire entre 10 et 500 caractères.');
        }
        this.#description = value;
      }

      set adresse(value) {
        if (!validator.isURL(value)){
          throw new Error('adresse obligatoire');
        }
        this.#adresse = value;
      }

      set appareil(value) {
        if (!value || typeof value !== 'string') {
          throw new Error('appareil obligatoire');
        }
        this.#appareil = value;
      }

      set niveau(value) {
        if (!value || typeof value !== 'string') {
          throw new Error('niveau obligatoire');
        }
        this.#niveau = value;
      }
  }



export default Website;