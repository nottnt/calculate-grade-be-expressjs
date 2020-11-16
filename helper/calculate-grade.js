const calculateGrade = (gradeData = []) => {
    return gradeData.map((row) => {
        row.score = parseInt(row.score)
        if (row.score >= 0 && row.score <= 100) {
            if (row.score >= 80) {
                row.grade = 'A'
            } else if (row.score >= 75) {
                row.grade = 'B+'
            } else if (row.score >= 70) {
                row.grade = 'B'
            } else if (row.score >= 65) {
                row.grade = 'C+'
            } else if (row.score >= 60) {
                row.grade = 'C'
            } else if (row.score >= 55) {
                row.grade = 'D+'
            } else if (row.score >= 50) {
                row.grade = 'D'
            } else if (row.score < 50) {
                row.grade = 'F'
            }
            
        } else {
            row.grade = 'score out of length'
        }

        return row
    })
}

module.exports = {
    calculateGrade,
}
