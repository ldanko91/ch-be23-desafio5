import { Router } from "express";
const usersRouter = Router();

usersRouter.get("/register", (req, res) => {
    const userSession = req.session.user
    console.log(userSession)
    if (!userSession) {
        res.render("register")
    } else {
        res.render("profile", {
            user: req.session.user,
        })}
});

usersRouter.get("/login", (req, res) => {
    const userSession = req.session.user
    console.log(userSession)
    if (!userSession) {
        res.render("login")
    } else {
        res.render("profile", {
            user: req.session.user,
        })}
});

usersRouter.get("/", (req, res) => {
    const userSession = req.session.user
    console.log(userSession)
    if (!userSession) {
        res.render("login")
    } else {
        res.render("profile", {
            user: req.session.user,
        })}
});

usersRouter.get("/logout", (req, res)=>{
    const userSession = req.session.user
    console.log(userSession)
    if (!userSession) {
        res.render("login")
    } else {
    req.session.destroy(),
    res.render("login")
}
})

export default usersRouter;