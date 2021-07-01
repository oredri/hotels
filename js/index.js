const cities = [
    'חיפה',
    'תל אביב',
    'ירושלים',
    'אילת',
    'טבריה',
    'נתניה',
    'עפולה'
]
const checkWidth = (locationLabel, input) => {
    if (document.documentElement.clientWidth < 1100) {
        input.setAttribute("readonly", "true");
        locationLabel.innerHTML = 'הקלידו מיקום, או שם וילה';
        input.value = '';
    }
    else {
        locationLabel.innerHTML = 'מיקום, או מתחם';
        input.removeAttribute('readonly');
    }
}

const showCities = (cities) => {
    search.innerHTML = '';
    cities.map(city => search.innerHTML += `<div class="search_item">
    <img src="svg/location.svg"/>
    <span>${city}</span>
    </div>`)
}

document.addEventListener("DOMContentLoaded", function (event) {
    let locationLabel = document.getElementById('locationLabel');
    let input = document.getElementById('location');
    let inputSearch = document.getElementById('locationSearch');
    let search = document.getElementById('search');
    let sidebar = document.getElementById('sidebar');
    let exit = document.getElementById('exit');

    checkWidth(locationLabel, input);
    window.addEventListener('resize', event => {
        checkWidth(locationLabel, input);
    }, true);

    input.addEventListener('focus', (event) => {
        
        sidebar.classList.add("show");
        showCities(cities);
        inputSearch.focus();
    });

    input.addEventListener('input', (event) => {
        const cityStartsWith = cities.filter((city) => city.startsWith(event.target.value));
        showCities(cityStartsWith);
    });

    input.addEventListener('blur', (event) => {
        if (document.documentElement.clientWidth >= 1100) {
            sidebar.classList.remove("show");
            search.innerHTML = '';
        }
    });

    inputSearch.addEventListener('input', (event) => {
        const cityStartsWith = cities.filter((city) => city.startsWith(event.target.value));
        showCities(cityStartsWith);
    });

    exit.addEventListener('click', (event) => {
        inputSearch.value = '';
        sidebar.classList.remove("show");
        search.innerHTML = '';
    });
});
