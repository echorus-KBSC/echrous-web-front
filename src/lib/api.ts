/* eslint-disable require-jsdoc */
// import axios from '../mockAxios';
import axios from 'axios';

const API_BASE_URL = 'https://echorous.herokuapp.com';

export async function getAllCards() {
    const res = await axios.get(API_BASE_URL + '/card');
    res.data.Cards = res.data.Cards.map((card: any) => ({
        ...card,
        stat: {
            air: card.air,
            approval: card.approval,
            capital: card.capital,
            ocean: card.ocean,
            product: card.product,
            radio: card.radio,
            soil: card.soil,
            trash: card.trash,
        },
    }));
    const cardsData = res.data.Cards;
    return cardsData;
}

export async function getCardsByTitle(title: string) {
    const res = await axios.get(API_BASE_URL + '/card/search', {
        params: { opt: 0, word: title },
    });
    res.data.Cards = res.data.Cards.map((card: any) => ({
        ...card,
        stat: {
            air: card.air,
            approval: card.approval,
            capital: card.capital,
            ocean: card.ocean,
            product: card.product,
            radio: card.radio,
            soil: card.soil,
            trash: card.trash,
        },
    }));
    const cardsData = res.data.Cards;
    return cardsData;
}

export async function getCardsByDescription(description: string) {
    const res = await axios.get(API_BASE_URL + '/card/search', {
        params: { opt: 1, word: description },
    });
    res.data.Cards = res.data.Cards.map((card: any) => ({
        ...card,
        stat: {
            air: card.air,
            approval: card.approval,
            capital: card.capital,
            ocean: card.ocean,
            product: card.product,
            radio: card.radio,
            soil: card.soil,
            trash: card.trash,
        },
    }));
    const cardsData = res.data.Cards;
    return cardsData;
}
