import Swal from 'sweetalert2';

export function useAlert() {

    function showAlert(icon = 'success', title = '', timer = 3000) {
        return Swal.fire({
            position: 'center',
            icon,
            title,
            showConfirmButton: false,
            timer,
        });
    }

    function deleteAlert(text = 'Are you sure?') {
        return Swal.fire({
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
    }

    function successAlert(title, text) {
        Swal.fire(
            title,
            text,
            'success'
        )
    }

    function loadingAlert(isLoading) {
        Swal.fire({
            html: `
            <div class="loader-container">
                <span class="loader"></span>
            </div>
            `,
            showConfirmButton: false,
            allowOutsideClick: false
        });

    }

    function closeAlert() {
        Swal.close()
    }

    return { showAlert, deleteAlert, successAlert, loadingAlert, closeAlert }
}