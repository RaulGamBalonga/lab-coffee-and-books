const Place = require("../models/place.model");

const router = require("express").Router();



/* CREAR -create[<C>-R-U-D] */
router.get("/crear", (req, res) => res.render("place/create-place"))


router.post("/crear", (req, res) => {
    const { name, type } = req.body


    Place.create({ name, type })
        .then(createdPlace => res.redirect("/places/lista"))
        .catch(err => console.log(err))
}
)

/* LEER -read [C-<R>-U-D] */
router.get("/lista", (req, res, next) => {
    //   console.log("popino");
    Place.find()
        .then(allPlaces => res.render("place/read-place", { allPlaces }))
        .catch(err => console.log(err))
});

/* EDITAR -update [C-R-<U>-D] */
router.get("/editar/:id", (req, res) => {
    const { id } = req.params

    Place.findById(id)
        .then(place => res.render("place/update-place", place))
        .catch(err => console.log(err))

})

router.post("/editar/:id", (req, res) => {
    const { id } = req.params
    const { name, type } = req.body

    Place.findByIdAndUpdate(id, { name, type }, { new: true })
        .then(place => res.redirect(`/places${place._id}`))
        .catch(err => console.log(err))
})


/* BORRAR -delete [C-R-U-<D>] */
router.get("/borrar/:id", (req, res) => {
    const { id } = req.params

    Place.findByIdAndDelete(id)
        .then(() => res.redirect(`/places/lista`))
        .catch(err => console.log(err))
})

module.exports = router;