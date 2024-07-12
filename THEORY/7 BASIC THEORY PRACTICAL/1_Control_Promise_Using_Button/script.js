let b1 = document.createElement('button')
let b2 = document.createElement('button')


b1.textContent = 'Promise Resolve'
b2.textContent = 'Promise Reject'


document.body.append(b1)
document.body.append(b2)


b1.style.margin = "50px"


let Challange = new Promise((resolve, reject) => {
    b1.addEventListener('click', () => {
        resolve('Promise Resolved')
    })
    b2.addEventListener('click', () => {
        reject('Promise Rejected')
    })
})

console.log(Challange);

Challange.then((response) => console.log(response,Challange))
    .catch((error) => console.log(error,Challange))
    .finally(() => console.log('Make Requirement Successfully'))