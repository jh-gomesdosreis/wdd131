const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;