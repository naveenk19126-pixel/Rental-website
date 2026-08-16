const pricePerDay = 800;
const securityDeposit = 2000;

const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");


// Prevent selecting past dates

const today = new Date().toISOString().split("T")[0];

startDate.min = today;
endDate.min = today;


function calculateRental() {

    if (!startDate.value || !endDate.value) {
        return;
    }

    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    const difference = end - start;

    const days = difference / (1000 * 60 * 60 * 24);


    if (days <= 0) {

        document.getElementById("rentalDays").textContent =
            "0 days";

        document.getElementById("rentalCost").textContent =
            "₹0";

        document.getElementById("totalAmount").textContent =
            "₹0";

        return;
    }


    const rentalCost = days * pricePerDay;

    const total = rentalCost + securityDeposit;


    document.getElementById("rentalDays").textContent =
        days + " days";

    document.getElementById("rentalCost").textContent =
        "₹" + rentalCost.toLocaleString("en-IN");

    document.getElementById("totalAmount").textContent =
        "₹" + total.toLocaleString("en-IN");
}


function bookProduct() {

    if (!startDate.value || !endDate.value) {

        alert("Please select rental start and end dates.");

        return;
    }


    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    const days =
        (end - start) /
        (1000 * 60 * 60 * 24);


    if (days <= 0) {

        alert("End date must be after start date.");

        return;
    }


    alert(
        "Booking request created!\n\n" +
        "Product: Canon Camera\n" +
        "Rental Days: " + days +
        "\nTotal: ₹" +
        (days * pricePerDay + securityDeposit)
    );

}
function bookProduct() {

    if (!startDate.value || !endDate.value) {
        alert("Please select rental start and end dates.");
        return;
    }

    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    const days =
        (end - start) / (1000 * 60 * 60 * 24);

    if (days <= 0) {
        alert("End date must be after start date.");
        return;
    }

    const rentalCost = days * pricePerDay;
    const total = rentalCost + securityDeposit;

    const booking = {
        id: Date.now(),
        product: "Canon Camera",
        category: "Electronics",
        startDate: startDate.value,
        endDate: endDate.value,
        days: days,
        pricePerDay: pricePerDay,
        rentalCost: rentalCost,
        deposit: securityDeposit,
        total: total,
        status: "Confirmed"
    };

    let rentals =
        JSON.parse(localStorage.getItem("rentEaseRentals")) || [];

    rentals.push(booking);

    localStorage.setItem(
        "rentEaseRentals",
        JSON.stringify(rentals)
    );

    alert("🎉 Booking confirmed successfully!");

    window.location.href = "my-rentals.html";
}