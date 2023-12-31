const cookieConfig = {
    httpOnly : true, //웹통신 할때만 쿠키를 적용
    maxAge : 10000 //10초동안 쿠키를 유히
}

const index = (req, res) => {
    const myCookie = req.cookies.myCookie;
    res.render("cookie/main", {myCookie})
}
const popup = (req, res) => {
    res.render("cookie/popup")
}
const makeCookie = (req, res) => {
    res.cookie("myCookie", "value", cookieConfig)
    res.send("<script>window.close()</script>")
}
module.exports = {index, popup, makeCookie}