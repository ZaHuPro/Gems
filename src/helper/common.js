import generator from 'generate-password';

class CommonModule {
    static async randomGenerator(size) {
        const returnData = await generator.generate({
            length: size,
            uppercase: true,
            numbers: true,
            exclude: true,
            excludeSimilarCharacters: true,
        });
        return returnData;
    }
}

export default CommonModule;
