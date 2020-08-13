const container = document.getElementById('container');
const loading = document.querySelector('.loading');

getPost();


window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	if(clientHeight + scrollTop >= scrollHeight - 5) {
		// show the loading animation
		showLoading();
	}
});

function showLoading() {
	loading.classList.add('show');
	
	// load more data
	setTimeout(getPost, 1000)
}

 function getPost() {
	const data = 
{
    "Name":"peugeot 504",
    "Miles_per_Gallon":25,
    "Cylinders":4,
    "Displacement":110,
    "Horsepower":87,
    "Weight_in_lbs":2672,
    "Acceleration":17.5,
    "Year":"1970-01-01",
    "Origin":"Europe"
  }
	addDataToDOM(data);
}

function addDataToDOM(data) {
	const postElement = document.createElement('div');
	postElement.classList.add('blog-post');
	postElement.innerHTML = `
		<h2 class="title">${data["Name"]}</h2>
		<p class="text">${data["Year"]}</p>	`;
	container.appendChild(postElement);
	
	loading.classList.remove('show');
}
