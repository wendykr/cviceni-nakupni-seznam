const items = [
    {
        id: 'MFJSFr',
        product: 'Rohlíky',
        amount: '10',
        done: false,
    },
    {
        id: 'wvsbDD',
        product: 'Máslo',
        amount: '500 g',
        done: true,
    },
    {
        id: 'm0CccN',
        product: 'Šunka',
        amount: '200 g',
        done: true,
    },
];

const list = items
    .map(oneItems => `
        <li class="item">
            <div class="item__name">${oneItems.product}</div>
            <div class="item__amount">${oneItems.amount}</div>
        </li>`
        )

const ulElm = document.querySelector('ul');
ulElm.innerHTML = list.join('');

console.log(ulElm);