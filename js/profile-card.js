window.addEventListener("DOMContentLoaded", async function () {
    // List of articles
    const articles = [
        {
            title: "Vehicles routed with efficient use of qubits @ Singapore Quantum Technologies website",
            link: "https://www.quantumlah.org/about/highlight/2024-06-vehicle-routing-efficient-qubits",
            description: "A highlight of the importance of our research work using real data from ExxonMobil."
        },
        {
            title: "Postgraduate Thesis Publication @ Technical University of Crete website",
            link: "https://www.ece.tuc.gr/en/news/item/publication-of-the-postgraduate-thesis-of-a-graduate-student-of-the-ece-school-in-a-high-level-international-research-journal",
            description: "A highlight of my thesis and the work done with colleagues."
        }
    ];

    // Function to display article cards
    document.querySelectorAll(".article-card").forEach((el, index) => {
        const article = articles[index];

        el.innerHTML = `
            <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #000000; background-color: #f9bf3f;">
                <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
                <p>${article.description}</p>
            </div>
        `;
    });
});
