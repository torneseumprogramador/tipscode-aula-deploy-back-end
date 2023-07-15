class JsonParserService {
    /**
     * Converte um objeto User em um objeto literal do JavaScript.
     *
     * @param {User} user - O objeto User a ser convertido.
     * @returns {Object} O objeto literal do JavaScript.
     */
    static parseObject(object) {
        const parsedObject = {};

        for (const [key, value] of Object.entries(object)) {
            parsedObject[key] = value;
        }

        return parsedObject;
    }

    /**
     * Converte uma lista de objetos em uma lista de objetos literais do JavaScript.
     *
     * @param {Object[]} objects - A lista de objetos a ser convertida.
     * @returns {Object[]} A lista de objetos literais do JavaScript.
     */
    static parseObjectList(objects) {
        return objects.map(object => this.parseObject(object));
    }
}

module.exports = JsonParserService;
