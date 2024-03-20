const members = [
    {
        name: 'wayne barnett',
        role: 'founder & ceo',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    
    {
        name: 'angela carol',
        role: 'chief editor',
        img: 'angela-carol-chief-editor.jpg'

    },

    {
        name: 'walter gordon',
        role: 'office manager',
        img: 'walter-gordon-office-manager.jpg'

    },
    {
        name: 'angela lopez',
        role: 'social media manager',
        img: 'angela-lopez-social-media-manager.jpg'

    },
    {
        name: 'scott estrada',
        role: 'developer',
        img: 'scott-estrada-developer.jpg'

    },
    {
        name: 'barbara ramos',
        role: 'graphic degigner',
        img: 'barbara-ramos-graphic-designer.jpg'

    },
]
console.log(members);
for(let key in members){
    //stampo sulla console gli oggetti
    console.log(members[key]);
const myTableRow = 
`
<tr>
    <td>${members[key].name}</td>
    <td>${members[key].role}</td>
    <td>${members[key].img}</td>
</tr>
`
console.log(myTableRow)
document.querySelector('#members').innerHTML += myTableRow
}