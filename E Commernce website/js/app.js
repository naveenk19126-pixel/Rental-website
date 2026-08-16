function searchProducts() {

    const search = document
        .getElementById("searchInput")
        .value
        .trim();

    const category = document
        .getElementById("categorySelect")
        .value;

    if (search === "" && category === "") {
        alert("Please enter a product or select a category.");
        return;
    }

    alert(
        "Searching for: " +
        (search || "All Products") +
        "\nCategory: " +
        (category || "All Categories")
    );
}