let currentCategory = "all";


function filterProducts() {

    const searchValue = document
        .getElementById("productSearch")
        .value
        .toLowerCase()
        .trim();

    const products = document.querySelectorAll(".product-card");

    let visibleCount = 0;


    products.forEach(product => {

        const name = product
            .dataset.name
            .toLowerCase();

        const category = product.dataset.category;


        const matchesSearch =
            name.includes(searchValue);

        const matchesCategory =
            currentCategory === "all" ||
            category === currentCategory;


        if (matchesSearch && matchesCategory) {

            product.style.display = "block";
            visibleCount++;

        } else {

            product.style.display = "none";

        }

    });


    document.getElementById("productCount").textContent =
        visibleCount;


    if (visibleCount === 0) {

        document.getElementById("noResults").style.display =
            "block";

    } else {

        document.getElementById("noResults").style.display =
            "none";

    }

}



function setCategory(category, button) {

    currentCategory = category;


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });


    button.classList.add("active");


    filterProducts();

}



function viewProduct(productName) {

    alert(
        "You selected: " +
        productName +
        "\n\nProduct details page will be added in Step 3."
    );

}