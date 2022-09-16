import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = axios.create();
const mock = new MockAdapter(mockAxios, { delayResponse: 1500 });

mock.onGet('/api/card').reply(() => {
    return [
        200,
        {
            Cards: Array.from({ length: 100 }, () => ({
                id: 1,
                image: '/echorous.herokuapp.com/card/image/1.jpg',
                title: '방치된 쓰레기' + Math.random(),
                category: 4,
                style: 0,
                description:
                    '거리와 공공시설에 방치된 쓰레기가 증가하여 지속적인 토양오염도 및 생물 위험도가 상승합니다',
                soil: -2,
                air: 0,
                radio: 0,
                trash: -4,
                ocean: -1,
                approval: -2,
                capital: 0,
                product: 0,
            })),
        },
    ];
});

mock.onGet('/api/card/search').reply(config => {
    if (config.params.opt === 0) {
        return [
            200,
            {
                Cards: Array.from({ length: 100 }, () => ({
                    id: 1,
                    image: '/echorous.herokuapp.com/card/image/1.jpg',
                    title: config.params.word + Math.random(),
                    category: 4,
                    style: 0,
                    description:
                        '거리와 공공시설에 방치된 쓰레기가 증가하여 지속적인 토양오염도 및 생물 위험도가 상승합니다',
                    soil: -2,
                    air: 0,
                    radio: 0,
                    trash: -4,
                    ocean: -1,
                    approval: -2,
                    capital: 0,
                    product: 0,
                })),
            },
        ];
    }
    if (config.params.opt === 1) {
        return [
            200,
            {
                Cards: Array.from({ length: 100 }, () => ({
                    id: 1,
                    image: '/echorous.herokuapp.com/card/image/1.jpg',
                    title: '방치된 쓰레기' + Math.random(),
                    category: 4,
                    style: 0,
                    description: config.params.word,
                    soil: -2,
                    air: 0,
                    radio: 0,
                    trash: -4,
                    ocean: -1,
                    approval: -2,
                    capital: 0,
                    product: 0,
                })),
            },
        ];
    } else throw Error('Invalid');
});

export default mockAxios;
