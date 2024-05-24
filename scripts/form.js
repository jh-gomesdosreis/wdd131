document.addEventListener('DOMContentLoaded', () => {
    // Populate the product select options
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.querySelector('select[name="product-name"]');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Function to update the review count in localStorage
    function updateReviewCount() {
        let reviewCount = localStorage.getItem('reviewCount');
        if (reviewCount === null) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount, 10);
        }
        reviewCount += 1;
        localStorage.setItem('reviewCount', reviewCount);
        document.getElementById('review-count').textContent = reviewCount;
    }

    // Check if the current page is review.html
    if (window.location.pathname.includes('review.html')) {
        updateReviewCount();
    }
});