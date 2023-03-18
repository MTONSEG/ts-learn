var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const postsRequest = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
    if (navigator.serviceWorker) {
        try {
            yield navigator.serviceWorker.register('./sw.js');
            console.log('Service worker register success');
        }
        catch (e) {
            console.log('Service worker register fail');
        }
    }
    yield loadPosts();
}));
function loadPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetch(postsRequest);
        const data = yield result.json();
        const messages = document.querySelector('.mess-list');
        messages.innerHTML = data.map(toCard).join('\n');
    });
}
function toCard(post) {
    return `
		<li class="mess-item">
			<h1 class="mess-title">${post.title}</h1>
			<p class="mess-text">${post.body}</p>
		</li>
	`;
}
;
//# sourceMappingURL=app.js.map