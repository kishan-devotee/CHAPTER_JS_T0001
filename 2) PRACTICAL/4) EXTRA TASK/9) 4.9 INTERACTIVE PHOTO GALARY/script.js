let Store = JSON.parse(localStorage.getItem('photo')) || [];

const showPhoto = () => {
    let gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    Store.forEach((photo, index) => {
        gallery.innerHTML += `
        <div>
            <div class="image-container">
                <div class="icon">
                    <span class="eye" id="view_${index}">&#128065;</span>
                    <span class="del" id="delete_${index}">&#128465;</span>
                </div>
                <img src="${photo.url}">
            </div>
        </div>`;
    });
    DeleteListeners();
    ViewListeners();
}


const ViewListeners = () => {
    Store.forEach((photo, index) => {
        let viewIcon = document.getElementById(`view_${index}`);
        viewIcon.addEventListener('click', () => {
            showModal(photo.url);
        });
    });
}

const showModal = (url) => {
    let modal = document.querySelector('.ModalBox');
    modal.style.display = 'block';
    modal.style.display = 'flex';
    let modalImg = document.querySelector('.ModalBox img');
    modalImg.src = url;
    let close = document.querySelector('.closeModal');
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
   ViewListeners();
}

const DeleteListeners = () => {
    Store.forEach((photo, index) => {
        let deleteIcon = document.getElementById(`delete_${index}`);
        deleteIcon.addEventListener('click', () => {
            deletePhoto(index);
        });
    });
}

const deletePhoto = (index) => {
    Store.splice(index, 1);
    localStorage.setItem('photo', JSON.stringify(Store));
    showPhoto(); 
}

const addPhoto = (e) => {
    e.preventDefault();
    let URL = document.querySelector('#inputUrl').value
    if (!URL) return alert('Please enter an image URL');
    
    Store.push({
        url: URL
    });

    localStorage.setItem('photo', JSON.stringify(Store));
    showPhoto(); 

    document.querySelector('#inputUrl').value = '';

    window.location.href = '#';
    window.location.reload();
}

showPhoto();


