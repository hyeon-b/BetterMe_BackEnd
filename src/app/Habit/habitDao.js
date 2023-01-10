
//습관 생성
const {stringify} = require("nodemon/lib/utils");

async function insertHabit(connection, insertHabitTBLParams){
    const insertHabitTBLQuery = `
    INSERT INTO habit(userIdx, habitName, contents,goodOrBad,emoge)
    VALUES(?, ?, ?, ?, ?);
`;
    const insertHabitTBLRow = await connection.query(
        insertHabitTBLQuery,
        insertHabitTBLParams
    )

    return insertHabitTBLRow;
}

async function selectHabit(connection){

    const selectHabitListQuery = `
    SELECT userIdx, habitName, contents, life, habitDay, goodOrBad, emoge
    FROM habit;`;
    const [habitRows] = await connection.query(selectHabitListQuery);

    return habitRows;
}
module.exports= {
    insertHabit,
    selectHabit,
};