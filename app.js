const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Casey',
    trackingNumber: '1324kjs'
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Jake',
    trackingNumber: '1325sdk'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Tyler',
    trackingNumber: 'jffd147'
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Gavin',
    trackingNumber: 'acdc145'
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Tim',
    trackingNumber: 'dwa123'
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Taylor',
    trackingNumber: '8081baz'
},

]

let allPackages = packages

function drawPackages() {
    let template = ''
    allPackages.forEach(p => template += `<div class= "col-4 btn btn-primary" onclick="select('${p.to}')">${p.to} <br> ${p.trackingNumber}</div>`)
    let packagesElm = document.getElementById('packages')
    console.log(packagesElm, template);
    packagesElm.innerHTML = template
}

drawPackages()

function doPickup() {
    let randomPackages = allPackages[Math.floor(Math.random() * allPackages.length)]
    console.log('rando', randomPackages);
    randomPackages.guilty = true
}

function select(to) {
    let select = allPackages.find(p => p.to == to)
    console.log('selecting', to, select);
}

function filterheavy() {
    allPackages = allPackages.filter(p => p.heavy == true)
    drawPackages()
}
function filterpriority() {
    allPackages = allPackages.filter(p => p.priority == true)
    drawPackages()
}
function filterfragile() {
    allPackages = allPackages.filter(p => p.fragile == true)
    drawPackages()
}
