type messObj = {
	userId: number,
	id: number,
	title: string,
	body: string
}

const postsRequest: string = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

window.addEventListener('load', async () => {
	if (navigator.serviceWorker) {
		try {
			await navigator.serviceWorker.register('./sw.js');

			console.log('Service worker register success');
		} catch (e) {
			console.log('Service worker register fail');
		}
	}

	await loadPosts();
});

async function loadPosts() {
	const result = await fetch(postsRequest);

	const data: messObj[] = await result.json();

	const messages: HTMLElement = document.querySelector('.mess-list');
	messages.innerHTML = data.map(toCard).join('\n');
}


function toCard(post: messObj): string {
	return `
		<li class="mess-item">
			<h1 class="mess-title">${post.title}</h1>
			<p class="mess-text">${post.body}</p>
		</li>
	`
};

