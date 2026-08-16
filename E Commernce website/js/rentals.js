const rentalList =
    document.getElementById("rentalList");

const emptyRentals =
    document.getElementById("emptyRentals");


let rentals =
    JSON.parse(
        localStorage.getItem("rentEaseRentals")
    ) || [];


function displayRentals() {

    rentalList.innerHTML = "";

    if (rentals.length === 0) {

        emptyRentals.style.display = "block";

        return;
    }

    emptyRentals.style.display = "none";


    rentals.forEach(rental => {

        const card =
            document.createElement("div");

        card.className = "rental-card";


        card.innerHTML = `

            <div class="rental-image">
                📷
            </div>

            <div class="rental-info">

                <h2>${rental.product}</h2>

                <span class="status">
                    ${rental.status}
                </span>

                <p>
                    📅 ${rental.startDate}
                    → ${rental.endDate}
                </p>

                <p>
                    ⏱ ${rental.days} days
                </p>

            </div>

            <div class="rental-price">

                <strong>
                    ₹${rental.total.toLocaleString("en-IN")}
                </strong>

                <button
                    class="cancel-btn"
                    onclick="cancelRental(${rental.id})"
                >
                    Cancel
                </button>

            </div>

        `;


        rentalList.appendChild(card);

    });

}


function cancelRental(id) {

    const confirmCancel =
        confirm(
            "Are you sure you want to cancel this rental?"
        );


    if (!confirmCancel) {
        return;
    }


    rentals =
        rentals.filter(
            rental => rental.id !== id
        );


    localStorage.setItem(
        "rentEaseRentals",
        JSON.stringify(rentals)
    );


    displayRentals();

}


displayRentals();