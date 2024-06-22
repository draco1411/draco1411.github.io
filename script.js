// key-value pairs between dates in 'ranger' format (June 1 = 601) and the kitchen internal 1-14 day meal cycle.
// (Yes I know this is a better way to do this but I can't be sure that we won't have a repeat day or some other oddity that
// throws everything off. I landed on this.)
let dateToMeal = {
    '601': 6,
    '602': 7,
    '603': 8,
    '604': 9,
    '605': 10,
    '606': 11,
    '607': 12,
    '608': 13,
    '609': 14,
    '610': 1,
    '611': 2,
    '612': 3,
    '613': 4,
    '614': 5,
    '615': 6,
    '616': 7,
    '617': 8,
    '618': 9,
    '619': 10,
    '620': 11,
    '621': 12,
    '622': 13,
    '623': 14,
    '624': 1,
    '625': 2,
    '626': 3,
    '627': 4,
    '628': 5,
    '629': 6,
    '630': 7,
    '701': 8,
    '702': 9,
    '703': 10,
    '704': 11,
    '705': 12,
    '706': 13,
    '707': 14,
    '708': 1,
    '709': 2,
    '710': 3,
    '711': 4,
    '712': 5,
    '713': 6,
    '714': 7,
    '715': 8,
    '716': 9,
    '717': 10,
    '718': 11,
    '719': 12,
    '720': 13,
    '721': 14,
    '722': 1,
    '723': 2,
    '724': 3,
    '725': 4,
    '726': 5,
    '727': 6,
    '728': 7,
    '729': 8,
    '730': 9,
    '731': 10,
    '801': 11,
    '802': 12,
    '803': 13,
    '804': 14,
    '805': 1,
    '806': 2,
    '807': 3,
    '808': 4,
    '809': 5,
    '810': 6,
    '811': 7,
    '812': 8,
    '813': 9,
    '814': 10,
    '815': 11,
    '816': 12,
    '817': 13,
    '818': 14,
    '819': 1,
    '820': 2,
    '821': 3,
    '822': 4,
    '823': 5,
    '824': 6,
    '825': 7,
    '826': 8,
    '827': 9,
    '828': 10,
    '829': 11,
    '830': 12,
    '831': 13
}

function displayCurrentDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    document.getElementById('current-date').textContent = formattedDate;
}

displayCurrentDate(new Date());

// Gives the current day in 'ranger' format (June 1 = 601)
function formatedDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate(); 

    if (day < 10) {
        return month.toString() + '0' + day.toString();
    } else
        return month.toString() + day.toString();
} 

// Gives filename for content 
const filename = 'content/day' + dateToMeal[formatedDate()] + '.html';

//fetch the content and load it in to the main section  
fetch(filename)
    .then(response => response.text())
    .then(data => {
        document.getElementById('mainContent').innerHTML = data;
    })

