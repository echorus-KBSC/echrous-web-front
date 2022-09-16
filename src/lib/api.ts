/* eslint-disable require-jsdoc */
import axios from '../mockAxios';

const API_BASE_URL = '/api';

export async function getAllCards() {
    const res = await axios.get(API_BASE_URL + '/card');
    const cardsData = res.data.Cards;
    return cardsData;
}

export async function getCardsByTitle(title: string) {
    const res = await axios.get(API_BASE_URL + '/card/search', {
        params: { opt: 0, word: title },
    });
    const cardsData = res.data.Cards;
    return cardsData;
}

export async function getCardsByDescription(description: string) {
    const res = await axios.get(API_BASE_URL + '/card/search', {
        params: { opt: 1, word: description },
    });
    const cardsData = res.data.Cards;
    return cardsData;
}
