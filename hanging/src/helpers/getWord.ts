let words: string[] = [

    "COMPUTADORA",
    "AGUACATE",
    "ANIMAL",
    "CELULAR",
    "TELEFONO",
    "RATON",
    "PASCAL",
    "TOTUCHA"

];

export function getRamdonWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];

}