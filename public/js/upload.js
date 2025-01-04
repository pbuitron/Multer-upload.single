document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fileInput = document.querySelector('input[type="file"]');
    const alertContainer = document.getElementById('alertContainer');
    const fileNameDisplay = document.querySelector('.file-name');

    if (!alertContainer) {
        console.error('El contenedor de alertas no se encontró en el DOM.');
        return;
    }

    
    const handleFileChange = (e) => {
        const fileName = e.target.files[0] ? e.target.files[0].name : 'PDF';
        fileNameDisplay.textContent = fileName;
    };

    // Agregar el evento change al campo de archivo
    fileInput.addEventListener('change', handleFileChange);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Archivo', fileInput.files[0]);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showAlert(result.message, 'success');
                resetForm(); // Limpiar el formulario después de un envío exitoso
            } else {
                showAlert(result.error, 'error');
            }
        } catch (error) {
            showAlert('Error al subir el archivo', 'error');
        }
    });

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${type}`;
        alertDiv.textContent = message;
        alertContainer.appendChild(alertDiv);

        // Eliminar la alerta después de 3 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    function resetForm() {
        // Desmontar el evento change antes de restablecer el formulario
        fileInput.removeEventListener('change', handleFileChange);

        // Restablecer el formulario
        form.reset();

        // Limpiar el nombre del archivo mostrado
        fileNameDisplay.textContent = 'PDF';

        // Volver a agregar el evento change para la siguiente carga
        fileInput.addEventListener('change', handleFileChange);
    }
});