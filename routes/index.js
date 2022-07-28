let express = require("express"),
    router = express.Router(),
    insert = require("../config/insert"),
    redirect = require("../config/redirect");

// Enter to the page
router.get("/", (req, res) => { res.render("index.html", {"enlace": undefined, "url" : req.protocol + '://' + req.get('host') + req.originalUrl } ); });

// When data from form is sent
router.post("/", async (req, res) => {
    insert(req, res);   // insert new link
});

// Enter to the url shortened
router.get("/:enlace", async (req, res) => {
    redirect(req, res); // redirect to link data
});

// Retornar la ruta
module.exports = router;