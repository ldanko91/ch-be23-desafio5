import { Router } from "express";
const usersRouter = Router();

usersRouter.get("/register", (req, res) => {
    const userSession = req.session.user
    if (!userSession) {
        res.render("register")
    } else {
        res.render("profile", {
            user: req.session.user,
        })}
});

usersRouter.get("/login", (req, res) => {
    const userSession = req.session.user
    if (!userSession) {
        res.render("login")
    } else {
        res.render("profile", {
            user: req.session.user,
        })}
});

usersRouter.get("/", (req, res) => {
    const userSession = req.session.user
    if (!userSession) {
        res.render("login")
    } else {
        res.render("profile", {
            user: req.session.user,
        })}
});

usersRouter.get("/logout", (req, res)=>{
    const userSession = req.session.user
    if (!userSession) {
        res.render("login")
    } else {
        req.session.destroy((err) => {

            if (err) {
                console.error("Error al destruir la sesión:", err.message);
            }
            res.clearCookie('connect.sid');
            res.redirect("/login");
        });
}
})

export default usersRouter;