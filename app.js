const input = document.getElementById('inp');
const button = document.querySelector('.btn');
const list = document.getElementById('list')


button.addEventListener('click', () => {

    if (input.value.trim() !== '') {
        let li = document.createElement('li')
        li.innerHTML = `<label class="check">
                        <input type="checkbox">
                        <div class="checkmark"></div>
                        </label>${input.value}`

        list.appendChild(li)
    } else {
        alert('Upss :c al parecer no has ingresado una tarea!')
        console.log('aaaaa')
    }
    input.value = ''

})

//Este fue mi primer codigo remplazdo ya por ternario de arriba
// if (input !== '') {
//     list.innerHTML += `<li>${input.value}</li>`
// } else {
//     alert('Upss :c al parecer no has ingresado una tarea!')
//     console.log('aaaaa')
// }


// addList = input.value !== '' ? list.innerHTML += `<li><label class="check">
// <input type="checkbox">
// <div class="checkmark"></div>
// </label>${input.value}</li>` : alert('Upss :c al parecer no has ingresado una tarea!');
