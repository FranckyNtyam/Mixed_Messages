// create an object that contain the data sets.
const dataSet = {
    noun: ['Francky', 'Ludovic', 'Nalf', 'Aimée', 'Melanie', 'Raphaël', 'Jojo', 'Orly', 'Samantha'],
    verbs: ['is', 'must be', 'want', 'require'],
    adjective: ['beautiful', 'wonderful', 'handsome', 'fabulous']
}

// create a function to generate mixed messages
function mixed_message(data) {
    let messages = [];
    for (let index in data) {
        let num = Math.floor(Math.random() * data[index].length);
        switch (index) {
            case 'noun':
                messages.push(`${data[index][num]} remember you are the only one who can control you! Be strong and always follow your heart`);
                break;
            case 'verbs':
                messages.push(`Relationships ${data[index][num]} love, commitment, and intimacy to survive.`);
                break;
            case 'adjective':
                messages.push(`When you always count your blessings, not your troubles is ${data[index][num]}`);
                break;

            default:
                messages.push(`Try again`);
                break;
        }

    }
    return console.log(messages.join('\n'));
}

// call the function to display result in console
mixed_message(dataSet);