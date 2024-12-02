const stringsArray = [
    'C-dur',
    'G-dur',
    'D-dur',
    'A-dur',
    'E-dur',
    'H-dur',
    'Fis-dur',
    'Cis-dur',
    'A♭-dur (As-dur)',
    'E♭-dur (Es-dur)',
    'B-dur',
    'F-dur',

    'C-moll',
    'G-moll',
    'D-moll',
    'A-moll',
    'E-moll',
    'H-moll',
    'Fis-moll',
    'Cis-moll',
    'A♭-moll (As-moll)',
    'E♭-moll (Es-moll)',
    'B-moll',
    'F-moll',
];

function displayRandomString() {
    const randomIndex = Math.floor(Math.random() * stringsArray.length);
    const randomString = stringsArray[randomIndex];
    document.getElementById("random-string").textContent = randomString;
}
