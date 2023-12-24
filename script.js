function calculateTotal() {
    const checkboxes = document.querySelectorAll('.chocolate-checkbox');
    const quantityInputs = document.querySelectorAll('.quantity-input');

    let totalItems = 0;
    let totalPrice = 0;

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const quantity = parseInt(quantityInputs[index].value) || 0;
            const chocolatePrice = getChocolatePrice(checkbox.id);
            const subtotal = quantity * chocolatePrice;

            totalItems += quantity;
            totalPrice += subtotal;
        }
    });

    // Check if the total items exceed 8
    if (totalItems > 8) {
        alert('The total number of chocolates cannot exceed 8 items.');
        return;
    }

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function getChocolatePrice(chocolateType) {
    const priceMap = {
        darkChocolate: 2.50,
        milkChocolate: 2.00,
        whiteChocolate: 3.00,
    };

    return priceMap[chocolateType] || 0;
}
