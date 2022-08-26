// get user's data
// get user's coordinates
function getCoords(){
    navigator.geolocation.getCurrentPosition();
}


// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}

function getMealTime(){
    const tod = userTime

    if (tod > 20) {return 'late-night snack'}
    else if (tod >16) {return 'dinner'}
    else if (tod >11) {return 'lunch'}
    else {return 'breakfast'}
}
//console.log(usergetTime())
console.log(getMealTime())
// helper functions
// check time of day


// build ads
// build ad 1
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}
buildAd1()

// build ad 2


// event listeners
// on load, build ads
