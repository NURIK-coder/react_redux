export const UpdateActions = ()=>{
    return{
        type:'SET_ITEMS',
        payload: [
            {
                id: 1,
                name: 'Doshik',
                price: 70000,
                category: 'Foods',
                count: 122
            },
            {
                id: 2,
                name: 'Iphone',
                price: 12000000,
                category: 'Elecronics',
                count: 12
            },
            {
                id: 3,
                name: 'Apple',
                price: 5000,
                category: 'Fruits',
                count: 11000
            }
        ]
    }
}