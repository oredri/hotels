document.addEventListener("DOMContentLoaded", function (event) {
    const setValue = (e) =>{
        input.value = e.target.innerHTML
        form.classList.remove("isOpen");
    }
    const cities = [
        'חיפה',
        'תל אביב',
        'ירושלים',
        'אילת',
        'טבריה',
        'נתניה',
        'עפולה'
    ]
    const checkWidth = () => {
        if (document.documentElement.clientWidth < 1100) {
            locationLabel.innerHTML = 'הקלידו מיקום, או שם וילה';
        }
        else {
            locationLabel.innerHTML = 'מיקום, או מתחם';
        }
    }

    const showCities = (cities) => {
        search.innerHTML = ''
        cities.map(city => search.innerHTML += `<div class="search_item">
            <img src="svg/location.svg"/>
            <span class="city_span">${city}</span>
            </div>`)
        document.querySelectorAll(".city_span").forEach(s => s.addEventListener("mousedown", setValue, false))
    }
    
    let form = document.getElementById('myForm');
    let locationLabel = document.getElementById('locationLabel');
    let input = document.getElementById('location');
    let search = document.getElementById('search');
    let exit = document.getElementById('exit');

    checkWidth();
    window.addEventListener('resize', event => {
        checkWidth();
    }, true);

    input.addEventListener('focus', (event) => {
        form.classList.add("isOpen");
        if (input.value) {
            const cityStartsWith = cities.filter((city) => city.startsWith(event.target.value));
            showCities(cityStartsWith);
        }
        else
            showCities(cities);
    });

    input.addEventListener('input', (event) => {
        const cityStartsWith = cities.filter((city) => city.startsWith(event.target.value));
        showCities(cityStartsWith);
    });

    input.addEventListener('blur', (event) => {
        if (document.documentElement.clientWidth >= 1100) {
            form.classList.remove("isOpen");
            search.innerHTML = '';
        }
    });

    exit.addEventListener('click', (event) => {
        form.classList.remove("isOpen");
    });
});
