const superagent = require('superagent');
exports.getData = (page=1) => {
    return superagent.get("https://wall.alphacoders.com/api2.0/get.php").query({
        auth: "5319095c1bc840c137ad33138d7f997f",
        method: "newest",
        info_level: 2,
        page
    })
}
exports.getCategory = () => {
    return superagent.get("https://wall.alphacoders.com/api2.0/get.php").query({
        auth: "5319095c1bc840c137ad33138d7f997f",
        method: "category_list"
    })
}
exports.getCategoryData = (id,page=1) => {
    return superagent.get("https://wall.alphacoders.com/api2.0/get.php").query({
        auth: "5319095c1bc840c137ad33138d7f997f",
        method: "category",
        id,
        info_level: 2,
        page,
    })
}