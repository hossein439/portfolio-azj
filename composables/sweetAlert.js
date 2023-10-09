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

    return { showAlert }
}