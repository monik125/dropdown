// Dropdown Data
const data = {
   "India": {
        "Gujarat": ["Anand", "Ahmedabad", "Vadodara"],
        "Delhi": ["New Delhi", "Taj Pul", "Gokalpuri"],
        "Maharastara": ["Mumbia", "Nagpur", "Pune"]
    },
    "America": {
        "California": ["San Diago", "Los Angeles", "San Jose"],
        "Texas": ["texas", "San Antonio", "Austin"],
        "Florida": ["Miami", "Tampa", "Destin"]
    },
    "Germany": {
        "State1": ["City1", "City2", "City3"],
        "State2": ["City1", "City2", "City3"],
        "State3": ["City1", "City2", "City3"]
    }
}

// Data loading Fuction
function initDropdowns(){
    const selectedCountry = document.getElementById('country');
    for(const country in data){
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        selectedCountry.appendChild(option);
    }
    
    document.getElementById('country').addEventListener('change', function() {
        fetchStates(this.value)}
    );

    document.getElementById('state').addEventListener('change', function (){
        fetchCites(this.value)}
    );
}

// Fetch states based on selected country
function fetchStates(country){
    const selectedState = document.getElementById('state');
    selectedState.innerHTML = '<option value="">Select State</option>'; // Reset states
    const selectedCity = document.getElementById('city');
    selectedCity.innerHTML = '<option value="">Select City</option>'; // Reset cities
    if(country){
        for (const state in data[country]){
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            selectedState.appendChild(option);
        }
    }
}

// Fetch cities based on selected state and country
function fetchCites(state){
    const selectedCity = document.getElementById('city');
    const country = document.getElementById('country').value;
    selectedCity.innerHTML = '<option value="">Select City</option>'; // Reset cities
    if(state){
        const cities = data[country][state]
        for (const city in cities){
            const option = document.createElement('option');
            option.value = cities[city];
            option.textContent = cities[city];
            selectedCity.appendChild(option);
        }
    }
}

// Submite the seleted Data from Dropdwon
function submitDropdown(){
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;

    const outcountry = document.getElementById('outcountry');
    outcountry.textContent = country;
    const outstate = document.getElementById('outstate');
    outstate.textContent = state;
    const outcity = document.getElementById('outcity');
    outcity.textContent = city;
}

// Reset the Dropdoens
function resetDropdown(){
    document.getElementById('country').value = '';
    document.getElementById('state').innerHTML = '<option value="">Select State</option>';
    document.getElementById('city').innerHTML = '<option value="">Select City</option>';
    document.getElementById('outcountry').textContent = '';
    document.getElementById('outstate').textContent = '';
    document.getElementById('outcity').textContent = '';
}

// Initialize the dropdowns on page load
document.addEventListener('DOMContentLoaded', initDropdowns());