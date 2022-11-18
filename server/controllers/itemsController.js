import axios from 'axios'
export const getItems = async (req, res) => {
    const { page, category } = req.query
    try {
        const LIMIT = 9
        const { data } = await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&page=${page}&per_page=${LIMIT}${category ?`&q=${category}` : ''}`)
        res.status(200).json(data.hits)
    } catch (error) {
        res.send('error')
        console.log(error);
    }
}