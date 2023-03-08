class Youtube {

    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular() {
        return fetch(
            `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=25&key=${this.key}&part=snippet`
            , this.getRequestOptions
        )
            .then(response => response.json())
            .then(result => result.items);
    }

    async search(query) {
        return fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video`
            , this.getRequestOptions
        )
            .then(response => response.json())
            .then(result => result.items.map( item => ({...item, id: item.id.videoId})));
    }
}

export default Youtube;