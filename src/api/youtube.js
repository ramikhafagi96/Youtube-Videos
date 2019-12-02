import axios from 'axios';

const KEY = "AIzaSyBP3huzDIh-eYPaDPLrcxu5SUauz2J0ODQ"; //Acces Token Key

export default axios.create({
    baseURL: "https://www.googleapis.com/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});