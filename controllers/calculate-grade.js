const { calculateGrade } = require('../helper/calculate-grade')

module.exports.setup = function (app) {
    /**
     * @swagger
     * /calculateGrade:
     *   post:
     *     description: calculateGrade
     *     tags:
     *       - calculate grade
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: Grade data
     *         schema:
     *           type: object
     *           properties:
     *               grade:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                      subject:
     *                          type: string
     *                      score:
     *                          type: integer
     *     responses:
     *       200:
     *         description: Calculate success
     */

    app.post('/calculateGrade', async (req, res) => {
        const {
            body: { grade },
        } = req
        const gradeResult = calculateGrade(grade)

        res.send(gradeResult)
    })
}
