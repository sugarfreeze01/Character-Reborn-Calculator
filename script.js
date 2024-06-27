function calculate() {
    const strength = parseFloat(document.getElementById('strength').value);
    const dexterity = parseFloat(document.getElementById('dexterity').value);
    const intelligence = parseFloat(document.getElementById('intelligence').value);
    const constitution = parseFloat(document.getElementById('constitution').value);
    const charm = parseFloat(document.getElementById('charm').value);
    const luck = parseFloat(document.getElementById('luck').value);
    const hp = parseFloat(document.getElementById('hp').value);
    const mp = parseFloat(document.getElementById('mp').value);
    const rebirths = parseFloat(document.getElementById('rebirths').value);
    const level = parseFloat(document.getElementById('level').value);

    const strResult = calculateAttribute(strength, rebirths, level);
    const dexResult = calculateAttribute(dexterity, rebirths, level);
    const intResult = calculateAttribute(intelligence, rebirths, level);
    const conResult = calculateAttribute(constitution, rebirths, level);
    const chaResult = calculateAttribute(charm, rebirths, level);
    const lukResult = calculateAttribute(luck, rebirths, level);
    const hpResult = calculateHPMP(hp, rebirths, level);
    const mpResult = calculateHPMP(mp, rebirths, level);

    document.getElementById('strResult').innerText = `Strength: ${strResult}`;
    document.getElementById('dexResult').innerText = `Dexterity: ${dexResult}`;
    document.getElementById('intResult').innerText = `Intelligence: ${intResult}`;
    document.getElementById('conResult').innerText = `Constitution: ${conResult}`;
    document.getElementById('chaResult').innerText = `Charm: ${chaResult}`;
    document.getElementById('lukResult').innerText = `Luck: ${lukResult}`;
    document.getElementById('hpResult').innerText = `HP: ${hpResult}`;
    document.getElementById('mpResult').innerText = `MP: ${mpResult}`;
}

function calculateAttribute(attribute, rebirths, level) {
    return 10 + attribute * (((rebirths - 1) * 10) + (attribute / 2) + (level / 2)) / 1000;
}

function calculateHPMP(value, rebirths, level) {
    return 100 + value * (((rebirths - 1) * 10) + (value / 1000) + (level / 2)) / 1000;
}
