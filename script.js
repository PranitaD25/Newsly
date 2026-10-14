const API_KEY="3b773a6f07684de99451306c99779b6f"
const url = "https://newsapi.org/v2/everything?q="

//https://newsapi.org/v2/everything?q=Apple&from=2026-10-13&sortBy=popularity&apiKey=API_KEY

window.addEventListener('load',()=>{
   fetchNews("India");
   populateBreakingNews();
})

async function populateBreakingNews(){
    const today= new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&from=${yesterday}&to=${today}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    const articles = data.articles;
    const breakingNewsContent = document.getElementById('breaking-news-content');
    breakingNewsContent.innerHTML = articles[0].title;
    setInterval(()=>{
        const randomIndex = Math.floor(Math.random() * articles.length);
        breakingNewsContent.innerHTML = `<span>${articles[randomIndex].title}</span>`;
    }, 10000)
}


async function fetchNews(query){
    console.log(`${url}${query}&apiKey=${API_KEY}`)
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = '';

    articles.forEach(article => {
        if(!article.urlToImage) {
            article.urlToImage = "./assets/placeholder.jpeg";
        };
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    })
}

function fillDataInCard(cardClone, article){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta"
    });

    newsSource.innerHTML = `${article.source.name} • ${date}`;

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url, "_blank");
    })
}

let currentSelectedNav = null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem  = document.getElementById(id);
    currentSelectedNav?.classList.remove('active');
    currentSelectedNav = navItem;
    currentSelectedNav?.classList.add('active');
}

const searButton = document.getElementById('search-button');
const searchText = document.getElementById('news-input');

searButton.addEventListener('click',()=>{
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
    currentSelectedNav?.classList.remove('active');
    currentSelectedNav = null;
})

function reload(){
    window.location.reload();
}