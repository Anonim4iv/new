// Пример простого JavaScript для добавления изображений
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение

    const imageInput = document.getElementById('imageUpload');
    const files = imageInput.files;

    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            document.getElementById('imageGallery').appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});
